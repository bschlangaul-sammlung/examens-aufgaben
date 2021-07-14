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
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffneDurchStichwort = void 0;
var sammlung_1 = require("../sammlung");
function öffneDurchStichwort(stichwort) {
    var e_1, _a;
    var aufgaben = sammlung_1.stichwortVerzeichnis.gibAufgabenMitStichwort(stichwort);
    if (aufgaben.size === 0) {
        console.log("Das Stichwort " + stichwort + " gibt es nicht. War " + sammlung_1.stichwortBaum.findeÄhnliches(stichwort) + " gemeint?");
    }
    else {
        try {
            for (var aufgaben_1 = __values(aufgaben), aufgaben_1_1 = aufgaben_1.next(); !aufgaben_1_1.done; aufgaben_1_1 = aufgaben_1.next()) {
                var aufgabe = aufgaben_1_1.value;
                console.log(aufgabe.pfad);
                console.log(aufgabe.texEinbindenMakro);
                //öffneProgramm('code', aufgabe.pfad)
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (aufgaben_1_1 && !aufgaben_1_1.done && (_a = aufgaben_1.return)) _a.call(aufgaben_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
exports.öffneDurchStichwort = öffneDurchStichwort;
