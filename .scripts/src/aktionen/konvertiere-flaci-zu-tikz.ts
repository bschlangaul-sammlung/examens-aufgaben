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
  return `  \\node[state,${additionsOptions}] (${state.Name}) ${koordinate} {${name}};`
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

function formatiereFlaciLink(def: FlaciDefinition) {
  return `\n\\liFussnoteUrl{https://flaci.com/A${def.GUID}}`
}

function formatiereAutomat (def: FlaciDefinition): string {
  const statesRendered = []

  const states = def.automaton.States
  const stateNames: StateNames = {}
  for (const state of states) {
    stateNames[state.ID] = state.Name
    statesRendered.push(formatiereZustand(state))
  }

  const transitionsRendered = []

  for (const state of states) {
    for (const transition of state.Transitions) {
      transitionsRendered.push(formatiereÜbergang(transition, stateNames))
    }
  }

  return '\\begin{liAntwort}\n\\begin{tikzpicture}[li automat]\n' +
    statesRendered.join('\n') + '\n\n' +
    transitionsRendered.join('\n') + '\n' +
    '\\end{tikzpicture}\n' +
    formatiereFlaciLink(def) +
    '\n\\end{liAntwort}'
}

export function konvertiereFlaciZuTikz(jsonDateiPfad: string) {
  const definition = require(path.join(process.cwd(), jsonDateiPfad)) as FlaciDefinition
  console.log(formatiereAutomat(definition))
}

// function keller (texCode: string, cmdObj: object) {
//   const regExp = /\\transition(\[.*?\])?\{(?<fromState>.*?)\}\{(?<toState>.*?)\}\{(?<transitions>.*?)\}/g

//   function formatElement(input: string | undefined): string {
//     if (input === '' || input == null) return 'epsilon'
//     return input.replace('\\#', 'raute')
//   }

//   function buildTransitions(transitions: string): string {
//     let output: string = ''
//     for (const transition of transitions.split(';').reverse()) {
//       const elements = transition.split(',')
//       output += formatElement('  ' + elements[1]) + ' ' + formatElement(elements[0]) + ' ' + formatElement(elements[2]) + ',\n'
//     }
//     return output
//   }

//   function formatTransitionsForTikz(fromState: string, toState: string, transitions: string): string {
//     return `\\path (${fromState}) edge[above] node{\\u{\n${transitions}}} (${toState});\n`
//   }

//   let match
//   while( (match = regExp.exec( texCode )) != null ) {
//     if (match?.groups != null) {
//       const groups = match.groups
//       console.log(formatTransitionsForTikz(groups.fromState, groups.toState, buildTransitions(groups.transitions)))
//     }
//   }
// }
