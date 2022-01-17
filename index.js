class Klasse {
  constructor(name, klassenstufe, abschlussnote) {
    this.mitarbeiterName = name;
    this.mitarbeiterId = klassenstufe;
    this.vorgesetztenId = abschlussnote;
  }
}

let klasse_A_01 = new Klasse("Nataly Miller", "10A", "2.8");
let klasse_A_02 = new Klasse("Penny Blease", "9B", "3.1");
let klasse_A_03 = new Klasse("Jimmy Moore", "12D", "1.4");

const array = ["Nataly Miller", "Penny Blease", "Jimmy Moore"];
console.log(array);

console.log(klasse_A_01, klasse_A_02, klasse_A_03);
