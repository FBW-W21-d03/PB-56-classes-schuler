// TEIL-1
class Schuler {
    constructor(fullname,klassenStufe,abschlußNote) {
        this.schuler_fullname =fullname ;
        this.schuler_klassenStufe =klassenStufe ;
        this.schuler_abschlußNote =abschlußNote ;
    }
}

// TEIL-2
let schuler_1 = new Schuler("Nataly Miller", "10A", 2.8);
let schuler_2 = new Schuler("Penny Blaese", "9B", 3.1);
let schuler_3 = new Schuler("Jimmy Moore", "12D", 1.4);

// TEIL-3
console.log(schuler_1);
console.log(schuler_2);
console.log(schuler_3);