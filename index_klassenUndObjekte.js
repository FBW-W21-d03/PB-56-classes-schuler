// Beispiel zu Klassen und Objekten

class Mitarbeiter{
    constructor (name,id,v_id,gehalt,stundenkapazitaet){
        this.mitarbeiterName = name;
        this.mitarbeiterId = id;
        this.vorgesetztenId = v_id;
        this.mitarbeiterGehalt = gehalt;
        this.m_stundenkapazitaet;
    }
}
// schritt2 - objekt erstellen
let mitarbeiter_A_01 = new Mitarbeiter("Bob Smith" , "012" , "001" , 60000 , 42);
let mitarbeiter_A_02 = new Mitarbeiter("Sammy Conners" , "014" , "001" , 62000 , 42);

console.log(mitarbeiter_A_01);
console.log(mitarbeiter_A_02);
