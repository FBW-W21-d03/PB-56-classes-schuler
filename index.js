class Schüler{
    constructor(name, Klassenstufe, Abschlussnote){
        this.name = name;
        this.Klassenstufe = Klassenstufe;
        this.vorgesetztenId = Abschlussnote;
    };
};

// Schritt 2 Objekt erstellen
let Schüler_01= new Schüler("Nataly Miller", "10A", 2.8);
let Schüler_02 = new Schüler("Penny Blaese", "9B",  3.1);
let Schüler_03 = new Schüler("Jimmy Moore", "12D",  1.4);


console.log(Schüler_01);
console.log(Schüler_02);
console.log(Schüler_03);
let array=[]
array.push(Schüler_01,Schüler_02,Schüler_03)
console.log(array)
