"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeAufgabenTitel = void 0;
var sammlung_1 = require("../sammlung");
function erzeugeAufgabenTitel(dateiPfad) {
    console.log(dateiPfad);
    console.log(sammlung_1.aufgabenSammlung.gib(dateiPfad));
}
exports.erzeugeAufgabenTitel = erzeugeAufgabenTitel;
