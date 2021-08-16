# Aufgaben- und Materialsammlung „Lehramt Informatik“

Aufgaben- und Materialsammlung mit Lösungen für das Studium „Lehramt
Informatik“ in Bayern.

__TeX:__ Alle Aufgaben und Materialen sind „geTeX’t“, d. h. mit Hilfe
des Textsatzsystems [TeX](https://www.ctan.org/) bzw. mit der
Makrossammlung [LaTeX](https://www.latex-project.org) gesetzt. Im Ordner
[.tex](https://github.com/hbschlang/lehramt-informatik/tree/main/.tex)
befindet sich eine mittlerweile umfangreiche [Sammlungen an
Hilfs-Klassen und
-Paketen](https://github.com/hbschlang/lehramt-informatik/raw/main/.tex/dokumentation.pdf),
die benötigt werden, um die Aufgaben zu setzen.

__Java:__ Zu diesem Repository, das vorallem TeX- und PDF-Dateien
enthält, gehört ein [Git-Repository mit
Java-Code](https://github.com/hbschlang/Java-Didaktik-Beispiele). Dieses
Java-Repository ist als [git
submodule](https://git-scm.com/book/de/v2/Git-Tools-Submodule)
eingebunden.

## Abkürzungen der Modulnamen

| Abk.  | Modulename                                          |
|-------|-----------------------------------------------------|
| MATHE | Mathematische Grundlagen                            |
| DB    | Datenbanksysteme                                    |
| OOMUP | Objektorientierte Modellierung und Programmierung   |
| AUD   | Algorithmen und Datenstrukturen                     |
| FUMUP | Funktionale Modellierung und Programmierung         |
| SOSY  | Softwaresysteme und Softwareentwicklungspraktikum   |
| TECH  | Technische Informatik                               |
| THEO  | Theoretische Informatik                             |
| DDI   | Didaktik der Informatik                             |

# Aufgaben geordnet nach Themen



## Datenbanksysteme (DB)

Das Kapitel „Datenbanksysteme“ ist in etwa so gegliedert wie das
Lehrbuch „Datenbanksysteme“ von Alfons Kemper und André Eickler.


### Übersicht
- [„Drei-Schichten-Modell“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/10_Uebersicht/Aufgabe_Drei-Schichten-Modell.pdf) (Drei-Schichten-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/10_Uebersicht/Aufgabe_Drei-Schichten-Modell.tex)) 
- [„Speicherung-Dateisystem“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/10_Uebersicht/Aufgabe_Speicherung-Dateisystem.pdf) (Datenbank-Übersicht) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/10_Uebersicht/Aufgabe_Speicherung-Dateisystem.tex)) 
- [„Terminologie“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/10_Uebersicht/Aufgabe_Terminologie.pdf) (Datenbanksystem, Datenbank, Datenbankmanagementsystem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/10_Uebersicht/Aufgabe_Terminologie.tex)) 
- [„Theoriefragen Datenbank“ Examen 46116 Herbst 2015 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Datenunabhängigkeit, Superschlüssel, Referentielle Integrität) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Tupelidentifikator“ Examen 46116 Frühjahr 2017 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Physische Datenorganisation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Tupel-Identifikator und BBaum (k=2)“ Examen 66114 Herbst 2016 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/09/Thema-2/Aufgabe-5.pdf) (Physische Datenorganisation, Tupel-Identifikator, B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/09/Thema-2/Aufgabe-5.tex)) 
- [Examen 66116 Herbst 2016 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (B-Baum, Tupel-Identifikator) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
- [„Allgemeine Fragen“ Examen 66116 Frühjahr 2019 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Datenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Vermischte Datenbank-Fragen“ Examen 66116 Herbst 2019 T2 TA2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-6.pdf) (Datenbank-Übersicht, Natural-Join, Equi-Join, Theta-Join, UNION, INTERSECT, EXCEPT) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-6.tex)) 
- [„Vermischte Fragen“ Examen 66116 Frühjahr 2021 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Datenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 


### Datenbankentwurf

#### Entity-Relation-Modell
- [„DBTec“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_DBTec.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_DBTec.tex)) 
- [„Fahrzeugverwaltung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Fahrzeugverwaltung.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Fahrzeugverwaltung.tex)) 
- [„Firma“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Firma.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Firma.tex)) 
- [„Flughafen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Flughafen.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Flughafen.tex)) 
- [„Multiple-Choice“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Multiple-Choice.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Multiple-Choice.tex)) 
- [„Olympische Spiele“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Olympische-Spiele.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/20_Datenbankentwurf/01_Entity-Relation-Modell/Aufgabe_Olympische-Spiele.tex)) 
- [„Fahrzeug“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Fahrzeug.pdf) (IS-A, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Fahrzeug.tex)) 
- [„Bundesliga-Datenbank“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Bundesliga-Datenbank.pdf) (Relationale Algebra, SQL, Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Bundesliga-Datenbank.tex)) 
- [„Rennstall“ Examen 46116 Frühjahr 2013 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Konsulat“ Examen 46116 Frühjahr 2015 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Freizeitparks“ Examen 46116 Herbst 2018 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Schulverwaltung“ Examen 46116 Herbst 2018 T2 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-5.tex)) 
- [„Universitätsdatenbank“ Examen 66111 Frühjahr 1996 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Aufgabe-2.pdf) (Entity-Relation-Modell, Verfeinertes Relationenmodell, SQL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Aufgabe-2.tex)) 
- [„Fertigung“ Examen 66111 Herbst 1997 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/09/Aufgabe-3.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/09/Aufgabe-3.tex)) 
- [„Handelsunternehmen“ Examen 66116 Frühjahr 2012 T1 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-1.tex)) 
- [Examen 66116 Frühjahr 2015 T1 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Online-Auktionshaus“ Examen 66116 Herbst 2015 T1 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Forstverwaltung“ Examen 66116 Frühjahr 2016 T1 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Polizei“ Examen 66116 Frühjahr 2016 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Entity-Relation-Modell, SQL mit Übungsdatenbank, Relationale Algebra, SQL, VIEW, WITH, UNION) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Zirkus“ Examen 66116 Frühjahr 2018 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Schule Hogwarts aus Harry Potter“ Examen 66116 Herbst 2019 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Einwohnermeldeamt“ Examen 66116 Frühjahr 2020 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Wetterdienst“ Examen 66116 Frühjahr 2020 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Automobilproduktion“ Examen 66116 Frühjahr 2021 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Online-Marktplatze“ Examen 66116 Frühjahr 2021 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 


### Relationales Modell

#### Relationenmodell
- [„Bus-Unternehmen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Bus-Unternehmen.pdf) (Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Bus-Unternehmen.tex)) 
- [„Fahrzeug“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Fahrzeug.pdf) (IS-A, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Fahrzeug.tex)) 
- [„Krankenhaus“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Krankenhaus.pdf) (Verfeinertes Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Krankenhaus.tex)) 
- [„Mitarbeiter-Projekte einer Abteilung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Mitarbeiter-Projekte.pdf) (Relationenmodell, Verfeinertes Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Mitarbeiter-Projekte.tex)) 
- [„Süße Produktion“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Suesse-Produktion.pdf) (Relationenmodell, Kartesisches Produkt) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Suesse-Produktion.tex)) 
- [„Tutor“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Tutor.pdf) (Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/10_Relationenmodell/Aufgabe_Tutor.tex)) 
- [„Rennstall“ Examen 46116 Frühjahr 2013 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Konsulat“ Examen 46116 Frühjahr 2015 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Schulverwaltung“ Examen 46116 Herbst 2018 T2 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-5.tex)) 
- [„Universitätsdatenbank“ Examen 66111 Frühjahr 1996 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Aufgabe-2.pdf) (Entity-Relation-Modell, Verfeinertes Relationenmodell, SQL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Aufgabe-2.tex)) 
- [„Fertigung“ Examen 66111 Herbst 1997 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/09/Aufgabe-3.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/09/Aufgabe-3.tex)) 
- [„Forstverwaltung“ Examen 66116 Frühjahr 2016 T1 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Zirkus“ Examen 66116 Frühjahr 2018 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Entity-Relation-Modell, Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Autoverleih“ Examen 66116 Frühjahr 2021 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Relationenmodell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
#### Relationale Algebra
- [„Bundesliga-Datenbank“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Bundesliga-Datenbank.pdf) (Relationale Algebra, SQL, Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Bundesliga-Datenbank.tex)) 
- [„Division“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Division.pdf) (Relationale Algebra, Division) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Division.tex)) 
- [„Freizeitcenter“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Freizeitcenter.pdf) (Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Freizeitcenter.tex)) 
- [„Universität“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Universitaet.pdf) (Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Universitaet.tex)) 
- [„Vater-Muter-Kind“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Vater-Muter-Kind.pdf) (Division) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Vater-Muter-Kind.tex)) 
- [„Wassned“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Wassned.pdf) (Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Wassned.tex)) 
- [„Kaufhaus“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Kaufhaus.pdf) (SQL, SQL mit Übungsdatenbank, Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Kaufhaus.tex)) 
- [„Browser-Online-Spiele“ Examen 46116 Frühjahr 2013 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Relationale Algebra, SQL, Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Mitfahrgelegenheiten“ Examen 46116 Frühjahr 2014 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Computer „Chiemsee““ Examen 46116 Frühjahr 2015 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Relationale Algebra, SQL, GROUP BY, HAVING) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Relationen R, S und T“ Examen 46116 Herbst 2018 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Harry Potter“ Examen 46116 Herbst 2019 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/09/Thema-2/Aufgabe-4.pdf) (Relationale Algebra, Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/09/Thema-2/Aufgabe-4.tex)) 
- [„Gebrauchtwagen“ Examen 66111 Herbst 1996 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Aufgabe-4.pdf) (Dritte Normalform, Relationale Algebra, SQL, GROUP BY) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Aufgabe-4.tex)) 
- [„Polizei“ Examen 66116 Frühjahr 2016 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Entity-Relation-Modell, SQL mit Übungsdatenbank, Relationale Algebra, SQL, VIEW, WITH, UNION) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Medikamente“ Examen 66116 Frühjahr 2019 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-2.pdf) (SQL, SQL mit Übungsdatenbank, Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-2.tex)) 
- [Examen 66116 Frühjahr 2019 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (Relationale Algebra, RelaX - relational algebra calculator) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Vermischte Datenbank-Fragen“ Examen 66116 Herbst 2019 T2 TA2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-6.pdf) (Datenbank-Übersicht, Natural-Join, Equi-Join, Theta-Join, UNION, INTERSECT, EXCEPT) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-6.tex)) 
- [„Universitätsschema“ Examen 66116 Frühjahr 2020 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Relationale Algebra, Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Relationale Algebra und Optimierung“ Examen 66116 Herbst 2020 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Relationale Algebra, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [Examen 66116 Frühjahr 2021 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Mitarbeiter einer Abteilung“ Examen 66116 Frühjahr 2021 T2 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf) (Relationale Algebra, RelaX - relational algebra calculator) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.tex)) 
#### Tupelkalkül
- [„Xenokrates“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/30_Tupelkalkuel/Aufgabe_Xenokrates.pdf) (Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/30_Tupelkalkuel/Aufgabe_Xenokrates.tex)) 
- [„Browser-Online-Spiele“ Examen 46116 Frühjahr 2013 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Relationale Algebra, SQL, Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Harry Potter“ Examen 46116 Herbst 2019 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/09/Thema-2/Aufgabe-4.pdf) (Relationale Algebra, Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/09/Thema-2/Aufgabe-4.tex)) 
- [„Tupelkalkül bei Dozenten-Datenbank“ Examen 66116 Frühjahr 2018 T2 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) (Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Universitätsschema“ Examen 66116 Frühjahr 2020 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Relationale Algebra, Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 


### Relationale Anfragesprachen

#### SQL

Zu einige Aufgaben gibt es eine Übungsdatenbank. Der SQL-Code
zur Erzeugung der Datenbank ist in die TeX-Dateien eingebunden und
umrahmt durch die `minted`-Umgebung. Außerdem ist der Umgebung
ein Kommentar vorangestellt. Mit Hilfe dieses Kommentars kann
das NodeJS-Skript `lehramt-informatik.js` eine temporäre Datenbank
mit dem Namen `name` erzeugen.

```latex
% Datenbankname: name
\begin{minted}{sql}
CREATE TABLE
\end{minted}
```

Hier alle Aufgaben mit einer Übungsdatenbank:
- [„Bands“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bands.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bands.tex)) 
- [„Bundesliga“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bundesliga.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bundesliga.tex)) 
- [„Kaufhaus“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Kaufhaus.pdf) (SQL, SQL mit Übungsdatenbank, Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Kaufhaus.tex)) 
- [„Mitfahrgelegenheiten“ Examen 46116 Frühjahr 2014 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank, GROUP BY, HAVING) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Turmspringen“ Examen 46116 Herbst 2017 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, GROUP BY) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Kundenverwaltungssystem“ Examen 46116 Herbst 2018 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, CREATE TABLE, HAVING, EXCEPT, Top-N-Query, WITH, DELETE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Schuldatenbank“ Examen 46116 Herbst 2018 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank, CREATE TABLE, INSERT, ALTER TABLE, UPDATE, DELETE, VIEW, GROUP BY, DROP TABLE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Mitarbeiterverwaltung“ Examen 66113 Frühjahr 2003 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-1/Aufgabe-5.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-1/Aufgabe-5.tex)) 
- [„Gebrauchtwagen“ Examen 66116 Frühjahr 2012 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Musik-CDs“ Examen 66116 Frühjahr 2015 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (SQL, SQL mit Übungsdatenbank, GROUP BY, MAX, OR, INSERT, UPDATE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Vater und Mutter“ Examen 66116 Herbst 2015 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Polizei“ Examen 66116 Frühjahr 2016 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Entity-Relation-Modell, SQL mit Übungsdatenbank, Relationale Algebra, SQL, VIEW, WITH, UNION) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Personalverwaltung“ Examen 66116 Herbst 2016 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, VIEW, WITH, DELETE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Schulverwaltung“ Examen 66116 Herbst 2016 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (SQL mit Übungsdatenbank, SQL, CREATE TABLE, CONSTRAINT, ALTER TABLE, GROUP BY, HAVING) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Fluginformationssystem“ Examen 66116 Herbst 2017 T1 TA1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-6.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-6.tex)) 
- [„Triathlon“ Examen 66116 Herbst 2018 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, UPDATE, DESC, AVG, GROUP BY, HAVING, EXCEPT) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Medikamente“ Examen 66116 Frühjahr 2019 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-2.pdf) (SQL, SQL mit Übungsdatenbank, Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-2.tex)) 
- [„Game of Thrones“ Examen 66116 Herbst 2019 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank, Korrelierte Anfrage, DELETE, DROP COLUMN, ALTER TABLE, BETWEEN, CHECK, REFERENCES, NOT NULL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Formel-1-Rennen“ Examen 66116 Herbst 2019 T2 TA2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-7.pdf) (SQL, SQL mit Übungsdatenbank, EXCEPT, Top-N-Query, ALTER TABLE, TRIGGER) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-7.tex)) 
- [„Zehnkampf“ Examen 66116 Frühjahr 2020 T1 TA2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-7.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-7.tex)) 
- [„Universitätssschema“ Examen 66116 Frühjahr 2020 T1 TA2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-8.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-8.tex)) 
- [„Mode-Kollektionen“ Examen 66116 Frühjahr 2020 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Relationale Algebra und Optimierung“ Examen 66116 Herbst 2020 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Relationale Algebra, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Fußballweltmeisterschaft“ Examen 66116 Frühjahr 2021 T1 TA2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-6.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-6.tex)) 
- [„Mitarbeiter einer Abteilung“ Examen 66116 Frühjahr 2021 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 

Weitere Aufgaben zum Thema „SQL“:
- [„Bundesliga-Datenbank“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Bundesliga-Datenbank.pdf) (Relationale Algebra, SQL, Entity-Relation-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/30_Relationales-Modell/20_Relationale-Algebra/Aufgabe_Bundesliga-Datenbank.tex)) 
- [„Bands“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bands.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bands.tex)) 
- [„Bundesliga“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bundesliga.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Bundesliga.tex)) 
- [„Kaufhaus“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Kaufhaus.pdf) (SQL, SQL mit Übungsdatenbank, Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_Kaufhaus.tex)) 
- [„SQL abstrakt“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_SQL-abstract.pdf) (SQL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/40_Relationale-Anfragesprachen/10_SQL/Aufgabe_SQL-abstract.tex)) 
- [„Personalverwaltung“ Examen 46116 Frühjahr 2012 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (SQL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Browser-Online-Spiele“ Examen 46116 Frühjahr 2013 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Relationale Algebra, SQL, Tupelkalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Mitfahrgelegenheiten“ Examen 46116 Frühjahr 2014 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank, GROUP BY, HAVING) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Computer „Chiemsee““ Examen 46116 Frühjahr 2015 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Relationale Algebra, SQL, GROUP BY, HAVING) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Turmspringen“ Examen 46116 Herbst 2017 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, GROUP BY) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Kundenverwaltungssystem“ Examen 46116 Herbst 2018 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, CREATE TABLE, HAVING, EXCEPT, Top-N-Query, WITH, DELETE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Kundenverwaltungssystem“ Examen 46116 Herbst 2018 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (SQL, CREATE TABLE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Schuldatenbank“ Examen 46116 Herbst 2018 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank, CREATE TABLE, INSERT, ALTER TABLE, UPDATE, DELETE, VIEW, GROUP BY, DROP TABLE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Universitätsdatenbank“ Examen 66111 Frühjahr 1996 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Aufgabe-2.pdf) (Entity-Relation-Modell, Verfeinertes Relationenmodell, SQL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Aufgabe-2.tex)) 
- [„Gebrauchtwagen“ Examen 66111 Herbst 1996 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Aufgabe-4.pdf) (Dritte Normalform, Relationale Algebra, SQL, GROUP BY) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Aufgabe-4.tex)) 
- [„Mitarbeiterverwaltung“ Examen 66113 Frühjahr 2003 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-1/Aufgabe-5.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-1/Aufgabe-5.tex)) 
- [„Universitätsverwaltung“ Examen 66113 Frühjahr 2003 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-2/Aufgabe-3.pdf) (SQL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-2/Aufgabe-3.tex)) 
- [„Gebrauchtwagen“ Examen 66116 Frühjahr 2012 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Musik-CDs“ Examen 66116 Frühjahr 2015 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (SQL, SQL mit Übungsdatenbank, GROUP BY, MAX, OR, INSERT, UPDATE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Vater und Mutter“ Examen 66116 Herbst 2015 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Polizei“ Examen 66116 Frühjahr 2016 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Entity-Relation-Modell, SQL mit Übungsdatenbank, Relationale Algebra, SQL, VIEW, WITH, UNION) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Personalverwaltung“ Examen 66116 Herbst 2016 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, VIEW, WITH, DELETE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Schulverwaltung“ Examen 66116 Herbst 2016 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (SQL mit Übungsdatenbank, SQL, CREATE TABLE, CONSTRAINT, ALTER TABLE, GROUP BY, HAVING) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„SQL-Syntax-Überprüfung“ Examen 66116 Herbst 2017 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (SQL, CREATE TABLE, DELETE, INSERT, DROP TABLE) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
- [„Fluginformationssystem“ Examen 66116 Herbst 2017 T1 TA1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-6.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-6.tex)) 
- [„Triathlon“ Examen 66116 Herbst 2018 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, UPDATE, DESC, AVG, GROUP BY, HAVING, EXCEPT) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Medikamente“ Examen 66116 Frühjahr 2019 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-2.pdf) (SQL, SQL mit Übungsdatenbank, Relationale Algebra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-2.tex)) 
- [„Game of Thrones“ Examen 66116 Herbst 2019 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (SQL, SQL mit Übungsdatenbank, Korrelierte Anfrage, DELETE, DROP COLUMN, ALTER TABLE, BETWEEN, CHECK, REFERENCES, NOT NULL) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Vermischte Datenbank-Fragen“ Examen 66116 Herbst 2019 T2 TA2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-6.pdf) (Datenbank-Übersicht, Natural-Join, Equi-Join, Theta-Join, UNION, INTERSECT, EXCEPT) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-6.tex)) 
- [„Formel-1-Rennen“ Examen 66116 Herbst 2019 T2 TA2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-7.pdf) (SQL, SQL mit Übungsdatenbank, EXCEPT, Top-N-Query, ALTER TABLE, TRIGGER) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-7.tex)) 
- [„Zehnkampf“ Examen 66116 Frühjahr 2020 T1 TA2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-7.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-7.tex)) 
- [„Universitätssschema“ Examen 66116 Frühjahr 2020 T1 TA2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-8.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-8.tex)) 
- [„Mode-Kollektionen“ Examen 66116 Frühjahr 2020 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (SQL, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Relationale Algebra und Optimierung“ Examen 66116 Herbst 2020 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Relationale Algebra, SQL mit Übungsdatenbank) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Fußballweltmeisterschaft“ Examen 66116 Frühjahr 2021 T1 TA2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-6.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-6.tex)) 
- [„Mitarbeiter einer Abteilung“ Examen 66116 Frühjahr 2021 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (SQL, SQL mit Übungsdatenbank, Top-N-Query) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 


### Relationale Entwurfstheorie

#### Normalformen
- [„Schlüsselkandidat von R“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/10_Schluessel/Aufgabe_Schlüsselkandidat-von-R.pdf) (Schlüsselkandidat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/10_Schluessel/Aufgabe_Schlüsselkandidat-von-R.tex)) 
- [„Arbeitsvermittler“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Arbeitsvermittler.pdf) (Normalformen, Funktionale Abhängigkeiten, Schlüsselkandidat, Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Arbeitsvermittler.tex)) 
- [„Drei-Schemata“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Drei-Schemata.pdf) (Boyce-Codd-Normalform, Dritte Normalform, Zweite Normalform, Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Drei-Schemata.tex)) 
- [„Relation A-H“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Relation-A-H.pdf) (Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Relation-A-H.tex)) 
- [„Relation-MNVTPPN“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Relation-MNVTPPN.pdf) (Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Relation-MNVTPPN.tex)) 
- [„Supermarkt“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Supermarkt.pdf) (Zweite Normalform, Schlüsselkandidat, Update-Anomalie, Delete-Anomalie, Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/10_Synthesealgorithmus/Aufgabe_Supermarkt.tex)) 
- [„Abstraktes R“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Abstraktes-R.pdf) (Schlüsselkandidat, Zweite Normalform, Kanonische Überdeckung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Abstraktes-R.tex)) 
- [„Anomalien Abhängigkeiten“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Anomalien-Abhaengigkeiten.pdf) (Update-Anomalie, Delete-Anomalie, Insert-Anomalie, Funktionale Abhängigkeiten, Attributhüllen-Algorithmus, Attributhülle, Superschlüssel) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Anomalien-Abhaengigkeiten.tex)) 
- [„Kanonische Überdeckung (Kemper)“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Kanonische-Ueberdeckung-Kemper.pdf) (Kanonische Überdeckung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Kanonische-Ueberdeckung-Kemper.tex)) 
- [„Mietwagenfirma“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Mietwagenfirma.pdf) (Zweite Normalform, Delete-Anomalie, Update-Anomalie, Insert-Anomalie, Dritte Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Mietwagenfirma.tex)) 
- [„Minimale Überdeckung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Minimale-Ueberdeckung.pdf) (Kanonische Überdeckung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/50_Relationale-Entwurfstheorie/30_Normalformen/Aufgabe_Minimale-Ueberdeckung.tex)) 
- [„Theoriefragen Datenbank“ Examen 46116 Herbst 2015 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Datenunabhängigkeit, Superschlüssel, Referentielle Integrität) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Studentenbibliothek“ Examen 66111 Frühjahr 1994 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1994/03/Aufgabe-7.pdf) (Synthese-Algorithmus, Dritte Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1994/03/Aufgabe-7.tex)) 
- [„Gebrauchtwagen“ Examen 66111 Herbst 1996 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Aufgabe-4.pdf) (Dritte Normalform, Relationale Algebra, SQL, GROUP BY) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Aufgabe-4.tex)) 
- [Examen 66113 Herbst 2002 T2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2002/09/Thema-2/Aufgabe-2.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2002/09/Thema-2/Aufgabe-2.tex)) 
- [„Nachteile vollständige Normalisierung“ Examen 66113 Herbst 2003 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/09/Thema-2/Aufgabe-1.pdf) (Normalformen, Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/09/Thema-2/Aufgabe-1.tex)) 
- [„Wareneingänge“ Examen 66116 Frühjahr 2012 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Relation A-F“ Examen 66116 Frühjahr 2015 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Relation A-H“ Examen 66116 Herbst 2015 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Entwurfstheorie“ Examen 66116 Frühjahr 2017 T2 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-1/Aufgabe-5.pdf) (Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-1/Aufgabe-5.tex)) 
- [„Synthese-Algorithmus bei Relationenschema A-F“ Examen 66116 Frühjahr 2018 T2 TA1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-6.pdf) (Synthese-Algorithmus, Dritte Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-6.tex)) 
- [Examen 66116 Frühjahr 2019 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-3.pdf) (Relationale Entwurfstheorie, Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-3.tex)) 
- [„Normalisierung“ Examen 66116 Frühjahr 2019 T2 TA1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-6.pdf) (Normalformen, Schlüsselkandidat, Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-6.tex)) 
- [„Sekretäre“ Examen 66116 Frühjahr 2020 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Funktionale Abhängigkeiten) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Relation A-F“ Examen 66116 Frühjahr 2020 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Synthese-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Schlüssel“ Examen 66116 Frühjahr 2020 T1 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-5.pdf) (Schlüssel) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-5.tex)) 
- [Examen 66116 Frühjahr 2020 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„(Entwurfstheorie)“ Examen 66116 Herbst 2020 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Normalisierung“ Examen 66116 Frühjahr 2021 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Relation Prüfung“ Examen 66116 Frühjahr 2021 T2 TA2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-6.pdf) (Normalformen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-6.tex)) 


