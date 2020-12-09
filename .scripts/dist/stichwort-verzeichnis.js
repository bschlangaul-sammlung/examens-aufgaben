"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stichwortBaum = void 0;
var js_yaml_1 = __importDefault(require("js-yaml"));
var helfer_1 = require("./helfer");
var StichwortBaum = /** @class */ (function () {
    function StichwortBaum() {
        this.flach = new Set();
        var roherBaum = js_yaml_1.default.safeLoad(helfer_1.leseRepoDatei('Stichwortverzeichnis.yml'));
        if (!roherBaum)
            throw new Error("Konnte die Konfigurationsdatei nicht lesen");
        this.baum = this.normalisiereBaum(roherBaum);
    }
    StichwortBaum.prototype.existiertStichwort = function (stichwort) {
        if (this.flach.has(stichwort)) {
            throw Error("Doppeltes Stichwort: " + stichwort);
        }
        else {
            this.flach.add(stichwort);
            return false;
        }
    };
    /**
     * Da die YAML-Datei wegen der Anzeige in der README-Datei alle
     * Stichwörter mit einem vorangstellten `- ` auflistete, ist die
     * Ausgabe aus der YAML-Datei sehr verschachtelt
     *
     * @param eingang
     * @param ausgang
     */
    StichwortBaum.prototype.normalisiereBaum = function (eingang, ausgang) {
        if (!ausgang)
            ausgang = {};
        if (typeof eingang === 'string') {
            if (!this.existiertStichwort(eingang)) {
                ausgang[eingang] = true;
            }
        }
        else if (Array.isArray(eingang)) {
            for (var _i = 0, eingang_1 = eingang; _i < eingang_1.length; _i++) {
                var t = eingang_1[_i];
                this.normalisiereBaum(t, ausgang);
            }
        }
        else if (typeof eingang === 'object') {
            for (var stichwort in eingang) {
                if (!this.existiertStichwort(stichwort)) {
                    ausgang[stichwort] = this.normalisiereBaum(eingang[stichwort]);
                }
            }
        }
        else {
            throw new Error("Unbekannter Datentyp f\u00FCr den Stichwortbaum: " + ausgang);
        }
        return ausgang;
    };
    return StichwortBaum;
}());
exports.stichwortBaum = new StichwortBaum();
// const tagsTree = parseTags()
// type TagsTreeInput = StringObject | StringObject[] | string
// function flattenTagsTree (tree: TagsTreeInput, flat?: Set<string>): Set<string> {
//   if (!flat) flat = new Set()
//   if (typeof tree === 'string') {
//     if (flat.has(tree)) {
//       throw Error(`Duplicate tag: ${tree}`)
//     }
//     flat.add(tree)
//   } else if (Array.isArray(tree)) {
//     for (const t of tree) {
//       flattenTagsTree(t, flat)
//     }
//   } else {
//     for (const t in tree) {
//       flattenTagsTree(t, flat)
//       flattenTagsTree(tree[t], flat)
//     }
//   }
//   return flat
// }
// const tagsFlat: Set<string> = flattenTagsTree(tagsTree)
// function getSubTagsTreeByTag (tree: TagsTreeInput, tag: string): TagsTreeInput | undefined {
//   if (typeof tree === 'string') {
//   } else if (Array.isArray(tree)) {
//     for (const t of tree) {
//       const result = getSubTagsTreeByTag(t, tag)
//       if (result) return result
//     }
//   } else {
//     for (const t in tree) {
//       if (tag === t) {
//         return tree[t]
//       } else {
//         const result = getSubTagsTreeByTag(tree[t], tag)
//         if (result) return result
//       }
//     }
//   }
// }
// function getFlatSubTagsByTag (tree: TagsTreeInput, tag: string): string[] {
//   const subTree = getSubTagsTreeByTag(tree, tag)
//   let tagList
//   if (subTree) {
//     tagList = flattenTagsTree(subTree)
//   }
//   if (tagList && Array.isArray(tagList)) {
//     tagList.push(tag)
//     return tagList
//   }
//   return [tag]
// }
