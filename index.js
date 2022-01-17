// 1 )
class Schueler{
    constructor(fullName,gradeLenel,finalGrade,){
    this.schuelerName = fullName; 
    this.schuelerGradeLenel = gradeLenel;
    this.schuelerFinalGrade =finalGrade;
}};
// 2 )
let schueler_A_01 = new Schueler("Nataly Miller","10A",2.8);
let schueler_A_02 = new Schueler("Penny Blaese","9B",3.1);
let schueler_A_03 = new Schueler( "Jimmy Moore","12D",1.4);
// 3 )
const schueler = [schueler_A_01,schueler_A_02,schueler_A_03];
console.log(schueler);