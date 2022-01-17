class Schueler{
    constructor(vorNachname, klassenstufe, abschulungsnote){
        this.vorNachname =vorNachname;
        this.klassenstufe =klassenstufe;
        this.abschulungsnote =abschulungsnote;
    }
};

let  Nataly = new Schueler("Nataly Miller", "10A", 2.8 );
let Penny = new Schueler( "Penny Blaese","9B", 3.1);
let Jimmy = new Schueler( "Jimmy Moore", "12D",  1.4);

console.log(Nataly);
console.log(Penny);
console.log(Jimmy);