### Transaktionsverwaltung
- [„ACID“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/60_Transaktionsverwaltung/Aufgabe_ACID.pdf) (Transaktionen, ACID) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/60_Transaktionsverwaltung/Aufgabe_ACID.tex)) 
- [„PKW“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/60_Transaktionsverwaltung/Aufgabe_PKW.pdf) (Transaktionen, Deadlock) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/60_Transaktionsverwaltung/Aufgabe_PKW.tex)) 
- [„Tabelle TAB“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/60_Transaktionsverwaltung/Aufgabe_Tabelle-TAB.pdf) (Transaktionsverwaltung, Lost-Update, Dirty-Read) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/10_DB/60_Transaktionsverwaltung/Aufgabe_Tabelle-TAB.tex)) 
- [„Transaktionen“ Examen 46116 Frühjahr 2016 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (Transaktionen, ACID, Serialisierbarkeitsgraph, Zwei-Phasen-Sperrprotokoll) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
- [Examen 66116 Frühjahr 2020 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (Transaktionen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 
- [Examen 66116 Frühjahr 2021 T1 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-5.pdf) (Transaktionen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-5.tex)) 



## Objektorientierte Modellierung und Programmierung (OOMUP)

### Vererbung
- [„Bankkonten“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Bankkonten.pdf) (Vererbung, Generalisierung, Spezialisierung, Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Bankkonten.tex)) 
- [„Kleintierpraxis“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Kleintierpraxis.pdf) (Vererbung, Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Kleintierpraxis.tex)) 
- [„Banksystem“ Examen 66112 Herbst 2002 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/09/Thema-1/Aufgabe-4.pdf) (Vererbung, Abstrakte Klasse, Implementierung in Java, Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/09/Thema-1/Aufgabe-4.tex)) 
- [„Flugbuchung“ Examen 66112 Herbst 2006 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.pdf) (Vererbung, Klassendiagramm, Objektdiagramm, Sequenzdiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.tex)) 
- [„Kunden und Angestellte einer Firma“ Examen 66116 Frühjahr 2015 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Vererbung, Implementierung in Java, Interface, Abstrakte Klasse) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„UML-Diagramme entspreched Java-Code zeichnen“ Examen 66116 Frühjahr 2018 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Vererbung, Interface, Abstrakte Klasse, Klassendiagramm, Objektdiagramm, Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 



## Algorithmen und Datenstrukturen (AUD)


### Rekursion
- [„Feld-Invertierer“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Feld-Invertierer.pdf) (Rekursion, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Feld-Invertierer.tex)) 
- [„Fibonacci Fakultät“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Fibonacci-Fakultaet.pdf) (Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Fibonacci-Fakultaet.tex)) 
- [„Potenz“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Potenz.pdf) (Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Potenz.tex)) 
- [„Rater“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Rater.pdf) (Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/10_Rekursion/Aufgabe_Rater.tex)) 
- [„iterativ-rekursiv“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/20_Selectionsort/Aufgabe_iterativ-rekursiv.pdf) (Selectionsort, Iterative Realisation, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/20_Selectionsort/Aufgabe_iterativ-rekursiv.tex)) 
- [„Methode „fill()““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Methode-fill.pdf) (Backtracking, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Methode-fill.tex)) 
- [„Playlist“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Playlist.pdf) (Einfach-verkettete Liste, Implementierung in Java, Doppelt-verkettete Liste, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Playlist.tex)) 
- [„Binomialkoeffizient“ Examen 46115 Frühjahr 2014 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-2/Aufgabe-4.pdf) (Rekursion, Implementierung in Java, Iterative Realisation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-2/Aufgabe-4.tex)) 
- [„Klasse „LeftFactorial“ und Methode „lfBig()““ Examen 66115 Frühjahr 2014 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-1.pdf) (Rekursion, Vollständige Induktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-1.tex)) 
- [„Dateisystem: Implementierung durch Kompositum“ Examen 66116 Herbst 2019 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Entwurfsmuster, Kompositum (Composite), Klassendiagramm, Implementierung in Java, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 


### Suche
- [„Methode „sucheBinaer()““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/30_Suchalgorithmen/Aufgabe_Methode-sucheBinaer.pdf) (Binäre Suche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/30_Suchalgorithmen/Aufgabe_Methode-sucheBinaer.tex)) 
- [„Bruchsicherheit von Smartphones“ Examen 46115 Frühjahr 2016 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-3.pdf) (Algorithmische Komplexität (O-Notation), Lineare Suche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-3.tex)) 
- [„Schnelle Suche von Schlüsseln: odd-ascending-even-descending-Folge“ Examen 66115 Herbst 2020 T2 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf) (Binäre Suche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-5.tex)) 
- [„Minimum und Maximum“ Examen 66115 Frühjahr 2021 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Lineare Suche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Code-Inspection bei Binärer Suche“ Examen 66116 Herbst 2017 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Binäre Suche, Design by Contract, Kontrollflussgraph, Vollständige Anweisungsüberdeckung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 


### Sortieralgorithmen

#### Bubblesort
- [„Händisches Sortieren“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisches-Sortieren.pdf) (Bubblesort, Mergesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisches-Sortieren.tex)) 
- [„Sortier-Vorlage“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Sortier-Vorlage.pdf) (Selectionsort, Bubblesort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Sortier-Vorlage.tex)) 
- [„Bubble- und Quicksort bei 25,1,12,27,30,9,33,34,18,16“ Examen 46115 Frühjahr 2016 T1 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-8.pdf) (Sortieralgorithmen, Bubblesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-8.tex)) 
- [„Testen bei Bubblesort“ Examen 46116 Herbst 2017 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (Bubblesort, Black-Box-Testing, Anforderungsüberdeckung, Äquivalenzklassenzerlegung, Grenzwertanalyse, Kontrollflussgraph, C2a Vollständige Pfadüberdeckung (Full Path Coverage)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Sortieren von 15,4,10,7,1,8,10 mit Bubble- und Selectionsort“ Examen 66115 Herbst 2018 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-8.pdf) (Sortieralgorithmen, Bubblesort, Selectionsort, Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-8.tex)) 
- [„Sort-Methode und datenflussorientierte Überdeckungskritierien“ Examen 66116 Herbst 2016 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Datenflussorientiertes Testen, Bubblesort, Datenfluss-annotierter Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, C1-Test Zweigüberdeckung (Branch Coverage), all uses) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
#### Selectionsort
- [„iterativ-rekursiv“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/20_Selectionsort/Aufgabe_iterativ-rekursiv.pdf) (Selectionsort, Iterative Realisation, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/20_Selectionsort/Aufgabe_iterativ-rekursiv.tex)) 
- [„Sortier-Vorlage“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Sortier-Vorlage.pdf) (Selectionsort, Bubblesort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Sortier-Vorlage.tex)) 
- [„(Sortierverfahren)“ Examen 46115 Herbst 2019 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-1/Aufgabe-4.pdf) (Selectionsort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-1/Aufgabe-4.tex)) 
- [„Selectionsort“ Examen 66115 Herbst 2014 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-6.pdf) (Selectionsort, Implementierung in Java, Algorithmische Komplexität (O-Notation), Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-6.tex)) 
- [„Sortieren von 15,4,10,7,1,8,10 mit Bubble- und Selectionsort“ Examen 66115 Herbst 2018 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-8.pdf) (Sortieralgorithmen, Bubblesort, Selectionsort, Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-8.tex)) 
#### Insertionsort
- [Examen 46115 Herbst 2017 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-7.pdf) (Insertionsort, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-7.tex)) 
- [„Sortieren“ Examen 66115 Frühjahr 2021 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Sortieralgorithmen, Insertionsort, Quicksort, Mergesort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
#### Quicksort
- [„Händisch Quick- und Mergesort“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisch-Quick-Mergesort.pdf) (Mergesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisch-Quick-Mergesort.tex)) 
- [„Händisches Sortieren“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisches-Sortieren.pdf) (Bubblesort, Mergesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisches-Sortieren.tex)) 
- [„Bubble- und Quicksort bei 25,1,12,27,30,9,33,34,18,16“ Examen 46115 Frühjahr 2016 T1 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-8.pdf) (Sortieralgorithmen, Bubblesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-8.tex)) 
- [„1 45 8 53 9 2 17 10“ Examen 66115 Frühjahr 2016 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-6.pdf) (Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-6.tex)) 
- [„Sortieren mit Quicksort“ Examen 66115 Herbst 2016 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-2/Aufgabe-7.pdf) (Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-2/Aufgabe-7.tex)) 
- [„Top-Level-Domains (TLD)“ Examen 66115 Frühjahr 2017 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-2.pdf) (Sortieralgorithmen, Bucketsort, Radixsort, Mergesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-2.tex)) 
- [„Quicksort“ Examen 66115 Frühjahr 2018 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-7.pdf) (Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-7.tex)) 
- [„Notation des Informatik-Duden“ Examen 66115 Herbst 2019 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-5.pdf) (Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-5.tex)) 
- [„Sortieren“ Examen 66115 Frühjahr 2021 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Sortieralgorithmen, Insertionsort, Quicksort, Mergesort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
#### Mergesort
- [„Implementierung der merge-Methode“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/50_Mergesort/Aufgabe_Implementierung-merge-Methode.pdf) (Mergesort, Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/50_Mergesort/Aufgabe_Implementierung-merge-Methode.tex)) 
- [„Händisch Quick- und Mergesort“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisch-Quick-Mergesort.pdf) (Mergesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisch-Quick-Mergesort.tex)) 
- [„Händisches Sortieren“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisches-Sortieren.pdf) (Bubblesort, Mergesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/Aufgabe_Haendisches-Sortieren.tex)) 
- [„Schreibtischlauf Haldensortierung“ Examen 46115 Frühjahr 2013 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-6.pdf) (Mergesort, Heapsort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-6.tex)) 
- [Examen 46115 Frühjahr 2018 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/Thema-1/Aufgabe-6.pdf) (Mergesort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/Thema-1/Aufgabe-6.tex)) 
- [„Top-Level-Domains (TLD)“ Examen 66115 Frühjahr 2017 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-2.pdf) (Sortieralgorithmen, Bucketsort, Radixsort, Mergesort, Quicksort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-2.tex)) 
- [„Sortieren“ Examen 66115 Frühjahr 2021 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Sortieralgorithmen, Insertionsort, Quicksort, Mergesort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
#### Heapsort
- [„Schreibtischlauf Haldensortierung“ Examen 46115 Frühjahr 2013 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-6.pdf) (Mergesort, Heapsort) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-6.tex)) 


### Algorithmische Komplexität (O-Notation)
- [„Implementierung der merge-Methode“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/50_Mergesort/Aufgabe_Implementierung-merge-Methode.pdf) (Mergesort, Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/50_Mergesort/Aufgabe_Implementierung-merge-Methode.tex)) 
- [„Algorithmen-Vergleich“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_Algorithmen-Vergleich.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_Algorithmen-Vergleich.tex)) 
- [„Klasse-QueueElement“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_Klasse-QueueElement.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_Klasse-QueueElement.tex)) 
- [„Methode „magicStaff()““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_Methode-magicStaff.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_Methode-magicStaff.tex)) 
- [„mehrere-Funktionen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_mehrere-Funktionen.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/50_Algorithmische-Komplexitaet/Aufgabe_mehrere-Funktionen.tex)) 
- [„Bruchsicherheit von Smartphones“ Examen 46115 Frühjahr 2016 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-3.pdf) (Algorithmische Komplexität (O-Notation), Lineare Suche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-3.tex)) 
- [„Methoden „matrixSumme()“ und „find()““ Examen 46115 Herbst 2016 T2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-2/Aufgabe-2.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-2/Aufgabe-2.tex)) 
- [„Nächstes rot-blaues Paar auf der x-Achse“ Examen 46115 Frühjahr 2020 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-2/Aufgabe-6.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-2/Aufgabe-6.tex)) 
- [„4 Rekursionsgleichungen“ Examen 66115 Frühjahr 2011 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/03/Thema-1/Aufgabe-1.pdf) (Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/03/Thema-1/Aufgabe-1.tex)) 
- [„limes“ Examen 66115 Herbst 2012 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-6.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-6.tex)) 
- [„Klasse „Stapel“ mit Methode „merge()““ Examen 66115 Herbst 2014 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-5.pdf) (Stapel (Stack), Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-5.tex)) 
- [„Selectionsort“ Examen 66115 Herbst 2014 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-6.pdf) (Selectionsort, Implementierung in Java, Algorithmische Komplexität (O-Notation), Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-6.tex)) 
- [„Sortieren mit Stapel“ Examen 66115 Frühjahr 2015 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-5.pdf) (Stapel (Stack), Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-5.tex)) 
- [„Methode „m()““ Examen 66115 Frühjahr 2018 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-6.pdf) (Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-6.tex)) 
- [„Sortieren von 15,4,10,7,1,8,10 mit Bubble- und Selectionsort“ Examen 66115 Herbst 2018 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-8.pdf) (Sortieralgorithmen, Bubblesort, Selectionsort, Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-8.tex)) 
- [„Sortieren von O-Klassen“ Examen 66115 Herbst 2019 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-6.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-6.tex)) 
- [„Mastertheorem“ Examen 66115 Herbst 2019 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-6.pdf) (Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-6.tex)) 
- [„Nächstes rot-blaues Paar auf der x-Achse“ Examen 66115 Frühjahr 2020 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-8.pdf) (Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-8.tex)) 
- [„O-Notation“ Examen 66115 Herbst 2020 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Algorithmische Komplexität (O-Notation), Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 

#### Master-Theorem
- [„Implementierung der merge-Methode“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/50_Mergesort/Aufgabe_Implementierung-merge-Methode.pdf) (Mergesort, Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/40_Sortieralgorithmen/50_Mergesort/Aufgabe_Implementierung-merge-Methode.tex)) 
- [„4 Rekursionsgleichungen“ Examen 66115 Frühjahr 2011 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/03/Thema-1/Aufgabe-1.pdf) (Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/03/Thema-1/Aufgabe-1.tex)) 
- [„Methode „m()““ Examen 66115 Frühjahr 2018 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-6.pdf) (Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-6.tex)) 
- [„Mastertheorem“ Examen 66115 Herbst 2019 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-6.pdf) (Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-6.tex)) 
- [„O-Notation“ Examen 66115 Herbst 2020 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Algorithmische Komplexität (O-Notation), Master-Theorem) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 


