class schueler 
{ constructor (nachname, klasse, note){ 
this.nachname = nachname; 
this.klasse = klasse; 
this.note = note; };
}; 
let schueler1 = new schueler("Nataly Miller", "10A", 2.8);
let schueler2 = new schueler("Penny Blaese", "9B", 3.1);
let schueler3 = new schueler("Jimmy Moore", "12D", 1.4); 
const namen = [schueler1, schueler2, schueler3]; 
console.log(namen);
