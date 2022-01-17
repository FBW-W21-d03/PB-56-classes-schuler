class Schueler{
    constructor(vor_und_nachname, Klassenstufe, Abschlussnote){
        this.schuelerVorUndNachname= vor_und_nachname;
        this.schuelerKlassen= Klassenstufe;
        this.suhuelerAbschlussnote= Abschlussnote;
    };
};

let schuelerNataly = new Schueler("Nataly Miller","10A", 2.8 );
let schuelerPenny = new Schueler("Penny Blaese", "9B", 3.1);
let schuelerJimmy = new Schueler("Jimmy Moore", "12D", 1.4);

console.log(schuelerNataly, schuelerPenny, schuelerJimmy)