### Algorithmenmuster
- [„Münzwechsler“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/20_Greedy-Algorithmen/Aufgabe_Muenzwechsler.pdf) (Greedy-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/20_Greedy-Algorithmen/Aufgabe_Muenzwechsler.tex)) 
- [„Wechselgeld“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/20_Greedy-Algorithmen/Aufgabe_Wechselgeld.pdf) (Greedy-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/20_Greedy-Algorithmen/Aufgabe_Wechselgeld.tex)) 
- [„Hanoi“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/30_Divide-and-Conquer/Aufgabe_Hanoi.pdf) (Teile-und-Herrsche (Divide-and-Conquer)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/30_Divide-and-Conquer/Aufgabe_Hanoi.tex)) 
- [„Wegberechnung im Gitter“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/40_Dynamisches-Programmieren/Aufgabe_Wegberechnung.pdf) (Dynamische Programmierung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/40_Dynamisches-Programmieren/Aufgabe_Wegberechnung.tex)) 
- [„Damenproblem“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Damenproblem.pdf) (Backtracking) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Damenproblem.tex)) 
- [„Methode „fill()““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Methode-fill.pdf) (Backtracking, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Methode-fill.tex)) 
- [„Nikolaus“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Nikolaus.pdf) (Backtracking) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/60_Algorithmenmuster/50_Backtracking/Aufgabe_Nikolaus.tex)) 
- [Examen 46114 Herbst 2008 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/Thema-2/Aufgabe-3.pdf) (Teile-und-Herrsche (Divide-and-Conquer)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/Thema-2/Aufgabe-3.tex)) 
- [„Methode „a()““ Examen 46115 Herbst 2016 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-2/Aufgabe-4.pdf) (Dynamische Programmierung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-2/Aufgabe-4.tex)) 
- [„Primzahl“ Examen 46115 Herbst 2017 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-3.pdf) (Dynamische Programmierung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-3.tex)) 
- [„Springerproblem beim Schach“ Examen 46115 Herbst 2018 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/09/Thema-2/Aufgabe-5.pdf) (Backtracking) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/09/Thema-2/Aufgabe-5.tex)) 
- [„Cent-Münzen“ Examen 66115 Frühjahr 2007 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/Thema-2/Aufgabe-1.pdf) (Greedy-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/Thema-2/Aufgabe-1.tex)) 
- [„Wäscheleinenaufgabe“ Examen 66115 Herbst 2009 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2009/09/Thema-2/Aufgabe-6.pdf) (Greedy-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2009/09/Thema-2/Aufgabe-6.tex)) 
- [„maximale Teilsumme“ Examen 66115 Herbst 2012 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-4.pdf) (Teile-und-Herrsche (Divide-and-Conquer)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-4.tex)) 
- [Examen 66115 Herbst 2016 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-1/Aufgabe-4.pdf) (Teile-und-Herrsche (Divide-and-Conquer)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-1/Aufgabe-4.tex)) 
- [„Fibonacci“ Examen 66115 Frühjahr 2017 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-3.pdf) (Dynamische Programmierung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-3.tex)) 
- [„Greedy-Färben von Intervallen“ Examen 66115 Herbst 2017 T1 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-1/Aufgabe-8.pdf) (Greedy-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-1/Aufgabe-8.tex)) 
- [„Rucksackproblem“ Examen 66115 Herbst 2018 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-6.pdf) (Backtracking) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-6.tex)) 
- [„Muffinsorten“ Examen 66115 Frühjahr 2019 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/Thema-1/Aufgabe-6.pdf) (Greedy-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/Thema-1/Aufgabe-6.tex)) 
- [„Gutschein“ Examen 66115 Herbst 2020 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (Dynamische Programmierung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 


### Listen

#### Einfach-verkettete Liste
- [„Maut“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Maut.pdf) (Einfach-verkettete Liste, Klassendiagramm, Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Maut.tex)) 
- [„Playlist“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Playlist.pdf) (Einfach-verkettete Liste, Implementierung in Java, Doppelt-verkettete Liste, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Playlist.tex)) 
- [„Wörterbuch“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Woerterbuch.pdf) (Einfach-verkettete Liste, Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Woerterbuch.tex)) 
- [„Firmenstruktur“ Examen 46116 Frühjahr 2011 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2011/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Einfach-verkettete Liste, Objektdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2011/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Getränkelieferservice“ Examen 66116 Herbst 2012 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Objektorientierung, Implementierung in Java, Einfach-verkettete Liste) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„MyList Kompositium“ Examen 66116 Frühjahr 2021 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (Einfach-verkettete Liste) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
### Doppelt-verkettete Liste
- [„Playlist“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Playlist.pdf) (Einfach-verkettete Liste, Implementierung in Java, Doppelt-verkettete Liste, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Playlist.tex)) 
- [„Klasse „DoublyLinkedList““ Examen 66112 Frühjahr 2005 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-1/Aufgabe-1.pdf) (Doppelt-verkettete Liste, Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-1/Aufgabe-1.tex)) 
- [„DoubleLinkedList“ Examen 66115 Frühjahr 2021 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Doppelt-verkettete Liste) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
### Stapel (Stack)
- [„Tellerstapel-Biberschlagen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/20_Warteschlange/Aufgabe_Tellerstapel-Biberschlagen.pdf) (Warteschlange (Queue), Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/20_Warteschlange/Aufgabe_Tellerstapel-Biberschlagen.tex)) 
- [„Hanoi“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/30_Stapel/Aufgabe_Hanoi.pdf) (Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/30_Stapel/Aufgabe_Hanoi.tex)) 
- [„Informatik-Biber“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/30_Stapel/Aufgabe_Informatik-Biber.pdf) (Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/30_Stapel/Aufgabe_Informatik-Biber.tex)) 
- [„Sackbahnhof“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/30_Stapel/Aufgabe_Sackbahnhof.pdf) (Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/30_Stapel/Aufgabe_Sackbahnhof.tex)) 
- [„dfs-number“ Examen 46115 Herbst 2014 T1 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/09/Thema-1/Aufgabe-8.pdf) (Tiefensuche, Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/09/Thema-1/Aufgabe-8.tex)) 
- [„Mystery-Stacks“ Examen 46115 Herbst 2019 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-1/Aufgabe-6.pdf) (Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-1/Aufgabe-6.tex)) 
- [„Klasse „Stapel“ mit Methode „merge()““ Examen 66115 Herbst 2014 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-5.pdf) (Stapel (Stack), Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-5.tex)) 
- [„Sortieren mit Stapel“ Examen 66115 Frühjahr 2015 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-5.pdf) (Stapel (Stack), Algorithmische Komplexität (O-Notation)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-5.tex)) 
### Warteschlange (Queue)
- [„Flughafen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/20_Warteschlange/Aufgabe_Flughafen.pdf) (Warteschlange (Queue)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/20_Warteschlange/Aufgabe_Flughafen.tex)) 
- [„Tellerstapel-Biberschlagen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/20_Warteschlange/Aufgabe_Tellerstapel-Biberschlagen.pdf) (Warteschlange (Queue), Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/20_Warteschlange/Aufgabe_Tellerstapel-Biberschlagen.tex)) 
- [„Reiseunternehmen“ Examen 46116 Frühjahr 2010 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2010/03/Thema-1/Aufgabe-1.pdf) (Warteschlange (Queue), Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2010/03/Thema-1/Aufgabe-1.tex)) 
- [„Klassen „QueueElement“ und „Queue““ Examen 66115 Frühjahr 2007 T1 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/Thema-1/Aufgabe-7.pdf) (Warteschlange (Queue), Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/Thema-1/Aufgabe-7.tex)) 


### Bäume

#### Binärbaum
- [„Klassendiagramm und Implementierung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/20_Binaerer-Suchbaum/Aufgabe_Klassendiagramm-Implementierung.pdf) (Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/20_Binaerer-Suchbaum/Aufgabe_Klassendiagramm-Implementierung.tex)) 
- [„Binäre Suchbäume, AVL-Bäume, Implementierung“ Examen 46115 Frühjahr 2010 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/Thema-1/Aufgabe-5.pdf) (Binärbaum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/Thema-1/Aufgabe-5.tex)) 
- [„Heap und binärer Suchbaum und AVL Baum“ Examen 46115 Frühjahr 2014 T1 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-7.pdf) (Halde (Heap), Binärbaum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-7.tex)) 
- [„Binärer Suchbaum 17, 7, 21, 3, 10, 13, 1, 5“ Examen 46115 Frühjahr 2014 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-2/Aufgabe-3.pdf) (Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-2/Aufgabe-3.tex)) 
- [„Klasse „BinBaum““ Examen 66112 Herbst 2003 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/Thema-2/Aufgabe-8.pdf) (Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/Thema-2/Aufgabe-8.tex)) 
- [„Heap und binärer Suchbaum“ Examen 66115 Herbst 2013 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-7.pdf) (Binärbaum, Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-7.tex)) 
- [„Binärbaum, Halde, AVL“ Examen 66115 Herbst 2017 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-8.pdf) (AVL-Baum, Halde (Heap), Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-8.tex)) 
- [„Niedrigster gemeinsame Vorfahre“ Examen 66115 Frühjahr 2020 T2 A10](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-10.pdf) (Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-10.tex)) 
- [„Bäume“ Examen 66115 Herbst 2020 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Binärbaum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Binärbäume“ Examen 66115 Frühjahr 2021 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
#### AVL-Baum
- [„AVL-Baum-1-11“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/30_AVL-Baum/Aufgabe_AVL-Baum-1-11.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/30_AVL-Baum/Aufgabe_AVL-Baum-1-11.tex)) 
- [„AVL-Baum-2-8-10-1-4-5-11“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/30_AVL-Baum/Aufgabe_AVL-Baum-2-8-10-1-4-5-11.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/30_AVL-Baum/Aufgabe_AVL-Baum-2-8-10-1-4-5-11.tex)) 
- [„Binäre Suchbäume, AVL-Bäume, Implementierung“ Examen 46115 Frühjahr 2010 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/Thema-1/Aufgabe-5.pdf) (Binärbaum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/Thema-1/Aufgabe-5.tex)) 
- [„2-3-4-Baum“ Examen 46115 Frühjahr 2011 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2011/03/Thema-1/Aufgabe-3.pdf) (B-Baum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2011/03/Thema-1/Aufgabe-3.tex)) 
- [„Heap und binärer Suchbaum und AVL Baum“ Examen 46115 Frühjahr 2014 T1 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-7.pdf) (Halde (Heap), Binärbaum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-7.tex)) 
- [„AVL-Baum mit 6, 13, 4, 8, 11, 9, 10“ Examen 66115 Herbst 2006 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2006/09/Thema-1/Aufgabe-4.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2006/09/Thema-1/Aufgabe-4.tex)) 
- [„AVL 15,9,25,4,10,23,33,2,27; Einfüge 1,28; Löschen 15“ Examen 66115 Herbst 2012 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-8.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-8.tex)) 
- [„AVL-Baum 12 5 20 2 9 16 25 3 21“ Examen 66115 Herbst 2013 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-8.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-8.tex)) 
- [Examen 66115 Frühjahr 2014 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-3.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-3.tex)) 
- [„Vergleich Suchbäume“ Examen 66115 Frühjahr 2016 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-7.pdf) (Bäume, Rot-Schwarz-Baum, AVL-Baum, Halde (Heap), B-Baum, R-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-7.tex)) 
- [„Binärbaum, Halde, AVL“ Examen 66115 Herbst 2017 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-8.pdf) (AVL-Baum, Halde (Heap), Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-8.tex)) 
- [„Einfügen und Löschen“ Examen 66115 Frühjahr 2018 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-8.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-8.tex)) 
- [„AVL-Baum“ Examen 66115 Herbst 2018 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-1/Aufgabe-5.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-1/Aufgabe-5.tex)) 
- [„Gegener Baum erweitern und Knoten entfernen“ Examen 66115 Herbst 2019 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-7.pdf) (AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-7.tex)) 
- [„Bäume“ Examen 66115 Herbst 2020 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Binärbaum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
#### Halde (Heap)
- [„Graph M A P R N“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Graph-M-A-P-R-N.pdf) (Algorithmus von Dijkstra, Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Graph-M-A-P-R-N.tex)) 
- [Examen 46115 Frühjahr 2012 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2012/03/Thema-1/Aufgabe-6.pdf) (Algorithmus von Dijkstra, Adjazenzliste, Adjazenzmatrix, Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2012/03/Thema-1/Aufgabe-6.tex)) 
- [„Heap und binärer Suchbaum und AVL Baum“ Examen 46115 Frühjahr 2014 T1 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-7.pdf) (Halde (Heap), Binärbaum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-7.tex)) 
- [„Halden - Heaps“ Examen 46115 Herbst 2017 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-6.pdf) (Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-6.tex)) 
- [„Heapify“ Examen 46115 Herbst 2019 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-7.pdf) (Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-7.tex)) 
- [„Heaps“ Examen 46115 Frühjahr 2020 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-2/Aufgabe-7.pdf) (Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-2/Aufgabe-7.tex)) 
- [„3,5,1,2,4 in leerer Suchbaum und Heap“ Examen 66115 Herbst 2012 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-7.pdf) (Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-7.tex)) 
- [„Heap und binärer Suchbaum“ Examen 66115 Herbst 2013 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-7.pdf) (Binärbaum, Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-7.tex)) 
- [„Selectionsort“ Examen 66115 Herbst 2014 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-6.pdf) (Selectionsort, Implementierung in Java, Algorithmische Komplexität (O-Notation), Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-6.tex)) 
- [„Vergleich Suchbäume“ Examen 66115 Frühjahr 2016 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-7.pdf) (Bäume, Rot-Schwarz-Baum, AVL-Baum, Halde (Heap), B-Baum, R-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-7.tex)) 
- [„Binärbaum, Halde, AVL“ Examen 66115 Herbst 2017 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-8.pdf) (AVL-Baum, Halde (Heap), Binärbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-8.tex)) 
- [„DeleteMin“ Examen 66115 Herbst 2020 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
#### B-Baum
- [„Einfügen und Löschen in B-Bäumen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/50_B-Baum/Aufgabe_Uni-Hamburg.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/50_B-Baum/Aufgabe_Uni-Hamburg.tex)) 
- [„Löschen in B-Bäumen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/50_B-Baum/Aufgabe_YouTube_Loeschen.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/50_B-Baum/Aufgabe_YouTube_Loeschen.tex)) 
- [„2-3-4-Baum“ Examen 46115 Frühjahr 2011 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2011/03/Thema-1/Aufgabe-3.pdf) (B-Baum, AVL-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2011/03/Thema-1/Aufgabe-3.tex)) 
- [„B-Baum m=2“ Examen 66112 Herbst 2005 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/09/Thema-2/Aufgabe-6.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/09/Thema-2/Aufgabe-6.tex)) 
- [„Tupel-Identifikator und BBaum (k=2)“ Examen 66114 Herbst 2016 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/09/Thema-2/Aufgabe-5.pdf) (Physische Datenorganisation, Tupel-Identifikator, B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/09/Thema-2/Aufgabe-5.tex)) 
- [„Vergleich Suchbäume“ Examen 66115 Frühjahr 2016 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-7.pdf) (Bäume, Rot-Schwarz-Baum, AVL-Baum, Halde (Heap), B-Baum, R-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-7.tex)) 
- [Examen 66116 Frühjahr 2013 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/03/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Indexstrukturen“ Examen 66116 Frühjahr 2015 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„B-Baum der Ordnung 3“ Examen 66116 Herbst 2015 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [Examen 66116 Herbst 2016 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (B-Baum, Tupel-Identifikator) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
- [„Aufbau eines B-Baums“ Examen 66116 Frühjahr 2017 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Physische Datenstrukturen)“ Examen 66116 Frühjahr 2020 T1 TA2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-6.pdf) (B-Baum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-6.tex)) 
#### Streutabellen (Hashing)
- [„Modulo 11 und 17“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/60_Hashing/Aufgabe_Modulo-11-17.pdf) (Streutabellen (Hashing), Hashfunktion, Separate Verkettung, Lineares Sondieren, Quadratisches Sondieren) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/80_Baeume/60_Hashing/Aufgabe_Modulo-11-17.tex)) 
- [„Hashing mit Modulo 11“ Examen 46115 Frühjahr 2013 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-4.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-4.tex)) 
- [„Hashing mit Modulo 8“ Examen 46115 Herbst 2015 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/09/Thema-2/Aufgabe-1.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/09/Thema-2/Aufgabe-1.tex)) 
- [„Hashing mit Modulo 7“ Examen 66112 Frühjahr 2005 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-2/Aufgabe-8.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-2/Aufgabe-8.tex)) 
- [„Hashing mit Modulo 10“ Examen 66115 Herbst 2010 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/Thema-2/Aufgabe-3.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/Thema-2/Aufgabe-3.tex)) 
- [„IP und ULR mit Hashes“ Examen 66115 Frühjahr 2013 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-1/Aufgabe-6.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-1/Aufgabe-6.tex)) 
- [„Hashing mit verketteten Listen und offener Adressierung“ Examen 66115 Frühjahr 2016 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-4.pdf) (Streutabellen (Hashing), Separate Verkettung, Offene Adressierung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-4.tex)) 
- [„Hashing mit mod 11 und 13“ Examen 66115 Herbst 2019 T2 A9](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-9.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-9.tex)) 
- [„Streuspeicherung“ Examen 66115 Herbst 2020 T1 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-5.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-5.tex)) 
- [„Vornamen“ Examen 66115 Herbst 2020 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Hashing“ Examen 66115 Frühjahr 2021 T2 TA2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf) (Streutabellen (Hashing)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.tex)) 


### Graphen

#### Algorithmus von Dijkstra
- [„Graph A-I“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Graph-A-I.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Graph-A-I.tex)) 
- [„Graph M A P R N“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Graph-M-A-P-R-N.pdf) (Algorithmus von Dijkstra, Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Graph-M-A-P-R-N.tex)) 
- [„Städte A-F“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Staedte-A-F.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/10_Dijkstra/Aufgabe_Staedte-A-F.tex)) 
- [„Dijkstra“ Examen 46114 Herbst 2008 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/Thema-1/Aufgabe-2.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/Thema-1/Aufgabe-2.tex)) 
- [Examen 46115 Frühjahr 2012 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2012/03/Thema-1/Aufgabe-6.pdf) (Algorithmus von Dijkstra, Adjazenzliste, Adjazenzmatrix, Halde (Heap)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2012/03/Thema-1/Aufgabe-6.tex)) 
- [Examen 46115 Frühjahr 2013 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-5.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-5.tex)) 
- [„Städte“ Examen 66112 Frühjahr 2004 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/03/Thema-1/Aufgabe-5.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/03/Thema-1/Aufgabe-5.tex)) 
- [Examen 66115 Herbst 2013 T2 A9](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-9.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-9.tex)) 
- [Examen 66115 Frühjahr 2015 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-7.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-7.tex)) 
- [„Karlsruhe nach Kassel“ Examen 66115 Frühjahr 2016 T2 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-6.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-6.tex)) 
- [„Bayerischee Autobahnen“ Examen 66115 Frühjahr 2017 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-1.pdf) (Algorithmus von Dijkstra, Algorithmus von Kruskal) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-1.tex)) 
- [„Negative Kantengewichte“ Examen 66115 Frühjahr 2018 T2 A9](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-9.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-9.tex)) 
- [„Graph A-E“ Examen 66115 Herbst 2020 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Algorithmus von Dijkstra) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Kürzeste-Wege-Bäume und minimale Spannbäume“ Examen 66115 Frühjahr 2021 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Graphen, Algorithmus von Dijkstra, Algorithmus von Prim) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
#### Minimaler Spannbaum
- [„Studiflix“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/20_Spannbaume/Aufgabe_Studiflix.pdf) (Algorithmus von Prim) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/20_Spannbaume/Aufgabe_Studiflix.tex)) 
- [„TUM“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/20_Spannbaume/Aufgabe_TUM.pdf) (Algorithmus von Prim) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/20_Spannbaume/Aufgabe_TUM.tex)) 
- [„Minimaler Spannbaum A-H“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/Aufgabe_Minimaler-Spannbaum-A-H.pdf) (Minimaler Spannbaum, Algorithmus von Kruskal) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/Aufgabe_Minimaler-Spannbaum-A-H.tex)) 
- [Examen 46115 Frühjahr 2014 T1 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-8.pdf) (Minimaler Spannbaum, Algorithmus von Kruskal) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-8.tex)) 
- [„Graph G“ Examen 46115 Frühjahr 2018 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/Thema-2/Aufgabe-4.pdf) (Minimaler Spannbaum, Algorithmus von Prim) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/Thema-2/Aufgabe-4.tex)) 
- [„Maximaler Spannbaum mit Jarník/Prim“ Examen 46115 Herbst 2019 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-8.pdf) (Algorithmus von Prim) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-8.tex)) 
- [„Bayerischee Autobahnen“ Examen 66115 Frühjahr 2017 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-1.pdf) (Algorithmus von Dijkstra, Algorithmus von Kruskal) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-1.tex)) 
- [Examen 66115 Frühjahr 2018 T2 A10](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-10.pdf) (Algorithmus von Prim) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-10.tex)) 
- [„Graph a-h“ Examen 66115 Herbst 2019 T2 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-8.pdf) (Minimaler Spannbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-8.tex)) 
- [„Kürzeste-Wege-Bäume und minimale Spannbäume“ Examen 66115 Frühjahr 2021 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Graphen, Algorithmus von Dijkstra, Algorithmus von Prim) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
#### Knotensuchalgorithmen
- [Aufgabe](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/30_Tiefen-Breitensuche/Aufgabe_favtutor.com.pdf) (Tiefensuche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/90_Graphen/30_Tiefen-Breitensuche/Aufgabe_favtutor.com.tex)) 
- [„dfs-number“ Examen 46115 Herbst 2014 T1 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/09/Thema-1/Aufgabe-8.pdf) (Tiefensuche, Stapel (Stack)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/09/Thema-1/Aufgabe-8.tex)) 
- [Examen 66115 Frühjahr 2012 T1 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Thema-1/Aufgabe-7.pdf) (Breitensuche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Thema-1/Aufgabe-7.tex)) 
- [Examen 66115 Frühjahr 2013 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-2/Aufgabe-5.pdf) (Graphen, Breitensuche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-2/Aufgabe-5.tex)) 
- [Examen 66115 Frühjahr 2018 T2 A11](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-11.pdf) (Graphen, Tiefensuche, Breitensuche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-11.tex)) 
- [„Schwach zusammenhängend gerichteter Graph“ Examen 66115 Frühjahr 2021 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Breitensuche) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 



## Softwaresysteme (SOSY)


### Projektmanagement
- [„Multiple-Choice Allgemeine Software-Technologie“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/01_Projektmanagement/Aufgabe_Allgemeine-Software-Technik.pdf) (EXtreme Programming, V-Modell, Wasserfallmodell, SCRUM, Prototyping, Unit-Test, Anforderungsanalyse) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/01_Projektmanagement/Aufgabe_Allgemeine-Software-Technik.tex)) 
- [„Teacher-Data“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/01_Projektmanagement/Aufgabe_Teacher-Data.pdf) (Nicht-funktionale Anforderungen, Funktionale Anforderungen, Wasserfallmodell, Spiralmodell, V-Modell, Evolutionäre Softwaremodelle, Inkrementelle Prozessmodelle, SCRUM) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/01_Projektmanagement/Aufgabe_Teacher-Data.tex)) 
- [„Grundwissen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Grundwissen.pdf) (White-Box-Testing, Black-Box-Testing, Funktionalorienteres Testen, V-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Grundwissen.tex)) 
- [„3 Begriffe in 3 Stäzen“ Examen 46116 Frühjahr 2013 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Agile Methoden) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Multiple-Choice“ Examen 46116 Herbst 2014 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (EXtreme Programming, V-Modell, SCRUM, Prototyping, Funktionale Anforderungen, Nicht-funktionale Anforderungen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Vorgehensmodelle“ Examen 46116 Herbst 2014 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Prozessmodelle, Wasserfallmodell, V-Modell, Iterative Prozessmodelle) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Vermischte Softwaresysteme-Fragen“ Examen 66116 Herbst 2013 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Testen, Model Checking, Refactoring, EXtreme Programming, White-Box-Testing, Black-Box-Testing, Funktionale Anforderungen, Nicht-funktionale Anforderungen, Kontinuierliche Integration (Continuous Integration), Unit-Test, wp-Kalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Softwaresystem: Begriffe und Konzepte“ Examen 66116 Herbst 2016 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Pflichtenheft, Softwaremaße, Evolutionäre Softwaremodelle, Versionsverwaltungssoftware, Funktionale Anforderungen, Nicht-funktionale Anforderungen, Kontinuierliche Integration (Continuous Integration)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Lebenszyklus“ Examen 66116 Herbst 2020 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (Projektplanung, SCRUM) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
- [Examen 66116 Herbst 2020 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Prozessmodelle, Wasserfallmodell, Kontinuierliche Integration (Continuous Integration), EXtreme Programming, Softwaremaße, SCRUM) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Entwicklungsprozesse“ Examen 66116 Frühjahr 2021 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Prozessmodelle, Iterative Prozessmodelle, Inkrementelle Prozessmodelle, Agiles Manifest, SCRUM) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 


