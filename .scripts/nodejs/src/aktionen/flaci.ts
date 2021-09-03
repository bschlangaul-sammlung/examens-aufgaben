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

interface TuringAktion {
  /**
   * lese
   */
  0: string

  /**
   * schreibe
   */
  1: string

  /**
   * Richtung
   */
  2: string
}

interface FlaciKellerÜbergang {
  Source: number
  Target: number
  x: number
  y: number
  Labels: KellerAktion[]
}

interface FlaciTuringÜbergang {
  Source: number
  Target: number
  x: number
  y: number
  Labels: TuringAktion[]
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
  type: 'DEA' | 'NEA' | 'NKA' | 'DKA' | 'TM'
  automaton: FlaciAutomat
  GUID: string
}

interface StateNames {
  [stateId: number]: string
}

function formatierteLänge (länge: number, spiegeln: boolean = false): string {
  if (spiegeln) {
    länge = länge * -1
  }

  länge = Math.round((länge / 70) * 100) / 100
  return `${länge}cm`
}

function formatiereZustandsName (zustand: FlaciZustand): string {
  let name = zustand.Name
  const regExp = /^(z|q)(\d+)$/
  if (name.match(regExp) != null) {
    name = name.replace(regExp, '$1_$2')
    name = `$${name}$`
  }
  return name
}

function formatiereZustand (state: FlaciZustand): string {
  let additionsOptions = ''
  if (state.Start) additionsOptions = ',initial'
  if (state.Final) additionsOptions = additionsOptions + ',accepting'
  const name = formatiereZustandsName(state)
  const koordinate = `at (${formatierteLänge(state.x)},${formatierteLänge(
    state.y,
    true
  )})`
  return `  \\node[state${additionsOptions}] (${state.Name}) ${koordinate} {${name}};`
}

function formatiereÜbergang (trans: FlaciÜbergang, states: StateNames): string {
  const source = states[trans.Source]
  const target = states[trans.Target]
  const eingabeSymbole =
    '$' +
    trans.Labels.map(value => {
      if (value === '') return '\\varepsilon'
      return value
    }).join(',') +
    '$'

  const optionen = bestimmeÜbergangsOptionen(trans)
  return `  \\path (${source}) edge${formatiereOptionen(
    optionen
  )} node{${eingabeSymbole}} (${target});`
}

function bestimmeÜbergangsOptionen (
  trans: FlaciÜbergang | FlaciKellerÜbergang | FlaciTuringÜbergang,
  standardOption: string = 'auto'
): string[] {
  const optionen = [standardOption]
  if (trans.Source === trans.Target) {
    // loop above ergibt eine kleiner Schleife, ähnlich wie loop left etc.
    // So sind alle Schleifen einheitlich groß.
    optionen.push('loop above')
  }

  if ((trans.x !== 0 || trans.y !== 0) && !optionen.includes('loop above')) {
    optionen.push('bend left')
  }
  return optionen
}

function formatiereOptionen (optionen: string[]): string {
  if (optionen.length > 0) {
    return '[' + optionen.join(',') + ']'
  }
  return ''
}

function formatiereKellerZeichen (zeichen: string): string {
  if (zeichen === '') return 'EPSILON'
  if (zeichen === '#') return 'KELLERBODEN'
  return zeichen
}

function formatiereKellerÜbergang (
  trans: FlaciKellerÜbergang,
  states: StateNames
): string {
  const source = states[trans.Source]
  const target = states[trans.Target]

  const übergänge = []
  for (const label of trans.Labels) {
    const übergang = []
    übergang.push(formatiereKellerZeichen(label[1]))
    übergang.push(formatiereKellerZeichen(label[0]))
    let kellerAktion = label[2]
      .map(value => {
        return formatiereKellerZeichen(value)
      })
      .join(' ')
    if (kellerAktion === '') kellerAktion = 'EPSILON'
    übergang.push(kellerAktion)
    übergänge.push('    ' + übergang.join(', '))
  }

  const optionen = bestimmeÜbergangsOptionen(trans, 'above')
  const übergängeFormatiert = übergänge.join(';\n') + ';'

  return `  \\liKellerKante${formatiereOptionen(
    optionen
  )}{${source}}{${target}}{\n${übergängeFormatiert}\n  }\n`
}

function formatiereTuringZeichen (zeichen: string): string {
  if (zeichen === '☐') return 'LEER'
  return zeichen
}

function formatiereTuringÜbergang (
  trans: FlaciTuringÜbergang,
  states: StateNames
): string {
  const source = states[trans.Source]
  const target = states[trans.Target]

  const übergänge = []
  for (const label of trans.Labels) {
    const übergang = []
    übergang.push(formatiereTuringZeichen(label[0]))
    übergang.push(formatiereTuringZeichen(label[1]))
    übergang.push(formatiereTuringZeichen(label[2]))
    übergänge.push('    ' + übergang.join(', '))
  }

  const optionen = bestimmeÜbergangsOptionen(trans, 'above')
  const übergängeFormatiert = übergänge.join(';\n') + ';'

  return `  \\liTuringKante${formatiereOptionen(
    optionen
  )}{${source}}{${target}}{\n${übergängeFormatiert}\n  }\n`
}

function formatiereFlaciLink (def: FlaciDefinition): string {
  return `\\liFlaci{A${def.GUID}}`
}

function formatiereTexEnv (
  name: string,
  inhalt: string,
  optionen: string | null = null
): string {
  let opt = ''
  if (optionen != null) {
    opt = '[' + optionen + ']'
  }
  return '\\begin{' + name + '}' + opt + '\n' + inhalt + '\n\\end{' + name + '}'
}

type AutomatenTyp = 'endlicher' | 'keller' | 'turing'

function formatiereAutomat (def: FlaciDefinition): string {
  const statesRendered = []

  let automatenTyp: AutomatenTyp
  if (def.type === 'NKA' || def.type === 'DKA') {
    automatenTyp = 'keller'
  } else if (def.type === 'TM') {
    automatenTyp = 'turing'
  } else {
    automatenTyp = 'endlicher'
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
      if (automatenTyp === 'endlicher') {
        transitionsRendered.push(formatiereÜbergang(transition, stateNames))
      } else if (automatenTyp === 'keller') {
        const trans = transition as any
        transitionsRendered.push(
          formatiereKellerÜbergang(trans as FlaciKellerÜbergang, stateNames)
        )
      } else {
        const trans = transition as any
        transitionsRendered.push(
          formatiereTuringÜbergang(trans as FlaciTuringÜbergang, stateNames)
        )
      }
    }
  }

  let envOption: string
  if (automatenTyp === 'endlicher') {
    envOption = 'li automat'
  } else if (automatenTyp === 'keller') {
    envOption = 'li kellerautomat'
  } else {
    envOption = 'li turingmaschine'
  }
  const inhalt =
    statesRendered.join('\n') +
    '\n\n' +
    transitionsRendered.join('\n').replace(/\n$/, '')
  const tikzPicture = formatiereTexEnv(
    'center',
    formatiereTexEnv('tikzpicture', inhalt, envOption)
  )
  const liAntwort = tikzPicture + '\n' + formatiereFlaciLink(def)
  return formatiereTexEnv('liAntwort', liAntwort)
}

export default function (jsonDateiPfad: string): void {
  if (jsonDateiPfad.match(/^\//) == null) {
    jsonDateiPfad = path.join(process.cwd(), jsonDateiPfad)
  }
  // eslint-disable-next-line
  const definition = require(jsonDateiPfad) as FlaciDefinition
  console.log(formatiereAutomat(definition))
}
