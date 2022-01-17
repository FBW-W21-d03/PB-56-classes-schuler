// Aufgabenstellung - Teil 1

class Schueler{
    constructor (name,stufe,note){
        this.schuelerName = name;
        this.schuelerStufe = stufe;
        this.schuelerNote = note;
    }
}
// Aufgabenstellung - Teil 2
let schueler_01 = new Schueler("Nataly Miller" , "10A" , 2.8);
let schueler_02 = new Schueler("Penny Blaese" , "9B" , 3.1);
let schueler_03 = new Schueler("Jimmy Moore" , "12D" , 1.4);
let schueler = [schueler_01 ,schueler_02 ,schueler_03];

// Aufgabenstellung - Teil 3

console.log(schueler);