"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.konvertiereFlaciToTikz = void 0;
var path_1 = __importDefault(require("path"));
function formatState(state) {
    var additionsOptions = '';
    if (state.Start)
        additionsOptions = ',initial';
    if (state.Final)
        additionsOptions = additionsOptions + ',accepting';
    return "\\node[state,x=" + state.x + ",y=" + state.y + additionsOptions + "] (" + state.Name + ") {" + state.Name + "};";
}
function formatTransition(trans, states) {
    var source = states[trans.Source];
    var target = states[trans.Target];
    var loop = '';
    if (source === target) {
        loop = ',loop';
    }
    return "\\path (" + source + ") edge[above" + loop + "] node{lol} (" + target + ");";
}
function formatAutomaton(states, transitions) {
    return '\\begin{tikzpicture}[->,node distance=2cm]\n' +
        states.join('\n') + '\n\n' +
        transitions.join('\n') + '\n' +
        '\\end{tikzpicture}\n';
}
function konvertiereFlaciToTikz(jsonDateiPfad) {
    var e_1, _a, e_2, _b, e_3, _c;
    var definition = require(path_1.default.join(process.cwd(), jsonDateiPfad));
    console.log(definition);
    var statesRendered = [];
    var states = definition.automaton.States;
    var stateNames = {};
    try {
        for (var states_1 = __values(states), states_1_1 = states_1.next(); !states_1_1.done; states_1_1 = states_1.next()) {
            var state = states_1_1.value;
            stateNames[state.ID] = state.Name;
            statesRendered.push(formatState(state));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (states_1_1 && !states_1_1.done && (_a = states_1.return)) _a.call(states_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var transitionsRendered = [];
    try {
        for (var states_2 = __values(states), states_2_1 = states_2.next(); !states_2_1.done; states_2_1 = states_2.next()) {
            var state = states_2_1.value;
            try {
                for (var _d = (e_3 = void 0, __values(state.Transitions)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var transition = _e.value;
                    transitionsRendered.push(formatTransition(transition, stateNames));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (states_2_1 && !states_2_1.done && (_b = states_2.return)) _b.call(states_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    console.log(formatAutomaton(statesRendered, transitionsRendered));
}
exports.konvertiereFlaciToTikz = konvertiereFlaciToTikz;
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