### Projektplanung
- [„Alles“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Alles.pdf) (Petri-Netz, Erreichbarkeitsgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Alles.tex)) 
- [„Begriffe“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Begriffe.pdf) (Petri-Netz, Beschränktheit, Lebendigkeit, Verklemmungsfreiheit, Umkehrbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Begriffe.tex)) 
- [„Erreichbarkeitsgraph“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Erreichbarkeitsgraph.pdf) (Petri-Netz, Erreichbarkeitsgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Erreichbarkeitsgraph.tex)) 
- [„Modellierung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Modellierung.pdf) (Petri-Netz) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Modellierung.tex)) 
- [„Rechnen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Rechnen.pdf) (Petri-Netz) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/10_Petri-Netze/Aufgabe_Rechnen.tex)) 
- [„CPM und Gantt“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/20_CPM-Netzplantechnik/Aufgabe_CPM-Gantt.pdf) (CPM-Netzplantechnik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/20_CPM-Netzplantechnik/Aufgabe_CPM-Gantt.tex)) 
- [„CPM-Netzwerk“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/20_CPM-Netzplantechnik/Aufgabe_CPM-Netzwerk.pdf) (CPM-Netzplantechnik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/20_CPM-Netzplantechnik/Aufgabe_CPM-Netzwerk.tex)) 
- [„CPM mit Scheinvorgang“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/20_CPM-Netzplantechnik/Aufgabe_CPM-Scheinvorgang.pdf) (CPM-Netzplantechnik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/20_CPM-Netzplantechnik/Aufgabe_CPM-Scheinvorgang.tex)) 
- [„Anordnungsbeziehungen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/30_Gantt/Aufgabe_Anordnungsbeziehungen.pdf) (Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/30_Gantt/Aufgabe_Anordnungsbeziehungen.tex)) 
- [„Gantt und CPM“ Examen 46116 Frühjahr 2015 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (CPM-Netzplantechnik, Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Gantt und PERT“ Examen 46116 Herbst 2015 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [Examen 46116 Frühjahr 2016 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Petri-Netz, Erreichbarkeitsgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Gantt und PERT“ Examen 46116 Frühjahr 2017 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
- [„Gantt und CPM“ Examen 66116 Herbst 2012 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (CPM-Netzplantechnik, Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Automatisierungsanlage mit zwei Robotern“ Examen 66116 Frühjahr 2015 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Petri-Netz) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Projektmanagement“ Examen 66116 Frühjahr 2016 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Gantt und CPM“ Examen 66116 Herbst 2017 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Gantt und zwei Softwareentwickler“ Examen 66116 Herbst 2018 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Gantt-Diagramm, CPM-Netzplantechnik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Projektplanung“ Examen 66116 Herbst 2020 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Projektplanung, CPM-Netzplantechnik, Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Lebenszyklus“ Examen 66116 Herbst 2020 T1 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) (Projektplanung, SCRUM) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-5.tex)) 
- [„Projektmanagement“ Examen 66116 Herbst 2020 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Gantt-Diagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Projektmanagement“ Examen 66116 Frühjahr 2021 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (CPM-Netzplantechnik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 

### Modellierung: UML-Diagramme

#### Struktur-Diagramme

##### Klassendiagramm
- [„Fußballmeisterschaft“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/10_Struktur/10_Klassendiagramm/Aufgabe_Fußballmeisterschaft.pdf) (Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/10_Struktur/10_Klassendiagramm/Aufgabe_Fußballmeisterschaft.tex)) 
- [„Gasthausen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/10_Struktur/10_Klassendiagramm/Aufgabe_Gasthausen.pdf) (Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/10_Struktur/10_Klassendiagramm/Aufgabe_Gasthausen.tex)) 
- [„Universitätsverwaltung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/10_Struktur/10_Klassendiagramm/Aufgabe_Universitätsverwaltung.pdf) (Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/10_Struktur/10_Klassendiagramm/Aufgabe_Universitätsverwaltung.tex)) 
- [„Alle UML-Diagramme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.pdf) (UML-Diagramme, Klassendiagramm, Objektdiagramm, Zustandsdiagramm Wissen, Sequenzdiagramm, Aktivitätsdiagramm, Anwendungsfalldiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.tex)) 
- [„Bankkonten“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Bankkonten.pdf) (Vererbung, Generalisierung, Spezialisierung, Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Bankkonten.tex)) 
- [„Kleintierpraxis“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Kleintierpraxis.pdf) (Vererbung, Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Vererbung/Aufgabe_Kleintierpraxis.tex)) 
- [„Maut“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Maut.pdf) (Einfach-verkettete Liste, Klassendiagramm, Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Maut.tex)) 
- [„Reiseunternehmen“ Examen 46116 Frühjahr 2010 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2010/03/Thema-1/Aufgabe-1.pdf) (Warteschlange (Queue), Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2010/03/Thema-1/Aufgabe-1.tex)) 
- [„Hotel-Verwaltung“ Examen 46116 Frühjahr 2012 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„CreditCard, Order“ Examen 46116 Frühjahr 2013 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Bestellsystem“ Examen 46116 Herbst 2014 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Objektdiagramm, Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Korrektheit von UML-Diagrammen“ Examen 46116 Frühjahr 2017 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (UML-Diagramme, Klassendiagramm, Anwendungsfalldiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Entwurfsmuster bei Bankkonten, Hockeyspiel, Dateisystem“ Examen 46116 Herbst 2017 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (Entwurfsmuster, Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Beobachter (Observer), Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Fußballweltmeisterschaft“ Examen 46116 Frühjahr 2018 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (Klassendiagramm, Implementierung in Java, Feld (Array), main-Methode) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Banksystem“ Examen 66112 Herbst 2002 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/09/Thema-1/Aufgabe-4.pdf) (Vererbung, Abstrakte Klasse, Implementierung in Java, Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/09/Thema-1/Aufgabe-4.tex)) 
- [„Klasse „DoublyLinkedList““ Examen 66112 Frühjahr 2005 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-1/Aufgabe-1.pdf) (Doppelt-verkettete Liste, Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-1/Aufgabe-1.tex)) 
- [„Flugbuchung“ Examen 66112 Herbst 2006 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.pdf) (Vererbung, Klassendiagramm, Objektdiagramm, Sequenzdiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.tex)) 
- [„OOP/OOD - Reverse Engineering“ Examen 66116 Frühjahr 2015 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Entwurfsmuster in UML-Diagramm erkennen“ Examen 66116 Frühjahr 2016 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Wiederholer (Iterator), Adapter, Kompositum (Composite), Klassenadapter, Objektadapter, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„PKI-System Lehrer Schüler“ Examen 66116 Herbst 2016 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Aktivitätsdiagramm als Klassendiagramm“ Examen 66116 Herbst 2017 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Aktivitätsdiagramm, Klassendiagramm, Objektdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„UML-Diagramme entspreched Java-Code zeichnen“ Examen 66116 Frühjahr 2018 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Vererbung, Interface, Abstrakte Klasse, Klassendiagramm, Objektdiagramm, Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Countdown und Observer“ Examen 66116 Frühjahr 2018 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Beobachter (Observer), Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Beatles“ Examen 66116 Herbst 2018 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Zustand (State), Klassendiagramm zeichnen, Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Roboter in einer Montagehalle“ Examen 66116 Frühjahr 2019 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Klassendiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Dateisystem: Implementierung durch Kompositum“ Examen 66116 Herbst 2019 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Entwurfsmuster, Kompositum (Composite), Klassendiagramm, Implementierung in Java, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
##### Objektdiagramm
- [„Alle UML-Diagramme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.pdf) (UML-Diagramme, Klassendiagramm, Objektdiagramm, Zustandsdiagramm Wissen, Sequenzdiagramm, Aktivitätsdiagramm, Anwendungsfalldiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.tex)) 
- [„Firmenstruktur“ Examen 46116 Frühjahr 2011 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2011/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Einfach-verkettete Liste, Objektdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2011/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Bestellsystem“ Examen 46116 Herbst 2014 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Objektdiagramm, Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Flugbuchung“ Examen 66112 Herbst 2006 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.pdf) (Vererbung, Klassendiagramm, Objektdiagramm, Sequenzdiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.tex)) 
- [„Aktivitätsdiagramm als Klassendiagramm“ Examen 66116 Herbst 2017 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Aktivitätsdiagramm, Klassendiagramm, Objektdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„UML-Diagramme entspreched Java-Code zeichnen“ Examen 66116 Frühjahr 2018 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Vererbung, Interface, Abstrakte Klasse, Klassendiagramm, Objektdiagramm, Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 

#### Verhaltens-Diagramme

##### Sequenzdiagramm
- [„Alle UML-Diagramme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.pdf) (UML-Diagramme, Klassendiagramm, Objektdiagramm, Zustandsdiagramm Wissen, Sequenzdiagramm, Aktivitätsdiagramm, Anwendungsfalldiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.tex)) 
- [„Spielzeugeisenbahnen“ Examen 46116 Herbst 2016 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Flugbuchung“ Examen 66112 Herbst 2006 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.pdf) (Vererbung, Klassendiagramm, Objektdiagramm, Sequenzdiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.tex)) 
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„UML-Diagramme entspreched Java-Code zeichnen“ Examen 66116 Frühjahr 2018 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Vererbung, Interface, Abstrakte Klasse, Klassendiagramm, Objektdiagramm, Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Webdienst PizzaNow“ Examen 66116 Frühjahr 2019 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Kartenschalter“ Examen 66116 Frühjahr 2020 T2 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) (Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Objektorientierte Analyse“ Examen 66116 Herbst 2020 T2 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) (Objektorientierung, Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Webshop“ Examen 66116 Frühjahr 2021 T2 TA1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-5.pdf) (Implementierung in Java, Sequenzdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-5.tex)) 
##### Kommunikationsdiagramm
- [„Alle UML-Diagramme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.pdf) (UML-Diagramme, Klassendiagramm, Objektdiagramm, Zustandsdiagramm Wissen, Sequenzdiagramm, Aktivitätsdiagramm, Anwendungsfalldiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.tex)) 
- [„Flugbuchung“ Examen 66112 Herbst 2006 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.pdf) (Vererbung, Klassendiagramm, Objektdiagramm, Sequenzdiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.tex)) 
##### Aktivitätsdiagramm
- [„Alle UML-Diagramme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.pdf) (UML-Diagramme, Klassendiagramm, Objektdiagramm, Zustandsdiagramm Wissen, Sequenzdiagramm, Aktivitätsdiagramm, Anwendungsfalldiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.tex)) 
- [„DVD-Automat“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/02_Modellierung/Aufgabe_DVD-Automat.pdf) (Zustandsdiagramm zeichnen, Aktivitätsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/02_Modellierung/Aufgabe_DVD-Automat.tex)) 
- [„Aktivitätsdiagramm als Klassendiagramm“ Examen 66116 Herbst 2017 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Aktivitätsdiagramm, Klassendiagramm, Objektdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Roboter in einer Montagehalle“ Examen 66116 Frühjahr 2019 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Aktivitätsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
##### Anwendungsfalldiagramm
- [„Alle UML-Diagramme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.pdf) (UML-Diagramme, Klassendiagramm, Objektdiagramm, Zustandsdiagramm Wissen, Sequenzdiagramm, Aktivitätsdiagramm, Anwendungsfalldiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.tex)) 
- [„Bestellsystem“ Examen 46116 Herbst 2014 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Objektdiagramm, Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Geldautomat“ Examen 46116 Frühjahr 2017 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Anwendungsfalldiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Korrektheit von UML-Diagrammen“ Examen 46116 Frühjahr 2017 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (UML-Diagramme, Klassendiagramm, Anwendungsfalldiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„PKI-System Lehrer Schüler“ Examen 66116 Herbst 2016 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Umfrage“ Examen 66116 Frühjahr 2019 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Anwendungsfalldiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Fahrkartenautomat“ Examen 66116 Herbst 2020 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (Anwendungsfalldiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
##### Zustandsdiagramm
- [„Restaurant „Fleißige Bienchen““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/20_Verhalten/30_Zustandsdiagramm/Aufgabe_Fleißige-Bienchen.pdf) (Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/20_Verhalten/30_Zustandsdiagramm/Aufgabe_Fleißige-Bienchen.tex)) 
- [„Alle UML-Diagramme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.pdf) (UML-Diagramme, Klassendiagramm, Objektdiagramm, Zustandsdiagramm Wissen, Sequenzdiagramm, Aktivitätsdiagramm, Anwendungsfalldiagramm, Kommunikationsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/20_OOMUP/Diagramme/Aufgabe_Alle-UML-Diagramme.tex)) 
- [„DVD-Automat“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/02_Modellierung/Aufgabe_DVD-Automat.pdf) (Zustandsdiagramm zeichnen, Aktivitätsdiagramm) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/02_Modellierung/Aufgabe_DVD-Automat.tex)) 
- [„Bestellsystem“ Examen 46116 Herbst 2014 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Objektdiagramm, Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Digitaluhr“ Examen 46116 Herbst 2018 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Radiotuner“ Examen 66116 Frühjahr 2015 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Beatles“ Examen 66116 Herbst 2018 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Zustand (State), Klassendiagramm zeichnen, Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Zustand-Entwurfsmuster bei Verwaltung von Prozessen“ Examen 66116 Herbst 2019 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (Zustand (State), Zustandsdiagramm Wissen, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Bankautomat“ Examen 66116 Frühjahr 2020 T1 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) (Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-1/Aufgabe-1.tex)) 


### Entwurfsmuster

#### Erzeugungsmuster (Creational Patterns)

##### Abstrakte Fabrik (Abstract Factory)
- [„Entwurfsmuster bei Bankkonten, Hockeyspiel, Dateisystem“ Examen 46116 Herbst 2017 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (Entwurfsmuster, Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Beobachter (Observer), Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Entwurfsmuster in UML-Diagramm erkennen“ Examen 66116 Frühjahr 2016 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Wiederholer (Iterator), Adapter, Kompositum (Composite), Klassenadapter, Objektadapter, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
##### Einzelstück (Singleton)
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
##### Erbauer (Builder)
- [„Wissen Erbauer“ Examen 66116 Frühjahr 2021 T1 TA1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-6.pdf) (Erbauer (Builder)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-6.tex)) 

#### Strukturmuster (Structural Patterns)

##### Adapter
- [„Entwurfsmuster in UML-Diagramm erkennen“ Examen 66116 Frühjahr 2016 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Wiederholer (Iterator), Adapter, Kompositum (Composite), Klassenadapter, Objektadapter, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
##### Dekorierer (Decorator)

##### Kompositum (Composite)
- [„Maut“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Maut.pdf) (Einfach-verkettete Liste, Klassendiagramm, Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Maut.tex)) 
- [„Wörterbuch“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Woerterbuch.pdf) (Einfach-verkettete Liste, Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/70_Listen/10_Listen/Aufgabe_Woerterbuch.tex)) 
- [„Grafik“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/Entwurfsmuster/20_Struktur/30_Kompositium/Aufgabe_Grafik.pdf) (Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/03_Projektplanung/Entwurfsmuster/20_Struktur/30_Kompositium/Aufgabe_Grafik.tex)) 
- [„Entwurfsmuster bei Bankkonten, Hockeyspiel, Dateisystem“ Examen 46116 Herbst 2017 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (Entwurfsmuster, Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Beobachter (Observer), Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Entwurfsmuster in UML-Diagramm erkennen“ Examen 66116 Frühjahr 2016 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Wiederholer (Iterator), Adapter, Kompositum (Composite), Klassenadapter, Objektadapter, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
- [„Grafik: Kreis, Quadrat, Dreieck“ Examen 66116 Frühjahr 2019 T1 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) (Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Dateisystem: Implementierung durch Kompositum“ Examen 66116 Herbst 2019 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Entwurfsmuster, Kompositum (Composite), Klassendiagramm, Implementierung in Java, Rekursion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
##### Stellvertreter (Proxy)


#### Verhaltensmuster (Behavioral Patterns)

##### Beobachter (Observer)
- [„Entwurfsmuster bei Bankkonten, Hockeyspiel, Dateisystem“ Examen 46116 Herbst 2017 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (Entwurfsmuster, Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Beobachter (Observer), Kompositum (Composite)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Countdown und Observer“ Examen 66116 Frühjahr 2018 T2 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) (Beobachter (Observer), Klassendiagramm, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex)) 
##### Kommando (Command)
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
##### Schablone (Template)

##### Wiederholer (Iterator)
- [„Entwurfsmuster in UML-Diagramm erkennen“ Examen 66116 Frühjahr 2016 T1 TA2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) (Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Wiederholer (Iterator), Adapter, Kompositum (Composite), Klassenadapter, Objektadapter, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.tex)) 
##### Zustand (State)
- [„Beatles“ Examen 66116 Herbst 2018 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (Zustand (State), Klassendiagramm zeichnen, Zustandsdiagramm zeichnen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Zustand-Entwurfsmuster bei Verwaltung von Prozessen“ Examen 66116 Herbst 2019 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (Zustand (State), Zustandsdiagramm Wissen, Implementierung in Java) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 

#### Sonstige Entwurfsmuster

##### Modell-Präsentation-Steuerung (Model-View-Controller)
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
##### Einbringen von Abhängigkeiten (Dependency Injection)
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„MyParser“ Examen 66116 Frühjahr 2021 T1 TA1 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-7.pdf) (Einbringen von Abhängigkeiten (Dependency Injection)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-7.tex)) 


### Softwarearchitektur
- [„Wahrheitsgehalt-Tabelle Software Engineering“ Examen 66116 Herbst 2016 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„AJAX“ Examen 66116 Frühjahr 2021 T1 TA1 A10](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-10.pdf) (Client-Server-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-10.tex)) 
- [„HTTP“ Examen 66116 Frühjahr 2021 T1 TA1 A11](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-11.pdf) (Client-Server-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-11.tex)) 
- [„Richtig-Falsch“ Examen 66116 Frühjahr 2021 T1 TA1 A12](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-12.pdf) (Peer-to-Peer-Architektur) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-12.tex)) 
- [„Client-Server-Modell“ Examen 66116 Frühjahr 2021 T1 TA1 A8](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-8.pdf) (Client-Server-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-8.tex)) 
- [„Client-Server-Technologien“ Examen 66116 Frühjahr 2021 T1 TA1 A9](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-9.pdf) (Client-Server-Modell) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-9.tex)) 


### Testen

#### Kontrollflussorientieres Testen
- [„Größter gemeinsamer Teiler“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Groesster-gemeinsamer-Teiler.pdf) (Datenfluss-annotierter Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, C2b Schleife-Inneres-Pfadüberdeckung (Boundary-Interior Path Coverage)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Groesster-gemeinsamer-Teiler.tex)) 
- [„Methode „log()““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Methode-log.pdf) (Kontrollflussgraph, Überdeckbarkeit, C2b Schleife-Inneres-Pfadüberdeckung (Boundary-Interior Path Coverage)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Methode-log.tex)) 
- [„Methode „isPalindrom()““ Examen 46116 Herbst 2015 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Kontrollflussgraph, C1-Test Zweigüberdeckung (Branch Coverage), C2b Schleife-Inneres-Pfadüberdeckung (Boundary-Interior Path Coverage), Zyklomatische Komplexität nach Mc-Cabe, C2a Vollständige Pfadüberdeckung (Full Path Coverage), Datenfluss-annotierter Kontrollflussgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Testen bei Bubblesort“ Examen 46116 Herbst 2017 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (Bubblesort, Black-Box-Testing, Anforderungsüberdeckung, Äquivalenzklassenzerlegung, Grenzwertanalyse, Kontrollflussgraph, C2a Vollständige Pfadüberdeckung (Full Path Coverage)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„Methode „specialSums()““ Examen 66116 Herbst 2014 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (Kontrollflussorientieres Testen, Kontrollflussgraph, C0-Test Anweisungsüberdeckung (Statement Coverage), C1-Test Zweigüberdeckung (Branch Coverage)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Sort-Methode und datenflussorientierte Überdeckungskritierien“ Examen 66116 Herbst 2016 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Datenflussorientiertes Testen, Bubblesort, Datenfluss-annotierter Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, C1-Test Zweigüberdeckung (Branch Coverage), all uses) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Methode „binToInt()“ und Kontrollflussgraph“ Examen 66116 Frühjahr 2017 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, Datenfluss-annotierter Kontrollflussgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 
- [„Code-Inspection bei Binärer Suche“ Examen 66116 Herbst 2017 T1 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) (Binäre Suche, Design by Contract, Kontrollflussgraph, Vollständige Anweisungsüberdeckung) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„White-Box-Testverfahren“ Examen 66116 Herbst 2020 T1 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) (White-Box-Testing, Kontrollflussgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-4.tex)) 
#### Datenflussorientiertes Testen
- [„Größter gemeinsamer Teiler“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Groesster-gemeinsamer-Teiler.pdf) (Datenfluss-annotierter Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, C2b Schleife-Inneres-Pfadüberdeckung (Boundary-Interior Path Coverage)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/20_Black_White-Box-Test/Aufgabe_Groesster-gemeinsamer-Teiler.tex)) 
- [„Methode „isPalindrom()““ Examen 46116 Herbst 2015 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Kontrollflussgraph, C1-Test Zweigüberdeckung (Branch Coverage), C2b Schleife-Inneres-Pfadüberdeckung (Boundary-Interior Path Coverage), Zyklomatische Komplexität nach Mc-Cabe, C2a Vollständige Pfadüberdeckung (Full Path Coverage), Datenfluss-annotierter Kontrollflussgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 
- [„Sort-Methode und datenflussorientierte Überdeckungskritierien“ Examen 66116 Herbst 2016 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Datenflussorientiertes Testen, Bubblesort, Datenfluss-annotierter Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, C1-Test Zweigüberdeckung (Branch Coverage), all uses) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Methode „binToInt()“ und Kontrollflussgraph“ Examen 66116 Frühjahr 2017 T2 TA2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) (Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, Datenfluss-annotierter Kontrollflussgraph) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex)) 

