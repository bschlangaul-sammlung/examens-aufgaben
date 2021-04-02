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

interface FlaciTransition {
  Source: number
  Target: number
  x: number
  y: number
  Label: string[]
}

interface FlaciState {
  ID: number
  Name: string
  x: number
  y: number
  Final: boolean
  Radius: number
  Transitions: FlaciTransition[]
  Start: boolean
}

interface FlaciAutomaton {
  simulationInput: string[]
  Alphabet: string[]
  StackAlphabet: string[]
  States: FlaciState[]
  lastInputs: string[][]
}

interface FlaciDefinition {
  name: string
  description: string
  type: string
  automaton: FlaciAutomaton
  GUID: string
}

interface StateNames {
  [stateId: number]: string
}

function formatState(state: FlaciState): string {
  let additionsOptions = ''
  if (state.Start) additionsOptions = ',initial'
  if (state.Final) additionsOptions = additionsOptions + ',accepting'
  return `\\node[state,x=${state.x},y=${state.y}${additionsOptions}] (${state.Name}) {${state.Name}};`
}

function formatTransition(trans: FlaciTransition, states: StateNames) {
  const source = states[trans.Source]
  const target = states[trans.Target]
  let loop = ''
  if (source === target) {
    loop = ',loop'
  }
  return `\\path (${source}) edge[above${loop}] node{lol} (${target});`
}

function formatAutomaton (states: string[], transitions: string[]): string {
  return '\\begin{tikzpicture}[->,node distance=2cm]\n' +
    states.join('\n') + '\n\n' +
    transitions.join('\n') + '\n' +
    '\\end{tikzpicture}\n'
}

export function konvertiereFlaciToTikz(jsonDateiPfad: string) {
  const definition = require(path.join(process.cwd(), jsonDateiPfad)) as FlaciDefinition
  console.log(definition)

  const statesRendered = []

  const states = definition.automaton.States
  const stateNames: StateNames = {}
  for (const state of states) {
    stateNames[state.ID] = state.Name
    statesRendered.push(formatState(state))
  }

  const transitionsRendered = []

  for (const state of states) {
    for (const transition of state.Transitions) {
      transitionsRendered.push(formatTransition(transition, stateNames))
    }
  }

  console.log(formatAutomaton(statesRendered, transitionsRendered))
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
