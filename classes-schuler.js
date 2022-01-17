// Aufgabe Teil 1

class Schuler {
    constructor(vornameUndNachname, klasse, abschlussnote) {

        this.vornameUndNachname = vornameUndNachname;
        this.klasse = klasse;
        this.abschluss = abschlussnote;
        
    }
}

// Aufgabe Teil 2

let schuler_A_001 = new Schuler("Nataly Miller", "10A", 2.8);
let schuler_A_002 = new Schuler("Penny Blaese", "9B", 3.1);
let schuler_A_003 = new Schuler("Jimmy Moore", "12D", 1.4);

// Aufgabe Teil 3

let schuler = [];
schuler.push(schuler_A_001, schuler_A_002, schuler_A_003, schuler);
console.log(schuler);