#### Formale Verifikation

##### wp-Kalkül
- [„Grundwissen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_Grundwissen.pdf) (Formale Verifikation, wp-Kalkül, Hoare-Kalkül, Partielle Korrektheit, Totale Korrektheit, Invariante, Terminierungsfunktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_Grundwissen.tex)) 
- [„Methode „f()““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_Methode-f.pdf) (wp-Kalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_Methode-f.tex)) 
- [„x += 5; y *= 2; z = z modulo 4;“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_Vorlesungsaufgabe-WP-Kalkuel.pdf) (wp-Kalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_Vorlesungsaufgabe-WP-Kalkuel.tex)) 
- [„Hanoi“ Examen 46116 Frühjahr 2014 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Vollständige Induktion, Terminierungsfunktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„ASCII“ Examen 46116 Herbst 2015 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (wp-Kalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 
- [„Vermischte Softwaresysteme-Fragen“ Examen 66116 Herbst 2013 T1 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) (Testen, Model Checking, Refactoring, EXtreme Programming, White-Box-Testing, Black-Box-Testing, Funktionale Anforderungen, Nicht-funktionale Anforderungen, Kontinuierliche Integration (Continuous Integration), Unit-Test, wp-Kalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/09/Thema-1/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„Methode „doubleFac()“: wp-Kalkül und Schleifeninvariante“ Examen 66116 Herbst 2015 T2 TA2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) (wp-Kalkül, Invariante, Terminierungsfunktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-2/Teilaufgabe-2/Aufgabe-3.tex)) 
- [„wp-Kalkül mit Invariante bei Methode „mul()““ Examen 66116 Frühjahr 2017 T2 TA2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) (wp-Kalkül, Invariante, Totale Korrektheit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-4.tex)) 
- [„Verifikation“ Examen 66116 Herbst 2020 T1 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) (Verifikation, wp-Kalkül) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex)) 
##### Vollständige Induktion
- [„Gaußsche Summenformel“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/20_Vollstaendige-Induktion/Aufgabe_Gausssche-Summenformel.pdf) (Vollständige Induktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/30_AUD/20_Vollstaendige-Induktion/Aufgabe_Gausssche-Summenformel.tex)) 
- [Aufgabe](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_E-Klausur_Vollstaendige-Induktion.pdf) (Vollständige Induktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/40_SOSY/05_Testen/10_Formale-Verifikation/Aufgabe_E-Klausur_Vollstaendige-Induktion.tex)) 
- [„Hanoi“ Examen 46116 Frühjahr 2014 T2 TA1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) (Vollständige Induktion, Terminierungsfunktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-1/Aufgabe-1.tex)) 
- [„Formale Verifikation mit vollständiger Induktion“ Examen 46116 Herbst 2016 T2 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) (Vollständige Induktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-4.tex)) 
- [„drei hoch“ Examen 66112 Herbst 2003 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/Thema-2/Aufgabe-5.pdf) (Vollständige Induktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/Thema-2/Aufgabe-5.tex)) 
- [„Klasse „LeftFactorial“ und Methode „lfBig()““ Examen 66115 Frühjahr 2014 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-1.pdf) (Rekursion, Vollständige Induktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-1.tex)) 
- [„Methode „sumOfSquares()““ Examen 66115 Frühjahr 2017 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-4.pdf) (Vollständige Induktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-4.tex)) 



## Technische Informatik (TECH)

### Ein-Adress-Befehl-Assembler
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_01-Vorlesungsaufgaben.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_01-Vorlesungsaufgaben.tex)) 
- [„Abitur 2013 III“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_02-Abitur-2013-III-Fakultaet.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_02-Abitur-2013-III-Fakultaet.tex)) 
- [„Pulverdosen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_03-Abitur-2013-IV-Pulverdosen.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_03-Abitur-2013-IV-Pulverdosen.tex)) 
- [„Papyrus Rhind“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_04-Abitur-2015-IV-Papyrus-Rhind.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_04-Abitur-2015-IV-Papyrus-Rhind.tex)) 
- [„Primzahl“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_05-Abitur-2017-IV-Primzahl.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_05-Abitur-2017-IV-Primzahl.tex)) 
- [„Collatz“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_06-Abitur-2019-IV-Collatz.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_06-Abitur-2019-IV-Collatz.tex)) 
- [„Abitur 2018“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_Abitur-2018-III.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_Abitur-2018-III.tex)) 
- [„funkyFunction“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_Abitur-2018-IV.pdf) (Ein-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/10_Ein-Adress/Aufgabe_Abitur-2018-IV.tex)) 
### Mehr-Adress-Befehl-Assembler
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_07-Vorlesungsaufgaben.pdf) (Mehr-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_07-Vorlesungsaufgaben.tex)) 
- [„Euklidscher Algorithmus“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_08-Euklid.pdf) (Mehr-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_08-Euklid.tex)) 
- [„Intervallschachtelung von Wurzeln“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_09-Wurzel.pdf) (Mehr-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_09-Wurzel.tex)) 
- [„Fakultät“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_10-Fakultaet.pdf) (Mehr-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_10-Fakultaet.tex)) 
- [„Fibonacci-Zahlen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_11-Fibonacci.pdf) (Mehr-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_11-Fibonacci.tex)) 
- [„Potenzberechnung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_12-Potenz.pdf) (Mehr-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_12-Potenz.tex)) 
- [„Beispiele“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_Beispiele.pdf) (Mehr-Adress-Befehl-Assembler) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/50_TECH/20_Mehr-Adress/Aufgabe_Beispiele.tex)) 



## Theoretische Informatik (THEO)


### Reguläre Sprachen

#### Reguläre Grammatik
- [„Grammatik aus Automat“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_Grammatik-aus-Automat.pdf) (Reguläre Sprache, Deterministisch endlicher Automat (DEA), Reguläre Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_Grammatik-aus-Automat.tex)) 
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_Vorlesungsaufgaben-Regulaere-Grammatik.pdf) (Reguläre Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_Vorlesungsaufgaben-Regulaere-Grammatik.tex)) 
- [„Reguläre Grammatik, reguläre Ausdrücke und DEA“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Regulaere-Grammatik-regulaere-Ausdruecke-und-DEA.pdf) (Reguläre Sprache, Reguläre Grammatik, Ableitung (Reguläre Sprache), Reguläre Ausdrücke, Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Regulaere-Grammatik-regulaere-Ausdruecke-und-DEA.tex)) 
- [„Reguläre Sprache“ Examen 66115 Herbst 2007 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Thema-2/Aufgabe-1.pdf) (Reguläre Sprache, Reguläre Grammatik, Reguläre Ausdrücke, Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Thema-2/Aufgabe-1.tex)) 
#### Reguläre Ausdrücke
- [„NEA-DEA-Aequivalenzklassen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_NEA-DEA-Aequivalenzklassen.pdf) (Reguläre Sprache, Deterministisch endlicher Automat (DEA), Minimierungsalgorithmus, Reguläre Ausdrücke, Äquivalenzklassen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_NEA-DEA-Aequivalenzklassen.tex)) 
- [„Arztpraxis und Autohauskette“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Arztpraxis.pdf) (Reguläre Ausdrücke) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Arztpraxis.tex)) 
- [„Reguläre Grammatik, reguläre Ausdrücke und DEA“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Regulaere-Grammatik-regulaere-Ausdruecke-und-DEA.pdf) (Reguläre Sprache, Reguläre Grammatik, Ableitung (Reguläre Sprache), Reguläre Ausdrücke, Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Regulaere-Grammatik-regulaere-Ausdruecke-und-DEA.tex)) 
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Vorlesungsaufgaben-Regulaere-Ausdruecke.pdf) (Reguläre Ausdrücke) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Vorlesungsaufgaben-Regulaere-Ausdruecke.tex)) 
- [„Reguläre Sprache“ Examen 46115 Frühjahr 2020 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-1/Aufgabe-1.pdf) (Reguläre Sprache, Reguläre Ausdrücke) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-1/Aufgabe-1.tex)) 
- [„Reguläre Sprache“ Examen 66115 Herbst 2007 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Thema-2/Aufgabe-1.pdf) (Reguläre Sprache, Reguläre Grammatik, Reguläre Ausdrücke, Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Thema-2/Aufgabe-1.tex)) 
#### Deterministisch endlicher Automat (DEA)
- [„Grammatik aus Automat“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_Grammatik-aus-Automat.pdf) (Reguläre Sprache, Deterministisch endlicher Automat (DEA), Reguläre Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_Grammatik-aus-Automat.tex)) 
- [„NEA-DEA-Aequivalenzklassen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_NEA-DEA-Aequivalenzklassen.pdf) (Reguläre Sprache, Deterministisch endlicher Automat (DEA), Minimierungsalgorithmus, Reguläre Ausdrücke, Äquivalenzklassen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_NEA-DEA-Aequivalenzklassen.tex)) 
- [„Deterministischer endlicher Automat“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Endliche-Automaten/Aufgabe_Deterministischer-endlicher-Automat.pdf) (Reguläre Sprache, Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Endliche-Automaten/Aufgabe_Deterministischer-endlicher-Automat.tex)) 
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Endliche-Automaten/Aufgabe_Vorlesungsaufgaben-DEA.pdf) (Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Endliche-Automaten/Aufgabe_Vorlesungsaufgaben-DEA.tex)) 
- [„Reguläre Grammatik, reguläre Ausdrücke und DEA“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Regulaere-Grammatik-regulaere-Ausdruecke-und-DEA.pdf) (Reguläre Sprache, Reguläre Grammatik, Ableitung (Reguläre Sprache), Reguläre Ausdrücke, Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Regulaere-Ausdruecke/Aufgabe_Regulaere-Grammatik-regulaere-Ausdruecke-und-DEA.tex)) 
- [„Komplemetieren eines NEA“ Examen 46115 Herbst 2019 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-1.pdf) (Potenzmengenalgorithmus, Nichtdeterministisch endlicher Automat (NEA), Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-1.tex)) 
#### Nichtdeterministisch endlicher Automat (NEA)
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Endliche-Automaten/Aufgabe_Vorlesungsaufgaben-NEA.pdf) (Nichtdeterministisch endlicher Automat (NEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Endliche-Automaten/Aufgabe_Vorlesungsaufgaben-NEA.tex)) 
- [„Komplemetieren eines NEA“ Examen 46115 Herbst 2019 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-1.pdf) (Potenzmengenalgorithmus, Nichtdeterministisch endlicher Automat (NEA), Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-1.tex)) 
#### Potenzmengenalgorithmus
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Vorlesungsaufgaben-Potenzmengenalgorithmus-erstes-Beispiel.pdf) (Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Vorlesungsaufgaben-Potenzmengenalgorithmus-erstes-Beispiel.tex)) 
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Vorlesungsaufgaben-Potenzmengenalgorithmus.pdf) (Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Vorlesungsaufgaben-Potenzmengenalgorithmus.tex)) 
- [„Reguläre Sprache“ Examen 46115 Herbst 2016 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-1/Aufgabe-1.pdf) (Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-1/Aufgabe-1.tex)) 
- [„Komplemetieren eines NEA“ Examen 46115 Herbst 2019 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-1.pdf) (Potenzmengenalgorithmus, Nichtdeterministisch endlicher Automat (NEA), Deterministisch endlicher Automat (DEA)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-1.tex)) 
- [„Reguläre Sprache“ Examen 66115 Herbst 2007 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Thema-2/Aufgabe-1.pdf) (Reguläre Sprache, Reguläre Grammatik, Reguläre Ausdrücke, Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Thema-2/Aufgabe-1.tex)) 
- [„NEA und Minimalisierung“ Examen 66115 Herbst 2012 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-1.pdf) (Potenzmengenalgorithmus, Minimierungsalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-1.tex)) 
- [„Alphabet „01“ Anzahl Unterschied höchstes 3“ Examen 66115 Frühjahr 2015 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-1/Aufgabe-1.pdf) (Reguläre Sprache, Pumping-Lemma (Reguläre Sprache), Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-1/Aufgabe-1.tex)) 
- [„Automaten mit Zuständen q, r, s, t“ Examen 66115 Frühjahr 2020 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-2.pdf) (Reguläre Sprache, Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-2.tex)) 
#### Erweiteter Potenzmengenalgorithmus
- [„NEA: z012, Alphabet: abc“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Erweiteter-Potenzmengenalgorithmus.pdf) (Erweiteter Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Erweiteter-Potenzmengenalgorithmus.tex)) 
- [„NEA: z01234, Alphabet: ab“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Vorlesungsaufgaben-Erweiteter-Potenzmengenalgorithmus.pdf) (Erweiteter Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Potenzmengenalgorithmus/Aufgabe_Vorlesungsaufgaben-Erweiteter-Potenzmengenalgorithmus.tex)) 
#### Pumping-Lemma (Reguläre Sprache)
- [„„w w““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Koblenz.pdf) (Pumping-Lemma (Reguläre Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Koblenz.tex)) 
- [„„w^n^2“ „a^n b^m c^n““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Pumping-Lemma.pdf) (Pumping-Lemma (Reguläre Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Pumping-Lemma.tex)) 
- [„w c w^R“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Saarland-Pinkal.pdf) (Pumping-Lemma (Reguläre Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Saarland-Pinkal.tex)) 
- [„a^n b^m“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Vorlesungsaufgaben-Pumping-Lemma.pdf) (Pumping-Lemma (Reguläre Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Pumping-Lemma/Aufgabe_Vorlesungsaufgaben-Pumping-Lemma.tex)) 
- [„Alphabet „01“ Anzahl Unterschied höchstes 3“ Examen 66115 Frühjahr 2015 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-1/Aufgabe-1.pdf) (Reguläre Sprache, Pumping-Lemma (Reguläre Sprache), Potenzmengenalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-1/Aufgabe-1.tex)) 
- [„Palindrom über Alphabet „abc““ Examen 66115 Herbst 2020 T1 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) (Kontextfreie Sprache, Pumping-Lemma (Reguläre Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-3.tex)) 
#### Minimierungsalgorithmus
- [„NEA-DEA-Aequivalenzklassen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_NEA-DEA-Aequivalenzklassen.pdf) (Reguläre Sprache, Deterministisch endlicher Automat (DEA), Minimierungsalgorithmus, Reguläre Ausdrücke, Äquivalenzklassen) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Aufgabe_NEA-DEA-Aequivalenzklassen.tex)) 
- [„Studiflix-Minimierung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Minimierungsalgorithmus/Aufgabe_Studiflix-Minimierung.pdf) (Minimierungsalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Minimierungsalgorithmus/Aufgabe_Studiflix-Minimierung.tex)) 
- [„Minimalisierung“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Minimierungsalgorithmus/Aufgabe_Vorlesungsaufgaben-Minimalisierung.pdf) (Minimierungsalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/10_Typ-3_Regulaer/Minimierungsalgorithmus/Aufgabe_Vorlesungsaufgaben-Minimalisierung.tex)) 
- [„NEA und Minimalisierung“ Examen 66115 Herbst 2012 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-1.pdf) (Potenzmengenalgorithmus, Minimierungsalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-1.tex)) 
- [„Minimierung DFA“ Examen 66115 Herbst 2013 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-3.pdf) (Minimierungsalgorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-3.tex)) 


### Kontextfreie Sprachen

#### Kontextfreie Grammtik

#### Ableitung (Kontextfreie Sprache)
- [„Ableitungen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Ableitung-Ableitungsbaum/Aufgabe_Ableitungen.pdf) (Ableitung (Kontextfreie Sprache), Ableitungsbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Ableitung-Ableitungsbaum/Aufgabe_Ableitungen.tex)) 
- [„Vorlesungsaufgabe“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Ableitung-Ableitungsbaum/Aufgabe_Vorlesungsaufgabe.pdf) (Kontextfreie Sprache, Ableitung (Kontextfreie Sprache), Ableitungsbaum) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Ableitung-Ableitungsbaum/Aufgabe_Vorlesungsaufgabe.tex)) 
- [„Vorlesungsaufgabe“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Grammatik/Aufgabe_Vorlesungsaufgabe.pdf) (Kontextfreie Sprache, Ableitung (Kontextfreie Sprache), Kontextfreie Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Grammatik/Aufgabe_Vorlesungsaufgabe.tex)) 
- [„Kontextfreie Sprachen“ Examen 66115 Frühjahr 2020 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-3.pdf) (Kontextfreie Sprache, CYK-Algorithmus, Ableitung (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-3.tex)) 
#### Kellerautomat
- [„(a^n b^n)^m“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Aufgabe_Kontextfreie-Sprache.pdf) (Kontextfreie Sprache, Kellerautomat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Aufgabe_Kontextfreie-Sprache.tex)) 
- [„Balancierte Klammern“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Balancierte-Klammern.pdf) (Kellerautomat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Balancierte-Klammern.tex)) 
- [„a^n b^n“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Foliensatz.pdf) (Kellerautomat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Foliensatz.tex)) 
- [„zu drei Grammatiken“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Kellerautomat.pdf) (Kellerautomat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Kellerautomat.tex)) 
- [„Konfigurationsfolge doppelt so viele b’s wie a’s“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Konfigurationsfolge-Kellerautomat.pdf) (Kellerautomat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Konfigurationsfolge-Kellerautomat.tex)) 
- [„0^n 1^n, gleich viele ab, kein Präfix mehr Einsen“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_PDA.pdf) (Kellerautomat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_PDA.tex)) 
- [„a^n c^i b^n“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Vorlesungsaufgabe-1.pdf) (Kontextfreie Sprache, Kellerautomat, Kontextfreie Grammatik, Konfigurationsfolge) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Vorlesungsaufgabe-1.tex)) 
- [„Nonterminal: P, Terminale: 01“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Vorlesungsaufgabe-2.pdf) (Kellerautomat) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Kellerautomat/Aufgabe_Vorlesungsaufgabe-2.tex)) 
#### Chomsky-Normalform
- [„Drei Grammatiken (SABCX, ST, SAB)“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Chomsky-Normalform/Aufgabe_Chomsky-Normalform.pdf) (Chomsky-Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Chomsky-Normalform/Aufgabe_Chomsky-Normalform.tex)) 
- [„Vorlesungsaufgabe (S, SAB, SABCD)“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Chomsky-Normalform/Aufgabe_Vorlesungsaufgabe.pdf) (Chomsky-Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Chomsky-Normalform/Aufgabe_Vorlesungsaufgabe.tex)) 
- [„Nonterminale: SAB, Terminale: ab“ Examen 66115 Frühjahr 2012 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Thema-1/Aufgabe-4.pdf) (Chomsky-Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Thema-1/Aufgabe-4.tex)) 
- [„Nonterminale: SA, Terminale: 012“ Examen 66115 Frühjahr 2016 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-2.pdf) (Chomsky-Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-2.tex)) 
- [„Nonterminale: STU, Terminale: abcde“ Examen 66115 Frühjahr 2017 T2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-2.pdf) (Kontextfreie Sprache, Chomsky-Normalform, Pumping-Lemma (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-2.tex)) 
- [„Nonterminale: STU, Terminale: ab“ Examen 66115 Herbst 2019 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-3.pdf) (Kontextfreie Sprache, Chomsky-Normalform) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-3.tex)) 
#### CYK-Algorithmus
- [„AB5“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_AB5.pdf) (CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_AB5.tex)) 
- [„CYK-Algorithmus“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_CYK-Algorithmus.pdf) (CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_CYK-Algorithmus.tex)) 
- [„Foliensatz“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_Foliensatz.pdf) (CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_Foliensatz.tex)) 
- [„Youtube-Video Karsten-Morisse“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_Youtube-Video-Karsten-Morisse.pdf) (CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/CYK-Algorithmus/Aufgabe_Youtube-Video-Karsten-Morisse.tex)) 
- [„Kontextfreie Grammatiken“ Examen 66115 Frühjahr 2013 T1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-1/Aufgabe-2.pdf) (Kontextfreie Sprache, CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-1/Aufgabe-2.tex)) 
- [„CYK mit fehlenden Zellen (T: SABC N: ab)“ Examen 66115 Herbst 2017 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-5.pdf) (CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-5.tex)) 
- [„Kontextfreie Sprachen“ Examen 66115 Herbst 2018 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-1/Aufgabe-3.pdf) (Kontextfreie Sprache, CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-1/Aufgabe-3.tex)) 
- [„Kontextfreie Sprachen“ Examen 66115 Frühjahr 2020 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-3.pdf) (Kontextfreie Sprache, CYK-Algorithmus, Ableitung (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-3.tex)) 
- [„CYK mit Wort „aaaccbbb““ Examen 66115 Frühjahr 2021 T1 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) (CYK-Algorithmus) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-2.tex)) 
### Pumping-Lemma (Kontextfreie Sprache)
- [„a^n b^n c^n“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Pumpling-Lemma/Aufgabe_Foliensatz.pdf) (Pumping-Lemma (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Pumpling-Lemma/Aufgabe_Foliensatz.tex)) 
- [„„w w“ und „a^k b^l c^m““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Pumpling-Lemma/Aufgabe_Pumping-Lemma.pdf) (Pumping-Lemma (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Pumpling-Lemma/Aufgabe_Pumping-Lemma.tex)) 
- [„„a^n b^n“ „c^2n“ und „a^n b^n^2““](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Pumpling-Lemma/Aufgabe_Vorlesungsaufgaben.pdf) (Pumping-Lemma (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/20_Typ-2_Kontextfrei/Pumpling-Lemma/Aufgabe_Vorlesungsaufgaben.tex)) 
- [„Nonterminale: STU, Terminale: abcde“ Examen 66115 Frühjahr 2017 T2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-2.pdf) (Kontextfreie Sprache, Chomsky-Normalform, Pumping-Lemma (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-2.tex)) 
- [„w w_1 w w_2“ Examen 66115 Frühjahr 2021 T2 TA1 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) (Kontextfreie Sprache, Pumping-Lemma (Kontextfreie Sprache)) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex)) 


