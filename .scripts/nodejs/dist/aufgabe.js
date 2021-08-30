"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gibAufgabenSammlung = exports.AufgabenSammlung = exports.ExamensAufgabe = exports.Aufgabe = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const glob_1 = __importDefault(require("glob"));
const helfer_1 = require("./helfer");
const tex_1 = require("./tex");
const examen_1 = require("./examen");
function umgebeMitKlammern(text) {
    return `{${text}}`;
}
class Aufgabe {
    constructor(pfad) {
        this.stichwörter = [];
        /**
         * Zeigt an, ob die Aufgabe eine normale Aufgabe ist oder eine Examensaufgabe.
         * Dieser Wert wird in der spezialisierten Klasse Examensaufgabe auf wahr gesetzt.
         */
        this.istExamen = false;
        this.pfad = Aufgabe.normalisierePfad(pfad);
        if (!fs_1.default.existsSync(this.pfad)) {
            throw new Error(`Die Aufgabe mit dem Dateipfad ${this.pfad} existiert nicht.`);
        }
        this.inhalt = helfer_1.leseRepoDatei(this.pfad);
        this.stichwörter = tex_1.sammleStichwörter(this.inhalt);
        this.titel = tex_1.gibInhaltEinesTexMakros('liAufgabenTitel', this.inhalt);
        const metaDaten = this.leseMetadatenVonTex();
        if (metaDaten != null) {
            this.metadaten_ = metaDaten;
        }
        else {
            this.metadaten_ = {
                Titel: '',
                RelativerPfad: this.relativerPfad
            };
        }
    }
    static normalisierePfad(pfad) {
        if (pfad.includes(helfer_1.repositoryPfad)) {
            return pfad;
        }
        return path_1.default.join(helfer_1.repositoryPfad, pfad);
    }
    static istAufgabe(pfad) {
        if (pfad.match(Aufgabe.pfadRegExp) != null) {
            return true;
        }
        return false;
    }
    /**
     * ```tex
     * \liAufgabenMetadaten{
     *   Titel = {Aufgabe 5},
     *   Thematik = {Regal mit DVDs, CDs und BDs},
     *   RelativerPfad = Staatsexamen/66116/2014/09/Thema-2/Teilaufgabe-2/Aufgabe-5.tex,
     *   Fussnote = examen:66116:2014:09,
     *   ExamenNummer = 66116,
     *   ExamenJahr = 2014,
     *   ExamenMonat = 09,
     *   ExamenThemaNr = 2,
     *   ExamenTeilaufgabeNr = 2,
     *   ExamenAufgabeNr = 5,
     * }
     * ```
     */
    leseMetadatenVonTex() {
        function reinige(text) {
            text = text.trim();
            text = text.replace(/\}?,$/, '');
            text = text.replace(/^\{?/, '');
            text = text.trim();
            return text;
        }
        const ergebnis = {};
        const match = this.inhalt.match(new RegExp(/\\liAufgabenMetadaten{(.*)\n}/, 's'));
        if (match != null) {
            const zeilen = match[1];
            for (const zeile of zeilen.split('\n')) {
                const schlüsselWert = zeile.split('=');
                if (schlüsselWert.length === 2) {
                    ergebnis[reinige(schlüsselWert[0])] = reinige(schlüsselWert[1]);
                }
            }
            return ergebnis;
        }
    }
    erzeugeMetadaten() {
        const meta = {
            Titel: this.titel != null && this.titel !== '' ? this.titel : 'Aufgabe',
            Thematik: this.titel != null && this.titel !== '' ? this.titel : 'keine Thematik',
            RelativerPfad: this.relativerPfad
        };
        const section = this.inhalt.match(/\\section\{(.+?)[\n\\}{]/);
        if (section != null && section[1] != null) {
            meta.Titel = section[1];
        }
        const fussnoteZitat = this.inhalt.match(/\\footcite(\[([^\]]+)\])?\{([^}]+)\}/);
        if (fussnoteZitat != null) {
            if (fussnoteZitat[2] != null) {
                meta.FussnoteSeite = umgebeMitKlammern(fussnoteZitat[2]);
            }
            if (fussnoteZitat[3] != null) {
                meta.Fussnote = fussnoteZitat[3];
            }
        }
        return meta;
    }
    get titelFormatiert() {
        let titel;
        if (this.titel != null) {
            titel = `„${this.titel}“`;
        }
        else {
            titel = 'Aufgabe';
        }
        return titel;
    }
    get stichwörterFormatiert() {
        if (this.stichwörter != null && this.stichwörter.length > 0) {
            return ` (${this.stichwörter.join(', ')})`;
        }
        return '';
    }
    /**
     * Formatierter Link zur Tex-Datei.
     */
    get linkTex() {
        return helfer_1.generiereLink('.tex', this.pfad, { linkePdf: false });
    }
    /**
     * Formatierter Link zur PDF-Datei auf Github mit den Stichwörtern.
     */
    get link() {
        return (helfer_1.generiereLink(this.titelFormatiert, this.pfad) +
            this.stichwörterFormatiert +
            ' (' +
            this.linkTex +
            ') ');
    }
    static vergleichePfade(a, b) {
        if (a.pfad < b.pfad) {
            return -1;
        }
        if (a.pfad > b.pfad) {
            return 1;
        }
        return 0;
    }
    get texEinbindenMakro() {
        let relativerPfad = helfer_1.macheRelativenPfad(this.pfad);
        relativerPfad = relativerPfad.replace('.tex', '');
        return `\\liAufgabe{${relativerPfad}}`;
    }
    get relativerPfad() {
        return helfer_1.macheRelativenPfad(this.pfad);
    }
}
exports.Aufgabe = Aufgabe;
Aufgabe.pfadRegExp = /.*Aufgabe_.*\.tex/;
class ExamensAufgabe extends Aufgabe {
    constructor(pfad, examen) {
        super(pfad);
        this.examen = examen;
        this.istExamen = true;
        examen.aufgaben[pfad] = this;
        const treffer = pfad.match(ExamensAufgabe.pfadRegExp);
        if (treffer == null || treffer.groups == null) {
            helfer_1.zeigeFehler(`Konnten den Pfad der Examensaufgabe nicht lesen: ${pfad}`);
        }
        const gruppen = treffer.groups;
        this.aufgabe = parseInt(gruppen.aufgabe);
        if (gruppen.thema != null) {
            this.thema = parseInt(gruppen.thema);
        }
        if (gruppen.teilaufgabe != null) {
            this.teilaufgabe = parseInt(gruppen.teilaufgabe);
        }
    }
    static istExamensAufgabe(pfad) {
        if (pfad.match(ExamensAufgabe.pfadRegExp) != null) {
            return true;
        }
        return false;
    }
    erzeugeMetadaten() {
        const meta = super.erzeugeMetadaten();
        meta.ExamenNummer = this.examen.nummer;
        meta.ExamenJahr = this.examen.jahr;
        meta.ExamenMonat = this.examen.monatMitNullen;
        if (this.thema != null) {
            meta.ExamenThemaNr = this.thema;
        }
        if (this.teilaufgabe != null) {
            meta.ExamenTeilaufgabeNr = this.teilaufgabe;
        }
        meta.ExamenAufgabeNr = this.aufgabe;
        return meta;
    }
    get examensReferenz() {
        return this.examen.referenz;
    }
    get aufgabenReferenz() {
        const output = [];
        if (this.thema != null) {
            output.push(`T${this.thema}`);
        }
        if (this.teilaufgabe != null) {
            output.push(`TA${this.teilaufgabe}`);
        }
        output.push(`A${this.aufgabe}`);
        return output.join(' ');
    }
    get titelKurz() {
        const ausgabe = `${this.examen.titelKurz} ${this.aufgabenReferenz}`;
        if (this.titel != null) {
            return `„${this.titel}“ ${ausgabe}`;
        }
        return ausgabe;
    }
    gibTitelNurAufgabe(alsMarkdownLink = false) {
        const ausgabe = `Aufgabe ${this.aufgabe}${this.stichwörterFormatiert}`;
        if (alsMarkdownLink) {
            return helfer_1.generiereLink(ausgabe, this.pfad);
        }
        return ausgabe;
    }
    get dateiName() {
        const aufgabenReferenz = this.aufgabenReferenz.replace(/ /g, '-');
        return `${this.examen.dateiName}_${aufgabenReferenz}`;
    }
    get link() {
        return (helfer_1.generiereLink(this.titelKurz, this.pfad) +
            this.stichwörterFormatiert +
            ' (' +
            this.linkTex +
            ') ');
    }
    static erzeugePfad(arg1, arg2, arg3) {
        if (arg1 != null && arg2 != null && arg3 != null) {
            return path_1.default.join(`Thema-${arg1}`, `Teilaufgabe-${arg2}`, `Aufgabe-${arg3}.tex`);
        }
        else if (arg1 != null && arg2 != null && arg3 == null) {
            return path_1.default.join(`Thema-${arg1}`, `Aufgabe-${arg2}.tex`);
        }
        else {
            return `Aufgabe-${arg1}.tex`;
        }
    }
    get texEinbindenMakro() {
        let relativerPfad = helfer_1.macheRelativenPfad(this.pfad);
        relativerPfad = relativerPfad.replace('Staatsexamen/', '');
        relativerPfad = relativerPfad.replace('.tex', '');
        return `\\liExamensAufgabe{${relativerPfad}}`;
    }
}
exports.ExamensAufgabe = ExamensAufgabe;
ExamensAufgabe.pfadRegExp = /(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/;
ExamensAufgabe.schwacherPfadRegExp = /(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/;
class AufgabenSammlung {
    constructor(examenSammlung) {
        this.examenSammlung = examenSammlung;
        this.aufgaben = {};
        const dateien = glob_1.default.sync('**/*.tex', { cwd: helfer_1.repositoryPfad });
        this.aufgaben = {};
        for (const pfad of dateien) {
            const aufgabe = this.erzeugeAufgabe(pfad);
            if (aufgabe != null) {
                this.aufgaben[helfer_1.macheRelativenPfad(pfad)] = aufgabe;
            }
        }
    }
    istAufgabenPfad(pfad) {
        return ExamensAufgabe.istExamensAufgabe(pfad) || Aufgabe.istAufgabe(pfad);
    }
    erzeugeAufgabe(pfad) {
        if (ExamensAufgabe.istExamensAufgabe(pfad)) {
            return new ExamensAufgabe(pfad, this.examenSammlung.gibDurchPfad(pfad));
        }
        else if (Aufgabe.istAufgabe(pfad)) {
            return new Aufgabe(pfad);
        }
    }
    gib(pfad) {
        return this.aufgaben[helfer_1.macheRelativenPfad(pfad)];
    }
}
exports.AufgabenSammlung = AufgabenSammlung;
let aufgabenSammlung;
function gibAufgabenSammlung() {
    if (aufgabenSammlung == null) {
        aufgabenSammlung = new AufgabenSammlung(examen_1.gibExamenSammlung());
    }
    return aufgabenSammlung;
}
exports.gibAufgabenSammlung = gibAufgabenSammlung;
