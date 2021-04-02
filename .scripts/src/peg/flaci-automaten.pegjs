// \begin{figure}
//     \centering
//     \begin{transitiongraph}[fa]
//         \state[s]{z0}{0}{0}
//         \state{z1}{120}{0}
//         \state[f]{z2}{0}{-100.541}
//         \state{z3}{120}{-100.541}
//         \state{TRAP}{64.865}{-42.162}
//         \transition[line=left]{z0}{z1}{a}
//         \transition{z0}{z2}{b}
//         \transition[line=left]{z1}{z0}{a}
//         \transition{z1}{z3}{b}
//         \transition[line=left]{z2}{z3}{a}
//         \transition{z2}{TRAP}{b}
//         \transition[line=left]{z3}{z2}{a}
//         \transition{z3}{TRAP}{b}
//         \transition{TRAP}{TRAP}{a;b}
//     \end{transitiongraph}
//     \caption{46115:2010:03 2 1 a}
//     \label{graph:46115:2010:03_2_1_a}
// \end{figure}

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

Start = State* Transition*

State =
  WhiteSpace?
  "\\state"
  type:Type?
  name:StringMandatoryArgument
  x:NumberMandatoryArgument
  y:NumberMandatoryArgument WhiteSpace? {
    return '\\node[state,x=' + x +
    ',y=' + y +
    ',' + type +
    '] (' + name +
    ') {' + name +
    '};'
  }

Transition =
  WhiteSpace?
  "\\transition"
  StringOptionalArgument?
  fromState:StringMandatoryArgument
  toState:StringMandatoryArgument
  input:StringMandatoryArgument
  WhiteSpace? {
    return '\\path (' + fromState + ') ' +
    'edge[above] node{' + input + '} ' +
    '(' + toState + ');'
  }

NumberMandatoryArgument = '{' number:Number '}' { return number }
StringMandatoryArgument = '{' string:String '}' { return string }
StringOptionalArgument = '[' string:String ']' { return string }

Type = '[' type:String ']' {
  if (type === 'f') return 'accepting'
  if (type === 's') return 'initial'
  return ''
}

String = string:[a-zA-Z0-9,=]+ { return string.join('') }
Number = number:[-.0-9]+ { return parseFloat(number.join(''))  }

WhiteSpace = [\n\r\t ]+