### Kontextsensitive Sprache
- [„Kontextsensitive Grammatik“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Kontextsensitive-Grammatik.pdf) (Kontextsensitive Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Kontextsensitive-Grammatik.tex)) 
- [„Vorlesungsaufgaben kontextsensitive Grammatiken“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Vorlesungsaufgaben.pdf) (Kontextsensitive Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Vorlesungsaufgaben.tex)) 
- [„Vorlesungsaufgaben Komplement der Binärzahl“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Vorlesungsaufgaben-Komplement-Binaerzahl.pdf) (Kontextsensitive Sprache) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Vorlesungsaufgaben-Komplement-Binaerzahl.tex)) 

#### Kontextsensitive Grammatik
- [„Kontextsensitive Grammatik“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Kontextsensitive-Grammatik.pdf) (Kontextsensitive Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Kontextsensitive-Grammatik.tex)) 
- [„Vorlesungsaufgaben kontextsensitive Grammatiken“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Vorlesungsaufgaben.pdf) (Kontextsensitive Grammatik) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Kontextsensitive-Grammatik/Aufgabe_Vorlesungsaufgaben.tex)) 
#### Turing-Maschine
- [„Binärzahl dekrementieren“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Binaerzahl-dekrementieren.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Binaerzahl-dekrementieren.tex)) 
- [„Turing-Maschine Multiplikation“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Turing-Maschine-Multiplikation.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Turing-Maschine-Multiplikation.tex)) 
- [„Übergangsfunktion“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Uebergangsfunktion.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Uebergangsfunktion.tex)) 
- [„Vorlesungsaufgaben ab-Wörter umkehren 2-Band-Turingmaschine“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Vorlesungsaufgaben-Umkehren-2-Band.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Vorlesungsaufgaben-Umkehren-2-Band.tex)) 
- [„Vorlesungsaufgaben ab-Wörter umkehren“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Vorlesungsaufgaben-Umkehren.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_Vorlesungsaufgaben-Umkehren.tex)) 
- [„unäre Kodierung von n und m“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_unaere-Kodierung-n-m.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/10_Formale-Sprachen/30_Typ-1_Kontextsensitiv/Turing-Maschine/Aufgabe_unaere-Kodierung-n-m.tex)) 
- [„Turingmaschinen“ Examen 46115 Frühjahr 2013 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-1/Aufgabe-4.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-1/Aufgabe-4.tex)) 
- [„p Zeichen a und aus q Zeichen b “ Examen 66115 Herbst 2010 T2 A7](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/Thema-2/Aufgabe-7.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/Thema-2/Aufgabe-7.tex)) 
- [Examen 66115 Frühjahr 2016 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-4.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-4.tex)) 
- [„Berechen- und Entscheidbarkeit“ Examen 66115 Frühjahr 2017 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-3.pdf) (Berechenbarkeit, Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-3.tex)) 
- [Examen 66115 Frühjahr 2019 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/Thema-1/Aufgabe-4.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/Thema-1/Aufgabe-4.tex)) 
- [„Multiplikation mit 3“ Examen 66115 Herbst 2019 T2 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-1.pdf) (Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-1.tex)) 

### Berechenbarkeit
- [„GOTO-Programme“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_GOTO.pdf) (GOTO-berechenbar) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_GOTO.tex)) 
- [„LOOP-Fakultät“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_LOOP-Fakultaet.pdf) (LOOP-berechenbar) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_LOOP-Fakultaet.tex)) 
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_LOOP-Vorlesungsaufgaben.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_LOOP-Vorlesungsaufgaben.tex)) 
- [„Primitiv-rekursiv“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_Primitiv-rekursiv.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_Primitiv-rekursiv.tex)) 
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_TURING-Vorlesungsaufgaben.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_TURING-Vorlesungsaufgaben.tex)) 
- [„TURING-berechenbar“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_TURING-berechenbar.pdf) (TURING-berechenbar) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_TURING-berechenbar.tex)) 
- [„Vorlesungsaufgaben“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_WHILE-Vorlesungsaufgaben.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_WHILE-Vorlesungsaufgaben.tex)) 
- [„WHILE-berechenbar“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_WHILE-berechenbar.pdf) (WHILE-berechenbar) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/20_Berechenbarkeit/Aufgabe_WHILE-berechenbar.tex)) 
- [Examen 66112 Frühjahr 2002 T2 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/03/Thema-2/Aufgabe-5.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/03/Thema-2/Aufgabe-5.tex)) 
- [Examen 66112 Herbst 2004 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/09/Thema-2/Aufgabe-3.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/09/Thema-2/Aufgabe-3.tex)) 
- [Examen 66115 Frühjahr 2015 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-4.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-4.tex)) 
- [„Verständnis Berechenbarkeitstheorie“ Examen 66115 Frühjahr 2016 T2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-2.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-2.tex)) 
- [„Registermaschinen (RAMs)“ Examen 66115 Herbst 2016 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-2/Aufgabe-3.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-2/Aufgabe-3.tex)) 
- [„Berechen- und Entscheidbarkeit“ Examen 66115 Frühjahr 2017 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-3.pdf) (Berechenbarkeit, Turing-Maschine) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-3.tex)) 
- [„Berechenbarkeitstheorie“ Examen 66115 Frühjahr 2020 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-4.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-4.tex)) 
- [Examen 66115 Herbst 2020 T1 A1](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Aufgabe-1.pdf) (Berechenbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Aufgabe-1.tex)) 

### Entscheidbarkeit
- [Aufgabe](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/30_Entscheidbarkeit/Aufgabe_MPCP.pdf) (Entscheidbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/30_Entscheidbarkeit/Aufgabe_MPCP.tex)) 
- [„DOPP“ Examen 66115 Herbst 2013 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-1/Aufgabe-3.pdf) (Entscheidbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-1/Aufgabe-3.tex)) 
- [Examen 66115 Frühjahr 2014 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-5.pdf) (Entscheidbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-5.tex)) 
- [„Turing“ Examen 66115 Frühjahr 2017 T1 A6](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-6.pdf) (Entscheidbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-6.tex)) 
- [Examen 66115 Frühjahr 2021 T2 TA1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) (Entscheidbarkeit) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-3.tex)) 

### Komplexitätstheorie
- [„Reduktion-Turingmaschine“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/40_Komplexitaet/Aufgabe_Reduktion-Turingmaschine.pdf) (Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/40_Komplexitaet/Aufgabe_Reduktion-Turingmaschine.tex)) 
- [„\sat-\dreiSat“](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/40_Komplexitaet/Aufgabe_SAT-3SAT.pdf) (Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Module/70_THEO/40_Komplexitaet/Aufgabe_SAT-3SAT.tex)) 
- [„NP“ Examen 46115 Frühjahr 2016 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-5.pdf) (Komplexitätstheorie) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-5.tex)) 
- [„Raumausstattungsunternehmen“ Examen 46115 Frühjahr 2016 T2 A2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-2.pdf) (Komplexitätstheorie, Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-2.tex)) 
- [„VertexCover“ Examen 46115 Herbst 2016 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-1/Aufgabe-4.pdf) (Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-1/Aufgabe-4.tex)) 
- [„k-COL“ Examen 66115 Frühjahr 2016 T1 A5](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-5.pdf) (Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-5.tex)) 
- [„Verständnis“ Examen 66115 Frühjahr 2016 T2 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-3.pdf) (Komplexitätstheorie) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-3.tex)) 
- [Examen 66115 Herbst 2017 T1 A3](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-1/Aufgabe-3.pdf) (Komplexitätstheorie) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-1/Aufgabe-3.tex)) 
- [Examen 66115 Herbst 2018 T2 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-4.pdf) (Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-4.tex)) 
- [„SAT DOPPELSAT“ Examen 66115 Herbst 2019 T1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-4.pdf) (Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-4.tex)) 
- [„CLIQUE - ALMOST CLIQUE“ Examen 66115 Frühjahr 2021 T2 TA1 A4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) (Polynomialzeitreduktion) ([.tex](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-4.tex)) 

# Aufgaben geordnet nach Staatsexamen

In diesem Repository findet Ihr viele Staatsexamensaufgaben. Von fast
allen Staatsexamen liegt ein Scan der Angabe (`Scan.pdf`), sowie eine
Plain-Text-Version (`OCR.txt`) der Text-Erkennung vor.

`03` steht für Frühjahr `09` steht für Herbst

eine Aufgabe:
`Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex` bzw.
`Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf`

gescanntes komplettes Staatsexamen (Angabe):
`Staatsexamen/66116/2018/03/Scan.pdf`

OCR des oben genannten Scans:
`Staatsexamen/66116/2018/03/OCR.txt`


### 46110: Grundlagen der Informatik (nicht vertieft)

- 1987 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46110/1987/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46110/1987/09/OCR.txt) 

### 46111: Programmentwicklung / Systemprogrammierung / Datenbanksysteme (nicht vertieft)

- 1987 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1987/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1987/09/OCR.txt) 
- 1990 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1990/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1990/03/OCR.txt) 
- 1995 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1995/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1995/03/OCR.txt) 
- 1996 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1996/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1996/09/OCR.txt) 
- 1997 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1997/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1997/03/OCR.txt) 
- 1997 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1997/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1997/09/OCR.txt) 
- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1998/09/OCR.txt) 
- 1999 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1999/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1999/03/OCR.txt) 
- 1999 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1999/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46111/1999/09/OCR.txt) 

### 46112: Grundlagen der Informatik (nicht vertieft)

- 1990 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1990/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1990/03/OCR.txt) 
- 1995 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1995/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1995/03/OCR.txt) 
- 1996 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1996/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1996/09/OCR.txt) 
- 1997 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1997/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1997/03/OCR.txt) 
- 1997 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1997/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1997/09/OCR.txt) 
- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1998/09/OCR.txt) 
- 1999 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1999/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1999/03/OCR.txt) 
- 1999 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1999/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46112/1999/09/OCR.txt) 

### 46113: Theoretische Informatik (nicht vertieft)

- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/1998/09/OCR.txt) 
- 2000 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2000/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2000/03/OCR.txt) 
- 2000 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2000/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2000/09/OCR.txt) 
- 2001 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2001/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2001/03/OCR.txt) 
- 2001 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2001/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2001/09/OCR.txt) 
- 2002 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2002/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2002/03/OCR.txt) 
- 2003 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2003/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2003/03/OCR.txt) 
- 2004 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2004/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2004/09/OCR.txt) 
- 2005 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2005/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2005/09/OCR.txt) 
- 2006 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2006/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2006/03/OCR.txt) 
- 2006 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2006/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2006/09/OCR.txt) 
- 2007 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2007/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2007/03/OCR.txt) 
- 2007 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2007/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2007/09/OCR.txt) 
- 2008 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2008/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2008/03/OCR.txt) 
- 2008 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2008/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2008/09/OCR.txt) 
- 2009 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2009/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2009/03/OCR.txt) 
- 2009 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2009/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2009/09/OCR.txt) 
- 2010 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2010/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2010/03/OCR.txt) 
- 2010 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2010/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2010/09/OCR.txt) 
- 2011 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2011/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2011/03/OCR.txt) 
- 2011 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2011/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2011/09/OCR.txt) 
- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2012/03/OCR.txt) 
- 2012 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2012/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2012/09/OCR.txt) 
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2013/03/OCR.txt) 
- 2013 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2013/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2013/09/OCR.txt) 
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2014/03/OCR.txt) 
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2014/09/OCR.txt) 
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46113/2016/09/OCR.txt) 

### 46114: Algorithmen / Datenstrukturen / Programmiermethoden (nicht vertieft)

- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/1998/09/OCR.txt) 
- 2000 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2000/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2000/03/OCR.txt) 
- 2000 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2000/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2000/09/OCR.txt) 
- 2001 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2001/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2001/03/OCR.txt) 
- 2001 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2001/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2001/09/OCR.txt) 
- 2005 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2005/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2005/03/OCR.txt) 
- 2005 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2005/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2005/09/OCR.txt) 
- 2006 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2006/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2006/03/OCR.txt) 
    - Thema 2 
        - [Aufgabe 6 (Graphen, Adjazenzmatrix)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2006/03/Thema-2/Aufgabe-6.pdf)
- 2006 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2006/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2006/09/OCR.txt) 
- 2007 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2007/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2007/03/OCR.txt) 
- 2007 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2007/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2007/09/OCR.txt) 
- 2008 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/03/OCR.txt) 
- 2008 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 2 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/Thema-1/Aufgabe-2.pdf) 
    - Thema 2 
        - [Aufgabe 3 (Teile-und-Herrsche (Divide-and-Conquer))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2008/09/Thema-2/Aufgabe-3.pdf)
- 2009 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2009/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2009/03/OCR.txt) 
- 2009 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2009/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46114/2009/09/OCR.txt) 

### 46115: Theoretische Informatik / Algorithmen / Datenstrukturen (nicht vertieft)

- 2010 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 5 (Binärbaum, AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/Thema-1/Aufgabe-5.pdf) 
    - Thema 2 
        - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2010/03/Thema-2/Aufgabe-1.pdf)
- 2011 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2011/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2011/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 3 (B-Baum, AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2011/03/Thema-1/Aufgabe-3.pdf)
- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2012/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 6 (Algorithmus von Dijkstra, Adjazenzliste, Adjazenzmatrix, Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2012/03/Thema-1/Aufgabe-6.pdf)
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 4 (Turing-Maschine)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-1/Aufgabe-4.pdf) 
    - Thema 2 
        - [Aufgabe 4 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-4.pdf) 
        - [Aufgabe 5 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-5.pdf) 
        - [Aufgabe 6 (Mergesort, Heapsort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2013/03/Thema-2/Aufgabe-6.pdf)
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 7 (Halde (Heap), Binärbaum, AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-7.pdf) 
        - [Aufgabe 8 (Minimaler Spannbaum, Algorithmus von Kruskal)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-1/Aufgabe-8.pdf) 
    - Thema 2 
        - [Aufgabe 3 (Binärbaum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 4 (Rekursion, Implementierung in Java, Iterative Realisation)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/03/Thema-2/Aufgabe-4.pdf)
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 8 (Tiefensuche, Stapel (Stack))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2014/09/Thema-1/Aufgabe-8.pdf)
- 2015 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/03/Thema-1/Aufgabe-1.pdf)
- 2015 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 1 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2015/09/Thema-2/Aufgabe-1.pdf)
- 2016 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 5 (Komplexitätstheorie)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-5.pdf) 
        - [Aufgabe 8 (Sortieralgorithmen, Bubblesort, Quicksort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-1/Aufgabe-8.pdf) 
    - Thema 2 
        - [Aufgabe 2 (Komplexitätstheorie, Polynomialzeitreduktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-2.pdf) 
        - [Aufgabe 3 (Algorithmische Komplexität (O-Notation), Lineare Suche)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/03/Thema-2/Aufgabe-3.pdf)
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Potenzmengenalgorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-1/Aufgabe-1.pdf) 
        - [Aufgabe 4 (Polynomialzeitreduktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-1/Aufgabe-4.pdf) 
    - Thema 2 
        - [Aufgabe 2 (Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-2/Aufgabe-2.pdf) 
        - [Aufgabe 4 (Dynamische Programmierung)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2016/09/Thema-2/Aufgabe-4.pdf)
- 2017 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/03/OCR.txt) 
- 2017 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 3 (Dynamische Programmierung)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 6 (Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-6.pdf) 
        - [Aufgabe 7 (Insertionsort, Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2017/09/Thema-2/Aufgabe-7.pdf)
- 2018 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 6 (Mergesort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/Thema-1/Aufgabe-6.pdf) 
    - Thema 2 
        - [Aufgabe 4 (Minimaler Spannbaum, Algorithmus von Prim)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/03/Thema-2/Aufgabe-4.pdf)
- 2018 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 5 (Backtracking)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2018/09/Thema-2/Aufgabe-5.pdf)
- 2019 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/03/OCR.txt) 
- 2019 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-1/Aufgabe-1.pdf) 
        - [Aufgabe 4 (Selectionsort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-1/Aufgabe-4.pdf) 
        - [Aufgabe 6 (Stapel (Stack))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-1/Aufgabe-6.pdf) 
    - Thema 2 
        - [Aufgabe 1 (Potenzmengenalgorithmus, Nichtdeterministisch endlicher Automat (NEA), Deterministisch endlicher Automat (DEA))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-1.pdf) 
        - [Aufgabe 2 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-2.pdf) 
        - [Aufgabe 7 (Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-7.pdf) 
        - [Aufgabe 8 (Algorithmus von Prim)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2019/09/Thema-2/Aufgabe-8.pdf)
- 2020 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Reguläre Sprache, Reguläre Ausdrücke)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-1/Aufgabe-1.pdf) 
    - Thema 2 
        - [Aufgabe 6 (Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-2/Aufgabe-6.pdf) 
        - [Aufgabe 7 (Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/03/Thema-2/Aufgabe-7.pdf)
- 2020 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2020/09/OCR.txt) 
- 2021 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2021/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46115/2021/03/OCR.txt) 

### 46116: Softwaretechnologie / Datenbanksysteme (nicht vertieft)

- 2010 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2010/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2010/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Warteschlange (Queue), Klassendiagramm, Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2010/03/Thema-1/Aufgabe-1.pdf)
- 2011 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2011/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2011/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Einfach-verkettete Liste, Objektdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2011/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf)
- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 3 (SQL)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
    - Thema 2 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Klassendiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2012/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf)
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 2 (Agile Methoden)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Entity-Relation-Modell, Relationenmodell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Relationale Algebra, SQL, Tupelkalkül)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Klassendiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2013/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf)
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Vollständige Induktion, Terminierungsfunktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Relationale Algebra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (SQL, SQL mit Übungsdatenbank, GROUP BY, HAVING)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf)
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (EXtreme Programming, V-Modell, SCRUM, Prototyping, Funktionale Anforderungen, Nicht-funktionale Anforderungen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Prozessmodelle, Wasserfallmodell, V-Modell, Iterative Prozessmodelle)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Objektdiagramm, Zustandsdiagramm zeichnen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2014/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf)
- 2015 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 3 (CPM-Netzplantechnik, Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Relationale Algebra, SQL, GROUP BY, HAVING)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 3 (Entity-Relation-Modell, Relationenmodell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf)
- 2015 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 3 (Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Datenunabhängigkeit, Superschlüssel, Referentielle Integrität)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 4](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 2 (Kontrollflussgraph, C1-Test Zweigüberdeckung (Branch Coverage), C2b Schleife-Inneres-Pfadüberdeckung (Boundary-Interior Path Coverage), Zyklomatische Komplexität nach Mc-Cabe, C2a Vollständige Pfadüberdeckung (Full Path Coverage), Datenfluss-annotierter Kontrollflussgraph)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (wp-Kalkül)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf)
- 2016 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 5 (Transaktionen, ACID, Serialisierbarkeitsgraph, Zwei-Phasen-Sperrprotokoll)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 2 (Petri-Netz, Erreichbarkeitsgraph)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf)
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 2 (Sequenzdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 4 (Vollständige Induktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf)
- 2017 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 2 (Anwendungsfalldiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (UML-Diagramme, Klassendiagramm, Anwendungsfalldiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 5 (Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 4 (Physische Datenorganisation)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf)
- 2017 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 4 (Bubblesort, Black-Box-Testing, Anforderungsüberdeckung, Äquivalenzklassenzerlegung, Grenzwertanalyse, Kontrollflussgraph, C2a Vollständige Pfadüberdeckung (Full Path Coverage))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 3 (Entwurfsmuster, Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Beobachter (Observer), Kompositum (Composite))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 4 (SQL, SQL mit Übungsdatenbank, GROUP BY)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf)
- 2018 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 3 (Klassendiagramm, Implementierung in Java, Feld (Array), main-Methode)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf)
- 2018 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 3 (Zustandsdiagramm zeichnen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 4 (SQL, SQL mit Übungsdatenbank, CREATE TABLE, HAVING, EXCEPT, Top-N-Query, WITH, DELETE)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 4 (SQL, CREATE TABLE)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
    - Thema 2 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Relationale Algebra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (SQL, SQL mit Übungsdatenbank, CREATE TABLE, INSERT, ALTER TABLE, UPDATE, DELETE, VIEW, GROUP BY, DROP TABLE)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 5 (Entity-Relation-Modell, Relationenmodell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2018/09/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf)
- 2019 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/03/OCR.txt) 
- 2019 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 4 (Relationale Algebra, Tupelkalkül)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2019/09/Thema-2/Aufgabe-4.pdf)
- 2020 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2020/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2020/03/OCR.txt) 
- 2020 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2020/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2020/09/OCR.txt) 
- 2021 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2021/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46116/2021/03/OCR.txt) 

