
import yaml from 'js-yaml'

import { leseRepoDatei } from './helfer'

interface Baum {
  [key: string]: Baum | true
}

class StichwortBaum {
  baum: Baum
  flach: Set<string>

  constructor() {
    this.flach = new Set<string>()
    const roherBaum = yaml.safeLoad(leseRepoDatei('Stichwortverzeichnis.yml'))
    if (!roherBaum) throw new Error(`Konnte die Konfigurationsdatei nicht lesen`)
    this.baum = this.normalisiereBaum(roherBaum)
  }

  existiertStichwort(stichwort: string): boolean {
    if (this.flach.has(stichwort)) {
      throw Error(`Doppeltes Stichwort: ${stichwort}`)
    } else {
      this.flach.add(stichwort)
      return false
    }
  }

  /**
   * Da die YAML-Datei wegen der Anzeige in der README-Datei alle
   * Stichwörter mit einem vorangstellten `- ` auflistete, ist die
   * Ausgabe aus der YAML-Datei sehr verschachtelt
   *
   * @param eingang
   * @param ausgang
   */
  normalisiereBaum (eingang: any, ausgang?: Baum): Baum {
    if (!ausgang) ausgang = {}
    if (typeof eingang === 'string') {
      if (!this.existiertStichwort(eingang)) {
        ausgang[eingang] = true
      }
    } else if (Array.isArray(eingang)) {
      for (const t of eingang) {
        this.normalisiereBaum(t, ausgang)
      }
    } else if (typeof eingang === 'object') {
      for (const stichwort in eingang) {
        if (!this.existiertStichwort(stichwort)) {
          ausgang[stichwort] = this.normalisiereBaum(eingang[stichwort])
        }
      }
    } else {
      throw new Error(`Unbekannter Datentyp für den Stichwortbaum: ${ausgang}`)
    }
    return ausgang
  }
}

export const stichwortBaum = new StichwortBaum()

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
