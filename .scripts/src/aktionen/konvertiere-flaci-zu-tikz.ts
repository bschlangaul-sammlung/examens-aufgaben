import path from 'path'

// \begin{tikzpicture}[->,node distance=2cm]
// \node[state,initial] (A) {A};
// \node[state,above right of=A] (B) {B};
// \node[state,below right of=A] (C) {C};
// \node[state,right of=C] (D) {D};
// \node[state,above of=D,accepting] (E) {E};

// \path (A) edge[above] node{0} (B);
// \path (A) edge[above] node{1} (C);
// \path (B) edge[above] node{0} (E);
// \path (B) edge[right] node{1} (C);
// \path (C) edge[above] node{0} (D);
// \path (C) edge[above,loop below] node{1} (C);
// \path (E) edge[above] node{0} (E);
// \path (D) edge[above] node{1} (A);
// \path (E) edge[above,loop right] node{0,1} (E);
// \end{tikzpicture}

interface FlaciÜbergang {
  Source: number
  Target: number
  x: number
  y: number
  Labels: string[]
}

interface KellerAktion {
  0: string
  1: string
  2: string[]
}

interface FlaciKellerÜbergang {
  Source: number
  Target: number
  x: number
  y: number
  Labels: KellerAktion[]
}

interface FlaciZustand {
  ID: number
  Name: string
  x: number
  y: number
  Final: boolean
  Radius: number
  Transitions: FlaciÜbergang[]
  Start: boolean
}

interface FlaciAutomat {
  simulationInput: string[]
  Alphabet: string[]
  StackAlphabet: string[]
  States: FlaciZustand[]
  lastInputs: string[][]
}

interface FlaciDefinition {
  name: string
  description: string
  type: string
  automaton: FlaciAutomat
  GUID: string
}

interface StateNames {
  [stateId: number]: string
}

function formatierteLänge(länge: number, spiegeln: boolean = false): string {
  if (spiegeln) {
    länge = länge * -1
  }

  länge = Math.round((länge / 70) * 100) / 100
  return `${länge}cm`
}

function formatiereZustandsName (zustand: FlaciZustand): string {
  let name = zustand.Name
  const regExp = /^(z|q)(\d+)$/
  if (name.match(regExp)) {
    name = name.replace(regExp, '$1_$2')
    name = `$${name}$`
  }
  return name
}

function formatiereZustand (state: FlaciZustand): string {
  let additionsOptions = ''
  if (state.Start) additionsOptions = ',initial'
  if (state.Final) additionsOptions = additionsOptions + ',accepting'
  let name = formatiereZustandsName(state)
  const koordinate = `at (${formatierteLänge(state.x)},${formatierteLänge(state.y, true)})`
  return `  \\node[state${additionsOptions}] (${state.Name}) ${koordinate} {${name}};`
}

function formatiereÜbergang (trans: FlaciÜbergang, states: StateNames) {
  const source = states[trans.Source]
  const target = states[trans.Target]
  const eingabe = trans.Labels.join(',')
  let loop = ''
  if (source === target) {
    loop = ',loop'
  }

  let biegen = ''
  if (trans.x !== 0 || trans.y !== 0) {
    biegen = ',bend left'
  }

  if (loop !== '') {
    biegen = ''
  }
  return `  \\path (${source}) edge[auto${biegen}${loop}] node{${eingabe}} (${target});`
}

function formatiereOptionen (optionen: string[]): string {
  if (optionen.length > 0) {
    return '[' + optionen.join(',') + ']'
  }
  return ''
}

function formatiereKellerZeichen(zeichen: string): string {
  if (zeichen === '') return 'epsilon'
  if (zeichen === '#') return 'raute'
  return zeichen
}

function formatiereKellerÜbergang (trans: FlaciKellerÜbergang, states: StateNames) {
  const source = states[trans.Source]
  const target = states[trans.Target]

  const übergänge = []
  for (const label of trans.Labels) {
    const übergang = []
    übergang.push(formatiereKellerZeichen(label[1]))
    übergang.push(formatiereKellerZeichen(label[0]))
    let kellerAktion = label[2].map((value) => {
      return formatiereKellerZeichen(value)
    }).join('')
    if (kellerAktion === '') kellerAktion = 'epsilon'
    übergang.push(kellerAktion)
    übergänge.push('    ' + übergang.join(' '))
  }

  let optionen = []
  if (source === target) {
    optionen.push('loop')
  }

  if ((trans.x !== 0 || trans.y !== 0) && !optionen.includes('loop')) {
    optionen.push('bend left')
  }

  return `  \\liKellerKante${formatiereOptionen(optionen)}{${source}}{${target}}{\n${übergänge.join(',\n')}\n  }\n`
}

function formatiereFlaciLink(def: FlaciDefinition) {
  return `\n\\liFlaci{A${def.GUID}}`
}

function formatiereTexEnv(name: string, inhalt: string, optionen: string | null = null): string {
  let opt = ''
  if (optionen != null) {
    opt = '[' + optionen + ']'
  }
  return '\\begin{' + name +  '}' + opt + '\n' + inhalt + '\n\\end{' + name +  '}'
}

function formatiereAutomat (def: FlaciDefinition): string {
  const statesRendered = []

  let istKeller = false
  if (def.type === 'NKA' || def.type === 'DKA') {
    istKeller = true
  }

  const states = def.automaton.States
  const stateNames: StateNames = {}
  for (const state of states) {
    stateNames[state.ID] = state.Name
    statesRendered.push(formatiereZustand(state))
  }

  const transitionsRendered = []

  for (const state of states) {
    for (const transition of state.Transitions) {
      if (!istKeller) {
        transitionsRendered.push(formatiereÜbergang(transition, stateNames))
      } else {
        const trans = transition as any
        transitionsRendered.push(formatiereKellerÜbergang(<FlaciKellerÜbergang> trans, stateNames))
      }
    }
  }
  const inhalt = statesRendered.join('\n') + '\n\n' + transitionsRendered.join('\n')
  const tikzPicture = formatiereTexEnv('center', formatiereTexEnv(
    'tikzpicture',
    inhalt,
    istKeller ? 'li kellerautomat' : 'li automat'
  ))
  const liAntwort = tikzPicture + '\n' + formatiereFlaciLink(def)
  return formatiereTexEnv('liAntwort', liAntwort)
}

export function konvertiereFlaciZuTikz(jsonDateiPfad: string) {
  if (!jsonDateiPfad.match(/^\//)) {
    jsonDateiPfad = path.join(process.cwd(), jsonDateiPfad)
  }
  const definition = require(jsonDateiPfad) as FlaciDefinition
  console.log(formatiereAutomat(definition))
}