### 46118: Fachdidaktik (Mittelschulen)

- 2017 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46118/2017/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46118/2017/03/OCR.txt) 

### 46119: Fachdidaktik (Realschulen)

- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/1998/09/OCR.txt) 
- 1999 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/1999/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/1999/03/OCR.txt) 
- 2000 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2000/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2000/03/OCR.txt) 
- 2000 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2000/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2000/09/OCR.txt) 
- 2001 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2001/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2001/03/OCR.txt) 
- 2001 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2001/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2001/09/OCR.txt) 
- 2003 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2003/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2003/09/OCR.txt) 
- 2005 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2005/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2005/03/OCR.txt) 
- 2006 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2006/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2006/03/OCR.txt) 
- 2006 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2006/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2006/09/OCR.txt) 
- 2007 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2007/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2007/03/OCR.txt) 
- 2007 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2007/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2007/09/OCR.txt) 
- 2008 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2008/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2008/03/OCR.txt) 
- 2008 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2008/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2008/09/OCR.txt) 
- 2009 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2009/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2009/03/OCR.txt) 
- 2009 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2009/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2009/09/OCR.txt) 
- 2010 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2010/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2010/03/OCR.txt) 
- 2010 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2010/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2010/09/OCR.txt) 
- 2011 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2011/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2011/03/OCR.txt) 
- 2011 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2011/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2011/09/OCR.txt) 
- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2012/03/OCR.txt) 
- 2012 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2012/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2012/09/OCR.txt) 
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2013/03/OCR.txt) 
- 2013 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2013/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2013/09/OCR.txt) 
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2014/03/OCR.txt) 
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2014/09/OCR.txt) 
- 2015 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2015/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2015/03/OCR.txt) 
- 2015 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2015/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2015/09/OCR.txt) 
- 2016 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2016/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2016/03/OCR.txt) 
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2016/09/OCR.txt) 
- 2017 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2017/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2017/03/OCR.txt) 
- 2017 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2017/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2017/09/OCR.txt) 
- 2018 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2018/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2018/09/OCR.txt) 
- 2019 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2019/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2019/03/OCR.txt) 
- 2019 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2019/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2019/09/OCR.txt) 
- 2020 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2020/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2020/03/OCR.txt) 
- 2020 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2020/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46119/2020/09/OCR.txt) 

### 46121: Fachdidaktik (berufliche Schulen)

- 1995 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1995/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1995/03/OCR.txt) 
- 1996 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1996/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1996/09/OCR.txt) 
- 1997 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1997/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1997/03/OCR.txt) 
- 1997 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1997/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1997/09/OCR.txt) 
- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1998/09/OCR.txt) 
- 1999 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1999/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/1999/09/OCR.txt) 
- 2000 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2000/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2000/09/OCR.txt) 
- 2001 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2001/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2001/03/OCR.txt) 
- 2001 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2001/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2001/09/OCR.txt) 
- 2002 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2002/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2002/03/OCR.txt) 
- 2003 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2003/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2003/09/OCR.txt) 
- 2005 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2005/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2005/03/OCR.txt) 
- 2007 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2007/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2007/09/OCR.txt) 
- 2008 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2008/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2008/03/OCR.txt) 
- 2009 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2009/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2009/09/OCR.txt) 
- 2010 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2010/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2010/09/OCR.txt) 
- 2011 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2011/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2011/03/OCR.txt) 
- 2017 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2017/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2017/09/OCR.txt) 
- 2018 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2018/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/46121/2018/03/OCR.txt) 

### 66110: Automatentheorie, Algorithmische Sprache (vertieft)

- 1989 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1989/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1989/09/OCR.txt) 
- 1990 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1990/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1990/03/OCR.txt) 
- 1990 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1990/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1990/09/OCR.txt) 
- 1991 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1991/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1991/09/OCR.txt) 
- 1993 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1993/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1993/03/OCR.txt) 
- 1993 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1993/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1993/09/OCR.txt) 
- 1994 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1994/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1994/03/OCR.txt) 
- 1994 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1994/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1994/09/OCR.txt) 
- 1995 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1995/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1995/03/OCR.txt) 
- 1996 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1996/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1996/03/OCR.txt) 
- 1996 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1996/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1996/09/OCR.txt) 
- 1997 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1997/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1997/03/OCR.txt) 
- 1997 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1997/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66110/1997/09/OCR.txt) 

### 66111: Betriebssysteme / Datenbanksysteme / Rechnerarchitektur (vertieft)

- 1989 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1989/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1989/09/OCR.txt) 
- 1990 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1990/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1990/03/OCR.txt) 
- 1990 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1990/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1990/09/OCR.txt) 
- 1991 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1991/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1991/09/OCR.txt) 
- 1993 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1993/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1993/03/OCR.txt) 
- 1993 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1993/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1993/09/OCR.txt) 
- 1994 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1994/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1994/03/OCR.txt) 
    - [Aufgabe 7 (Synthese-Algorithmus, Dritte Normalform)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1994/03/Aufgabe-7.pdf)
- 1994 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1994/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1994/09/OCR.txt) 
- 1995 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1995/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1995/03/OCR.txt) 
- 1996 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/OCR.txt) 
    - [Aufgabe 2 (Entity-Relation-Modell, Verfeinertes Relationenmodell, SQL)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/03/Aufgabe-2.pdf)
- 1996 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/OCR.txt) 
    - [Aufgabe 4 (Dritte Normalform, Relationale Algebra, SQL, GROUP BY)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1996/09/Aufgabe-4.pdf)
- 1997 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/03/OCR.txt) 
- 1997 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/09/OCR.txt) 
    - [Aufgabe 3 (Entity-Relation-Modell, Relationenmodell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66111/1997/09/Aufgabe-3.pdf)

### 66112: Automatentheorie / Komplexität / Algorithmen (vertieft)

- 1998 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1998/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1998/03/OCR.txt) 
- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1998/09/OCR.txt) 
- 1999 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1999/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1999/03/OCR.txt) 
- 1999 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1999/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/1999/09/OCR.txt) 
- 2000 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2000/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2000/03/OCR.txt) 
- 2000 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2000/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2000/09/OCR.txt) 
- 2001 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2001/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2001/03/OCR.txt) 
- 2001 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2001/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2001/09/OCR.txt) 
- 2002 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/03/OCR.txt) 
    - Thema 2 
        - [Aufgabe 5 (Berechenbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/03/Thema-2/Aufgabe-5.pdf)
- 2002 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 4 (Vererbung, Abstrakte Klasse, Implementierung in Java, Klassendiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2002/09/Thema-1/Aufgabe-4.pdf)
- 2003 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/03/OCR.txt) 
- 2003 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 5 (Vollständige Induktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/Thema-2/Aufgabe-5.pdf) 
        - [Aufgabe 8 (Binärbaum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2003/09/Thema-2/Aufgabe-8.pdf)
- 2004 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 5 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/03/Thema-1/Aufgabe-5.pdf)
- 2004 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 3 (Berechenbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2004/09/Thema-2/Aufgabe-3.pdf)
- 2005 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Doppelt-verkettete Liste, Klassendiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-1/Aufgabe-1.pdf) 
    - Thema 2 
        - [Aufgabe 8 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/03/Thema-2/Aufgabe-8.pdf)
- 2005 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 6 (B-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2005/09/Thema-2/Aufgabe-6.pdf)
- 2006 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/03/OCR.txt) 
- 2006 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 5 (Vererbung, Klassendiagramm, Objektdiagramm, Sequenzdiagramm, Kommunikationsdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66112/2006/09/Thema-1/Aufgabe-5.pdf)

### 66113: Rechnerarchitektur / Datenbanken / Betriebssysteme (vertieft)

- 1998 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1998/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1998/03/OCR.txt) 
- 1998 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1998/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1998/09/OCR.txt) 
- 1999 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1999/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1999/03/OCR.txt) 
- 1999 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1999/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/1999/09/OCR.txt) 
- 2000 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2000/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2000/03/OCR.txt) 
- 2000 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2000/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2000/09/OCR.txt) 
- 2001 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2001/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2001/03/OCR.txt) 
- 2001 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2001/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2001/09/OCR.txt) 
- 2002 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2002/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2002/03/OCR.txt) 
- 2002 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2002/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2002/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 2 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2002/09/Thema-2/Aufgabe-2.pdf)
- 2003 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 5 (SQL, SQL mit Übungsdatenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-1/Aufgabe-5.pdf) 
    - Thema 2 
        - [Aufgabe 3 (SQL)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/03/Thema-2/Aufgabe-3.pdf)
- 2003 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 1 (Normalformen, Synthese-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2003/09/Thema-2/Aufgabe-1.pdf)
- 2004 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2004/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2004/03/OCR.txt) 
- 2004 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2004/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2004/09/OCR.txt) 
- 2005 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2005/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2005/03/OCR.txt) 
- 2005 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2005/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2005/09/OCR.txt) 
- 2006 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2006/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2006/03/OCR.txt) 
- 2006 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2006/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66113/2006/09/OCR.txt) 

### 66114: Datenbank- und Betriebssysteme (vertieft)

- 2006 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2006/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2006/03/OCR.txt) 
- 2006 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2006/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2006/09/OCR.txt) 
- 2007 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2007/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2007/03/OCR.txt) 
- 2007 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2007/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2007/09/OCR.txt) 
- 2008 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2008/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2008/03/OCR.txt) 
- 2008 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2008/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2008/09/OCR.txt) 
- 2009 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2009/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2009/03/OCR.txt) 
- 2009 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2009/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2009/09/OCR.txt) 
- 2010 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2010/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2010/03/OCR.txt) 
- 2010 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2010/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2010/09/OCR.txt) 
- 2011 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2011/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2011/03/OCR.txt) 
- 2011 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2011/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2011/09/OCR.txt) 
- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2012/03/OCR.txt) 
- 2012 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2012/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2012/09/OCR.txt) 
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2013/03/OCR.txt) 
- 2013 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2013/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2013/09/OCR.txt) 
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2014/03/OCR.txt) 
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2014/09/OCR.txt) 
- 2015 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2015/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2015/09/OCR.txt) 
- 2016 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/03/OCR.txt) 
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 5 (Physische Datenorganisation, Tupel-Identifikator, B-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66114/2016/09/Thema-2/Aufgabe-5.pdf)

### 66115: Theoretische Informatik / Algorithmen (vertieft)

- 2006 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2006/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2006/03/OCR.txt) 
- 2006 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2006/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2006/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 4 (AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2006/09/Thema-1/Aufgabe-4.pdf)
- 2007 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 7 (Warteschlange (Queue), Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/Thema-1/Aufgabe-7.pdf) 
    - Thema 2 
        - [Aufgabe 1 (Greedy-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/03/Thema-2/Aufgabe-1.pdf)
- 2007 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 1 (Reguläre Sprache, Reguläre Grammatik, Reguläre Ausdrücke, Potenzmengenalgorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2007/09/Thema-2/Aufgabe-1.pdf)
- 2008 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2008/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2008/03/OCR.txt) 
- 2008 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2008/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2008/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 4 (Theoretische Informatik)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2008/09/Thema-2/Aufgabe-4.pdf)
- 2009 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2009/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2009/03/OCR.txt) 
- 2009 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2009/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2009/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 6 (Greedy-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2009/09/Thema-2/Aufgabe-6.pdf)
- 2010 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/03/OCR.txt) 
- 2010 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 3 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 7 (Turing-Maschine)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2010/09/Thema-2/Aufgabe-7.pdf)
- 2011 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Master-Theorem)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/03/Thema-1/Aufgabe-1.pdf)
- 2011 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2011/09/OCR.txt) 
- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 3 (Kontextfreie Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Thema-1/Aufgabe-3.pdf) 
        - [Aufgabe 4 (Chomsky-Normalform)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Thema-1/Aufgabe-4.pdf) 
        - [Aufgabe 7 (Breitensuche)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/03/Thema-1/Aufgabe-7.pdf)
