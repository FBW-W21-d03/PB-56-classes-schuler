class Schuler{
    constructor(name,nachname, klassen, abschlussnote){
       this.VorName = name;
       this.NachName = nachname;
       this.Klassenstufe= klassen;
       this.Abschlussnote= abschlussnote
    };
};


let schuler_01 = new Schuler("Nataly","Miller", "10A", 2.8);
let schuler_02 = new Schuler("Penny","Blaese", "9B", 3.1);
let schuler_03 = new Schuler("Jimmy ","Moore", "12D", 1.4);


console.log(schuler_01,schuler_02,schuler_03);