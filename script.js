class Schuler {
    constructor(vundNachname, klassenstufe,abbschlusnote){
        this.Vor_und_Nachname = vundNachname;
        this.Klassenstufe = klassenstufe;
        this.Abbschlusnote = abbschlusnote;

    }
};

let kamarader = new Schuler("Nataly Miller", "10A", 2.8);
let kamarader1 = new Schuler("Penny Blaese", "9B", 3.1);
let kamarader2 = new Schuler("Jimmy Moore", "12D", 1.4);
console.log(kamarader);
console.log(kamarader1);
console.log(kamarader2);
//3
const alleSchuler=[];
let kamar = alleSchuler.push(kamarader,kamarader1,kamarader2)
console.log(alleSchuler);