class Classes_schuler {
    constructor(vorNachname, klassenstufe, abschlussnote){
        this.vorNachname =vorNachname;
        this.klassenstufe =klassenstufe;
        this.abschlussnote =abschlussnote;

    };
};

let schuler_01 = new Classes_schuler("Nataly Miller", "10A", 2.8);
let schuler_02 = new Classes_schuler("Penny Blaese", "9B", 3.1);
let schuler_03 = new Classes_schuler("Jimmy Moore", "12D", 1.4);


console.log(schuler_01);
console.log(schuler_02);
console.log(schuler_03);