- 2012 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Potenzmengenalgorithmus, Minimierungsalgorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-1.pdf) 
        - [Aufgabe 4 (Teile-und-Herrsche (Divide-and-Conquer))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-1/Aufgabe-4.pdf) 
    - Thema 2 
        - [Aufgabe 6 (Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-6.pdf) 
        - [Aufgabe 7 (Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-7.pdf) 
        - [Aufgabe 8 (AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2012/09/Thema-2/Aufgabe-8.pdf)
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 2 (Kontextfreie Sprache, CYK-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-1/Aufgabe-2.pdf) 
        - [Aufgabe 6 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-1/Aufgabe-6.pdf) 
    - Thema 2 
        - [Aufgabe 5 (Graphen, Breitensuche)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/03/Thema-2/Aufgabe-5.pdf)
- 2013 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 3 (Entscheidbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-1/Aufgabe-3.pdf) 
    - Thema 2 
        - [Aufgabe 3 (Minimierungsalgorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 7 (Binärbaum, Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-7.pdf) 
        - [Aufgabe 8 (AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-8.pdf) 
        - [Aufgabe 9 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2013/09/Thema-2/Aufgabe-9.pdf)
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Rekursion, Vollständige Induktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-1.pdf) 
        - [Aufgabe 3 (AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-3.pdf) 
        - [Aufgabe 5 (Entscheidbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/03/Thema-1/Aufgabe-5.pdf)
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/OCR.txt) 
    - Thema 2 
        - [Aufgabe 5 (Stapel (Stack), Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-5.pdf) 
        - [Aufgabe 6 (Selectionsort, Implementierung in Java, Algorithmische Komplexität (O-Notation), Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2014/09/Thema-2/Aufgabe-6.pdf)
- 2015 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Reguläre Sprache, Pumping-Lemma (Reguläre Sprache), Potenzmengenalgorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-1/Aufgabe-1.pdf) 
    - Thema 2 
        - [Aufgabe 4 (Berechenbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-4.pdf) 
        - [Aufgabe 5 (Stapel (Stack), Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-5.pdf) 
        - [Aufgabe 7 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/03/Thema-2/Aufgabe-7.pdf)
- 2015 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2015/09/OCR.txt) 
- 2016 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-1.pdf) 
        - [Aufgabe 2 (Chomsky-Normalform)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-2.pdf) 
        - [Aufgabe 4 (Turing-Maschine)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-4.pdf) 
        - [Aufgabe 5 (Polynomialzeitreduktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-5.pdf) 
        - [Aufgabe 6 (Quicksort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-1/Aufgabe-6.pdf) 
    - Thema 2 
        - [Aufgabe 1 (Formale Sprachen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-1.pdf) 
        - [Aufgabe 2 (Berechenbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-2.pdf) 
        - [Aufgabe 3 (Komplexitätstheorie)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 4 (Streutabellen (Hashing), Separate Verkettung, Offene Adressierung)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-4.pdf) 
        - [Aufgabe 6 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-6.pdf) 
        - [Aufgabe 7 (Bäume, Rot-Schwarz-Baum, AVL-Baum, Halde (Heap), B-Baum, R-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/03/Thema-2/Aufgabe-7.pdf)
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-1/Aufgabe-1.pdf) 
        - [Aufgabe 2 (Formale Sprachen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-1/Aufgabe-2.pdf) 
        - [Aufgabe 4 (Teile-und-Herrsche (Divide-and-Conquer))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-1/Aufgabe-4.pdf) 
    - Thema 2 
        - [Aufgabe 3 (Berechenbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 7 (Quicksort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2016/09/Thema-2/Aufgabe-7.pdf)
- 2017 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Algorithmus von Dijkstra, Algorithmus von Kruskal)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-1.pdf) 
        - [Aufgabe 2 (Sortieralgorithmen, Bucketsort, Radixsort, Mergesort, Quicksort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-2.pdf) 
        - [Aufgabe 3 (Dynamische Programmierung)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-3.pdf) 
        - [Aufgabe 4 (Vollständige Induktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-4.pdf) 
        - [Aufgabe 5 (Formale Sprachen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-5.pdf) 
        - [Aufgabe 6 (Entscheidbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-1/Aufgabe-6.pdf) 
    - Thema 2 
        - [Aufgabe 2 (Kontextfreie Sprache, Chomsky-Normalform, Pumping-Lemma (Kontextfreie Sprache))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-2.pdf) 
        - [Aufgabe 3 (Berechenbarkeit, Turing-Maschine)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/03/Thema-2/Aufgabe-3.pdf)
- 2017 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 2 (Kontextfreie Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-1/Aufgabe-2.pdf) 
        - [Aufgabe 3 (Komplexitätstheorie)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-1/Aufgabe-3.pdf) 
        - [Aufgabe 8 (Greedy-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-1/Aufgabe-8.pdf) 
    - Thema 2 
        - [Aufgabe 5 (CYK-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-5.pdf) 
        - [Aufgabe 8 (AVL-Baum, Halde (Heap), Binärbaum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2017/09/Thema-2/Aufgabe-8.pdf)
- 2018 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Formale Sprachen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-1/Aufgabe-1.pdf) 
    - Thema 2 
        - [Aufgabe 10 (Algorithmus von Prim)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-10.pdf) 
        - [Aufgabe 11 (Graphen, Tiefensuche, Breitensuche)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-11.pdf) 
        - [Aufgabe 3 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 6 (Master-Theorem)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-6.pdf) 
        - [Aufgabe 7 (Quicksort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-7.pdf) 
        - [Aufgabe 8 (AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-8.pdf) 
        - [Aufgabe 9 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/03/Thema-2/Aufgabe-9.pdf)
- 2018 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 3 (Kontextfreie Sprache, CYK-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-1/Aufgabe-3.pdf) 
        - [Aufgabe 5 (AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-1/Aufgabe-5.pdf) 
    - Thema 2 
        - [Aufgabe 4 (Polynomialzeitreduktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-4.pdf) 
        - [Aufgabe 6 (Backtracking)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-6.pdf) 
        - [Aufgabe 8 (Sortieralgorithmen, Bubblesort, Selectionsort, Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2018/09/Thema-2/Aufgabe-8.pdf)
- 2019 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 4 (Turing-Maschine)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/Thema-1/Aufgabe-4.pdf) 
        - [Aufgabe 6 (Greedy-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/03/Thema-1/Aufgabe-6.pdf)
- 2019 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 3 (Kontextfreie Sprache, Chomsky-Normalform)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-3.pdf) 
        - [Aufgabe 4 (Polynomialzeitreduktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-4.pdf) 
        - [Aufgabe 5 (Quicksort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-5.pdf) 
        - [Aufgabe 6 (Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-6.pdf) 
        - [Aufgabe 7 (Bäume)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-1/Aufgabe-7.pdf) 
    - Thema 2 
        - [Aufgabe 1 (Turing-Maschine)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-1.pdf) 
        - [Aufgabe 6 (Master-Theorem)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-6.pdf) 
        - [Aufgabe 7 (AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-7.pdf) 
        - [Aufgabe 8 (Minimaler Spannbaum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-8.pdf) 
        - [Aufgabe 9 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2019/09/Thema-2/Aufgabe-9.pdf)
- 2020 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 2 (Reguläre Sprache, Potenzmengenalgorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-2.pdf) 
        - [Aufgabe 3 (Kontextfreie Sprache, CYK-Algorithmus, Ableitung (Kontextfreie Sprache))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-1/Aufgabe-3.pdf) 
    - Thema 2 
        - [Aufgabe 10 (Binärbaum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-10.pdf) 
        - [Aufgabe 3 (Kontextfreie Sprache, Kontextfreie Grammatik)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-3.pdf) 
        - [Aufgabe 4 (Berechenbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-4.pdf) 
        - [Aufgabe 8 (Algorithmische Komplexität (O-Notation))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/03/Thema-2/Aufgabe-8.pdf)
- 2020 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/OCR.txt) 
    - Thema 1 
        - [Aufgabe 1 (Berechenbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Aufgabe-1.pdf) 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Theoretische Informatik, Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Kontextfreie Sprache, Pumping-Lemma (Reguläre Sprache))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 5 (Theoretische Informatik)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Algorithmen und Datenstrukturen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Binärbaum, AVL-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Algorithmus von Dijkstra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Algorithmische Komplexität (O-Notation), Master-Theorem)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-1/Teilaufgabe-2/Aufgabe-5.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Kontextfreie Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 3 (Halde (Heap))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Dynamische Programmierung)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Binäre Suche)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf)
- 2021 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (CYK-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Sortieralgorithmen, Insertionsort, Quicksort, Mergesort)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Lineare Suche)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Breitensuche)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Graphen, Algorithmus von Dijkstra, Algorithmus von Prim)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Reguläre Sprache)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Kontextfreie Sprache, Pumping-Lemma (Kontextfreie Sprache))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Entscheidbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Polynomialzeitreduktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Doppelt-verkettete Liste)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Binärbaum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 5 (Streutabellen (Hashing))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66115/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf)

### 66116: Datenbanksysteme / Softwaretechnologie (vertieft)

- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (SQL, SQL mit Übungsdatenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf)
- 2012 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Objektorientierung, Implementierung in Java, Einfach-verkettete Liste)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (CPM-Netzplantechnik, Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2012/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf)
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/03/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 3 (B-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf)
- 2013 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 2 
            - [Aufgabe 3 (Testen, Model Checking, Refactoring, EXtreme Programming, White-Box-Testing, Black-Box-Testing, Funktionale Anforderungen, Nicht-funktionale Anforderungen, Kontinuierliche Integration (Continuous Integration), Unit-Test, wp-Kalkül)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2013/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf)
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/03/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Abstrakte Klasse, Interface, Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf)
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/09/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 2 
            - [Aufgabe 2](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Kontrollflussorientieres Testen, Kontrollflussgraph, C0-Test Anweisungsüberdeckung (Statement Coverage), C1-Test Zweigüberdeckung (Branch Coverage))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2014/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf)
- 2015 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (SQL, SQL mit Übungsdatenbank, GROUP BY, MAX, OR, INSERT, UPDATE)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Zustandsdiagramm zeichnen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Vererbung, Implementierung in Java, Interface, Abstrakte Klasse)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 3 (B-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Klassendiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Petri-Netz)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf)
- 2015 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (SQL, SQL mit Übungsdatenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 3 (B-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 3 (wp-Kalkül, Invariante, Terminierungsfunktion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2015/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf)
- 2016 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Entity-Relation-Modell, Relationenmodell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Entity-Relation-Modell, SQL mit Übungsdatenbank, Relationale Algebra, SQL, VIEW, WITH, UNION)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Klassendiagramm, Abstrakte Fabrik (Abstract Factory), Wiederholer (Iterator), Adapter, Kompositum (Composite), Klassenadapter, Objektadapter, Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
    - Thema 2 
        - Teilaufgabe 2 
            - [Aufgabe 4 (Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf)
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 4 (SQL, SQL mit Übungsdatenbank, VIEW, WITH, DELETE)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) 
            - [Aufgabe 5 (B-Baum, Tupel-Identifikator)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Pflichtenheft, Softwaremaße, Evolutionäre Softwaremodelle, Versionsverwaltungssoftware, Funktionale Anforderungen, Nicht-funktionale Anforderungen, Kontinuierliche Integration (Continuous Integration))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (UML-Diagramme, Anwendungsfalldiagramm, Klassendiagramm, Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Datenflussorientiertes Testen, Bubblesort, Datenfluss-annotierter Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, C1-Test Zweigüberdeckung (Branch Coverage), all uses)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 2 (SQL mit Übungsdatenbank, SQL, CREATE TABLE, CONSTRAINT, ALTER TABLE, GROUP BY, HAVING)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Software Engineering, Agile Methoden, Spiralmodell, Nicht-funktionale Anforderungen, Entwurfsmuster, Schichtenarchitektur, Blackboard-Muster, Einbringen von Abhängigkeiten (Dependency Injection), Sequenzdiagramm, Zustandsdiagramm Wissen, Komponentendiagramm, Modell-Präsentation-Steuerung (Model-View-Controller), Einzelstück (Singleton), Kommando (Command), Validation, Verifikation)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2016/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf)
- 2017 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 2 (B-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 5 (Synthese-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-1/Aufgabe-5.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Kontrollflussgraph, Zyklomatische Komplexität nach Mc-Cabe, Datenfluss-annotierter Kontrollflussgraph)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 4 (wp-Kalkül, Invariante, Totale Korrektheit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf)
- 2017 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 5 (SQL, CREATE TABLE, DELETE, INSERT, DROP TABLE)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) 
            - [Aufgabe 6 (SQL, SQL mit Übungsdatenbank, Top-N-Query)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-1/Aufgabe-6.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 4 (Binäre Suche, Design by Contract, Kontrollflussgraph, Vollständige Anweisungsüberdeckung)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
    - Thema 2 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Aktivitätsdiagramm, Klassendiagramm, Objektdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2017/09/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf)
- 2018 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/OCR.txt) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 2 (Entity-Relation-Modell, Relationenmodell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 4 (Tupelkalkül)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) 
            - [Aufgabe 6 (Synthese-Algorithmus, Dritte Normalform)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-1/Aufgabe-6.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Vererbung, Interface, Abstrakte Klasse, Klassendiagramm, Objektdiagramm, Sequenzdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Beobachter (Observer), Klassendiagramm, Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf)
- 2018 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 2 (Zustand (State), Klassendiagramm zeichnen, Zustandsdiagramm zeichnen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 4 (SQL, SQL mit Übungsdatenbank, UPDATE, DESC, AVG, GROUP BY, HAVING, EXCEPT)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Gantt-Diagramm, CPM-Netzplantechnik)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2018/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf)
- 2019 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/OCR.txt) 
    - Thema 1 
        - [Aufgabe 2 (SQL, SQL mit Übungsdatenbank, Relationale Algebra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-2.pdf) 
        - [Aufgabe 3 (Relationale Entwurfstheorie, Synthese-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Aufgabe-3.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Kompositum (Composite))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Klassendiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Testen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Aktivitätsdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-1/Teilaufgabe-2/Aufgabe-5.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Datenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 3 (Relationale Algebra, RelaX - relational algebra calculator)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 6 (Normalformen, Schlüsselkandidat, Synthese-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-1/Aufgabe-6.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Testen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Sequenzdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Anwendungsfalldiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf)
- 2019 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 4 (Zustand (State), Zustandsdiagramm Wissen, Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 2 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (SQL, SQL mit Übungsdatenbank, Korrelierte Anfrage, DELETE, DROP COLUMN, ALTER TABLE, BETWEEN, CHECK, REFERENCES, NOT NULL)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Entwurfsmuster, Kompositum (Composite), Klassendiagramm, Implementierung in Java, Rekursion)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 6 (Datenbank-Übersicht, Natural-Join, Equi-Join, Theta-Join, UNION, INTERSECT, EXCEPT)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-6.pdf) 
            - [Aufgabe 7 (SQL, SQL mit Übungsdatenbank, EXCEPT, Top-N-Query, ALTER TABLE, TRIGGER)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2019/09/Thema-2/Teilaufgabe-2/Aufgabe-7.pdf)
- 2020 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Zustandsdiagramm zeichnen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Funktionale Abhängigkeiten)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Relationale Algebra, Tupelkalkül)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Synthese-Algorithmus)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Schlüssel)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-5.pdf) 
            - [Aufgabe 6 (B-Baum)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-6.pdf) 
            - [Aufgabe 7 (SQL, SQL mit Übungsdatenbank, Top-N-Query)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-7.pdf) 
            - [Aufgabe 8 (SQL, SQL mit Übungsdatenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-1/Teilaufgabe-2/Aufgabe-8.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 4 (Sequenzdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-1/Aufgabe-5.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (SQL, SQL mit Übungsdatenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Transaktionen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf)
- 2020 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Verifikation, wp-Kalkül)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Projektplanung, CPM-Netzplantechnik, Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Entwurfsmuster)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 4 (White-Box-Testing, Kontrollflussgraph)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Projektplanung, SCRUM)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Prozessmodelle, Wasserfallmodell, Kontinuierliche Integration (Continuous Integration), EXtreme Programming, Softwaremaße, SCRUM)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Gantt-Diagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Anwendungsfalldiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Objektorientierung, Sequenzdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Entwurfsmuster)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-5.pdf) 
            - [Aufgabe 6 (Testen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-1/Aufgabe-6.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 3 (Relationale Algebra, SQL mit Übungsdatenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2020/09/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf)
- 2021 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/OCR.txt) 
    - Thema 1 
        - Teilaufgabe 1 
            - [Aufgabe 1 (Sichtbarkeit)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 10 (Client-Server-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-10.pdf) 
            - [Aufgabe 11 (Client-Server-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-11.pdf) 
            - [Aufgabe 12 (Peer-to-Peer-Architektur)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-12.pdf) 
            - [Aufgabe 2 (Objektorientierung)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 3 (UML-Diagramme)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Implementierung in Java)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Einfach-verkettete Liste)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-5.pdf) 
            - [Aufgabe 6 (Erbauer (Builder))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-6.pdf) 
            - [Aufgabe 7 (Einbringen von Abhängigkeiten (Dependency Injection))](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-7.pdf) 
            - [Aufgabe 8 (Client-Server-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-8.pdf) 
            - [Aufgabe 9 (Client-Server-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-1/Aufgabe-9.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (Datenbank)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Relationale Algebra)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Transaktionen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-5.pdf) 
            - [Aufgabe 6 (SQL, SQL mit Übungsdatenbank, Top-N-Query)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Teilaufgabe-2/Aufgabe-6.pdf) 
    - Thema 2 
        - Teilaufgabe 1 
            - [Aufgabe 1 (CPM-Netzplantechnik)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Prozessmodelle, Iterative Prozessmodelle, Inkrementelle Prozessmodelle, Agiles Manifest, SCRUM)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-2.pdf) 
            - [Aufgabe 4 (Entwurfsmuster)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Implementierung in Java, Sequenzdiagramm)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-1/Aufgabe-5.pdf) 
        - Teilaufgabe 2 
            - [Aufgabe 1 (DB)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-1.pdf) 
            - [Aufgabe 2 (Entity-Relation-Modell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf) 
            - [Aufgabe 3 (Relationenmodell)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-3.pdf) 
            - [Aufgabe 4 (SQL, SQL mit Übungsdatenbank, Top-N-Query)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-4.pdf) 
            - [Aufgabe 5 (Relationale Algebra, RelaX - relational algebra calculator)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.pdf) 
            - [Aufgabe 6 (Normalformen)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-6.pdf) 
            - [Aufgabe 7 (DB)](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-7.pdf)

### 66118: Fachdidaktik (Gymnasium)

- 2012 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2012/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2012/03/OCR.txt) 
- 2012 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2012/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2012/09/OCR.txt) 
- 2013 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2013/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2013/03/OCR.txt) 
- 2013 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2013/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2013/09/OCR.txt) 
- 2014 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2014/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2014/03/OCR.txt) 
- 2014 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2014/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2014/09/OCR.txt) 
- 2015 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2015/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2015/03/OCR.txt) 
- 2015 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2015/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2015/09/OCR.txt) 
- 2016 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2016/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2016/03/OCR.txt) 
- 2016 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2016/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2016/09/OCR.txt) 
- 2017 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2017/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2017/03/OCR.txt) 
- 2017 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2017/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2017/09/OCR.txt) 
- 2018 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2018/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2018/03/OCR.txt) 
- 2018 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2018/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2018/09/OCR.txt) 
- 2019 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2019/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2019/03/OCR.txt) 
- 2019 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2019/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2019/09/OCR.txt) 
- 2020 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2020/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2020/03/OCR.txt) 
- 2020 Herbst: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2020/09/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2020/09/OCR.txt) 
- 2021 Frühjahr: [Scan.pdf](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2021/03/Scan.pdf) [OCR.txt](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66118/2021/03/OCR.txt) 

# Stichwort-Verzeichnis

Diese Informatik-Material- und Aufgabensammlung verwendet das TeX-Makro
`\index{}` um ein Stichwortverzeichnis zu erstellen. In dieses Makro
kann ganz normaler Text - also auch mit Leerzeichen eingesetzt werden.
Die einzelnen Stichwörter werden in der YAML-Datei
`Stichwortverzeichnis.yml` hinterlegt. Ein Stichwort muss eindeutig
sein, d. h. es darf nicht doppelt vorkommen. Durch die YAML-Syntax kann
die hierarchische Struktur des Verzeichnisses verwaltet werden.
Alle Stichwörter beginnen mit `- `, damit die YAML-Datei hier unten
als Markdown-Liste eingebettet werden kann.

- DB:
    - Datenbank-Übersicht:
        - Datenbank
        - Datenbankmanagementsystem
        - Datenbanksystem
        - Referentielle Integrität
        - Datenunabhängigkeit
        - Drei-Schichten-Modell
        - Unionkompatibilität
        - Physische Datenorganisation:
            - Tupel-Identifikator
    - Datenbankentwurf:
        - Entity-Relation-Modell:
            - IS-A
    - Relationales Modell:
        - Relationenmodell:
            - Verfeinertes Relationenmodell
            - Kartesisches Produkt
        - Relationale Algebra:
            - Equi-Join
            - Natural-Join
            - Theta-Join
            - Division
            - RelaX - relational algebra calculator
        - Tupelkalkül
    - Relationale Anfragesprachen:
        - SQL:
            - ALTER TABLE
            - AVG
            - BETWEEN
            - CHECK
            - CONSTRAINT
            - CREATE TABLE
            - DELETE
            - DESC
            - DROP COLUMN
            - DROP TABLE
            - EXCEPT
            - GROUP BY
            - HAVING
            - INSERT
            - INTERSECT
            - Korrelierte Anfrage
            - MAX
            - Nicht-korrelierte Anfrage
            - NOT NULL
            - OR
            - PRIMARY KEY
            - REFERENCES
            - SQL mit Übungsdatenbank
            - Top-N-Query
            - TRIGGER
            - UNION
            - UPDATE
            - VIEW
            - WITH
    - Relationale Entwurfstheorie:
        - Normalformen:
            - Schlüssel
            - Superschlüssel
            - Schlüsselkandidat
            - Funktionale Abhängigkeiten
            - Kanonische Überdeckung
            - Synthese-Algorithmus
            - Erste Normalform
            - Zweite Normalform
            - Dritte Normalform
            - Boyce-Codd-Normalform
            - Attributhülle
            - Attributhüllen-Algorithmus
            - Anomalien:
                - Update-Anomalie
                - Insert-Anomalie
                - Delete-Anomalie
    - Transaktionsverwaltung:
        - Transaktionen
        - Zwei-Phasen-Sperrprotokoll
        - ACID
        - Serialisierbarkeitsgraph
        - Dirty-Read
        - Lost-Update
        - Deadlock
- OOMUP:
    - Objektorientierung:
        - Klasse
        - Objekt
    - Vererbung:
        - Generalisierung
        - Spezialisierung
    - Implementierung in Java:
        - Interface
        - Abstrakte Klasse
        - Feld (Array)
        - main-Methode
        - Sichtbarkeit:
          - Sichtbarkeit private
          - Sichtbarkeit package-private
          - Sichtbarkeit protected
- AUD:
    - Algorithmen und Datenstrukturen
    - Rekursion:
        - Iterative Realisation
    - Suche:
        - Lineare Suche
        - Binäre Suche
    - Sortieralgorithmen:
        - Bubblesort
        - Selectionsort
        - Insertionsort
        - Quicksort
        - Mergesort
        - Heapsort
        - Bucketsort
        - Radixsort
    - Algorithmische Komplexität (O-Notation):
        - Master-Theorem
    - Algorithmenmuster:
        - Greedy-Algorithmus
        - Dynamische Programmierung
        - Backtracking
        - Teile-und-Herrsche (Divide-and-Conquer)
    - Listen:
        - Einfach-verkettete Liste
        - Doppelt-verkettete Liste
        - Stapel (Stack)
        - Warteschlange (Queue)
    - Bäume:
        - Binärbaum
        - AVL-Baum
        - Rot-Schwarz-Baum
        - R-Baum
        - Halde (Heap)
        - B-Baum
        - Streutabellen (Hashing):
            - Hashfunktion
            - Separate Verkettung
            - Lineares Sondieren
            - Quadratisches Sondieren
            - Offene Adressierung
    - Graphen:
        - Adjazenzmatrix
        - Adjazenzliste
        - Algorithmus von Dijkstra
        - Minimaler Spannbaum:
            - Algorithmus von Kruskal
            - Algorithmus von Prim
        - Knotensuchalgorithmen:
            - Tiefensuche
            - Breitensuche

- FUMUP:
    - Funktionale Programmierung mit Haskell
- SOSY:
    - Projektmanagement:
        - Software Engineering
        - Prozessmodelle:
            - Wasserfallmodell
            - Spiralmodell
            - V-Modell
            - Agile Methoden:
                - Kontinuierliche Integration (Continuous Integration)
                - Refactoring
            - Agile Prozesse:
                - EXtreme Programming
                - SCRUM
                - Agiles Manifest
            - Evolutionäre Softwaremodelle
            - Inkrementelle Prozessmodelle
            - Iterative Prozessmodelle
        - Anforderungsanalyse:
            - Funktionale Anforderungen
            - Nicht-funktionale Anforderungen
        - Pflichtenheft
        - Softwaremaße
        - Versionsverwaltungssoftware
        - Prototyping
    - Modellierung:
        - UML-Diagramme:
            - UML-Struktur-Diagramme:
                - Klassendiagramm:
                    - Kassendiagramm Wissen
                    - Klassendiagramm zeichnen
                - Objektdiagramm
                - Komponentendiagramm
            - UML-Verhaltens-Diagramme:
                - UML-Interaktions-Diagramme:
                    - Sequenzdiagramm
                    - Kommunikationsdiagramm
                - Aktivitätsdiagramm
                - Anwendungsfalldiagramm
                - Zustandsdiagramm:
                    - Zustandsdiagramm Wissen
                    - Zustandsdiagramm zeichnen
        - Entwurfsmuster:
            - Erzeugungsmuster (Creational Patterns):
                - Abstrakte Fabrik (Abstract Factory)
                - Einzelstück (Singleton)
                - Erbauer (Builder)
            - Strukturmuster (Structural Patterns):
                - Adapter:
                    - Klassenadapter
                    - Objektadapter
                - Dekorierer (Decorator)
                - Kompositum (Composite)
                - Stellvertreter (Proxy)
            - Verhaltensmuster (Behavioral Patterns):
                - Beobachter (Observer)
                - Kommando (Command)
                - Schablone (Template)
                - Wiederholer (Iterator)
                - Zustand (State)
            - Sonstige Entwurfsmuster:
                - Modell-Präsentation-Steuerung (Model-View-Controller)
                - Einbringen von Abhängigkeiten (Dependency Injection)
    - Projektplanung:
        - Gantt-Diagramm
        - Petri-Netz:
            - Erreichbarkeitsgraph
            - Beschränktheit
            - Lebendigkeit
            - Verklemmungsfreiheit
            - Umkehrbarkeit
        - CPM-Netzplantechnik
    - Softwarearchitektur:
        - Blackboard-Muster
        - Schichtenarchitektur:
            - 2-Schichtenarchitektur:
              - Client-Server-Modell
        - Peer-to-Peer-Architektur
    - Testen:
        - Model Checking
        - White-Box-Testing:
            - Kontrollflussorientieres Testen:
                - Überdeckbarkeit
                - Kontrollflussgraph
                - C0-Test Anweisungsüberdeckung (Statement Coverage):
                    - Vollständige Anweisungsüberdeckung
                - C1-Test Zweigüberdeckung (Branch Coverage):
                    - Verzweigungsüberdeckung
                    - Zyklomatische Komplexität nach Mc-Cabe
                - C2-Test Pfadüberdeckung (Path Coverage):
                    - C2a Vollständige Pfadüberdeckung (Full Path Coverage)
                    - C2b Schleife-Inneres-Pfadüberdeckung (Boundary-Interior Path Coverage):
                        - Schleife-Inneres-Überdeckung
                    - C2c Strukturierte Pfadüberdeckung (Structured Path Coverage)
                - C3-Test Bedingungsüberdeckung (Condition Coverage)
            - Datenflussorientiertes Testen:
                - Datenfluss-annotierter Kontrollflussgraph
                - all definitions
                - all c-uses
                - all p-uses
                - all uses
        - Formale Verifikation:
            - wp-Kalkül:
              - Invariante
              - Totale Korrektheit
              - Partielle Korrektheit
              - Terminierungsfunktion
            - Hoare-Kalkül
            - Vollständige Induktion
        - Black-Box-Testing:
            - Unit-Test
            - Funktionalorienteres Testen
            - Anforderungsüberdeckung:
                - Grenzwertanalyse
                - Äquivalenzklassenzerlegung
        - Validation
        - Verifikation
        - Design by Contract
- Technische Informatik:
    - Ein-Adress-Befehl-Assembler
    - Mehr-Adress-Befehl-Assembler
- Theoretische Informatik:
    - Formale Sprachen:
        - Reguläre Sprache:
            - Reguläre Grammatik
            - Reguläre Ausdrücke
            - Deterministisch endlicher Automat (DEA)
            - Nichtdeterministisch endlicher Automat (NEA)
            - Pumping-Lemma (Reguläre Sprache)
            - Potenzmengenalgorithmus
            - Erweiteter Potenzmengenalgorithmus
            - Minimierungsalgorithmus
            - Äquivalenzklassen
            - Ableitung (Reguläre Sprache)
        - Kontextfreie Sprache:
            - Kontextfreie Grammatik
            - Ableitung (Kontextfreie Sprache)
            - Ableitungsbaum
            - Kellerautomat:
                - Konfigurationsfolge
            - CYK-Algorithmus
            - Chomsky-Normalform
            - Pumping-Lemma (Kontextfreie Sprache)
        - Kontextsensitive Sprache:
            - Kontextsensitive Grammatik
        - Unbeschränkte Sprache:
            - Turing-Maschine

    - Berechenbarkeit:
        - LOOP-berechenbar
        - WHILE-berechenbar
        - GOTO-berechenbar
        - TURING-berechenbar
    - Entscheidbarkeit
    - Komplexitätstheorie:
        - Polynomialzeitreduktion


## TeX-Klassen und Pakete installieren

```
su -c "echo "\\\\def\\\\LehramtInformatikRepository{$(pwd)}" > /etc/lehramt-informatik.config.tex"
```

```
make install_tex
```

Die Java-Dateien sind als Git Submodule eingebunden:

```
git submodule update --init
```
