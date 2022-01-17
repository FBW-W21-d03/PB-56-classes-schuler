function printGrades(){
    let chosen = document.getElementById("schueler_auswahl").value;
    schueler.forEach((person) =>{
        if(person.vorName == chosen){
            person.printGradesToConsole();
        }
    })
}

class Schueler {
    constructor(vorName, klassenstufe, abschlussnote) {
        this.vorName = vorName;
        this.klassenstufe = klassenstufe;
        this.abschlussnote = abschlussnote;
    }
    printGradesToConsole(){
        console.log("My final grade is:", this.abschlussnote);
    }
}

let schueler = [];

let schueler_1 = new Schueler("Nataly Miller", "10A ", 2.8);
let schueler_2 = new Schueler("Penny Blaese", "9B", 3.1);
let schueler_3 = new Schueler("Jimmy Moore", "12D ", 1.4);

schueler.push(schueler_1, schueler_2, schueler_3);


let eleSchule = schueler;

/*
Für jeden Schüler ein Listenelement
*/
schueler.forEach((person) => {
    document.getElementById("shuler").innerHTML = 
    // was schon drin steht
    document.getElementById("shuler").innerHTML +
    // neuer Schüler
    "<li>" + person.vorName + " ist in der Klasse " + person.klassenstufe + "</li>"
});
