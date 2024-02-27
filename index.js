// 1st
const student  ={
    name:"Ameer",
    Age:10,
    grades:[87,76,94,90,72],
    address:{city:"Lagos", Zipcode:103},
    // AverageGrade : calculateAverage()

};

console.log(student.name, student.grades);


// 2nd
const {name:fName,Age:pAge,grades:pGrades,address:pAdress} = student;


console.log(pAdress.city);

// 3rd
const [first,second,third,fourth] = pGrades;
function calculateAverage (){
   console.log((first + second + third + fourth) / pGrades.length);
}
calculateAverage();

// 4th
const colors = ["red" , "green" , "blue"];

const [firstColor, secondColor , thirdColor] = colors;


console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// 5th
const car = {
    model:"toyota",
    engine:{type:"Engine", HorsePower:"10 Hp"}
};
  const   {model:carModel, engine:carEngine } = car;
  console.log(carEngine.HorsePower);

// 6th
student.gradeLevel = "sophomore";
console.log(student);

// 7th
function displayStudentInfo(Student) {
 console.log(fName);
 console.log(pAge);
 calculateAverage();


}
displayStudentInfo();

// 8th
 function createPerson(name , age){
    console.log(` Name : ${name} , Age : ${age} `);
 }
 createPerson("Ameer" , 20);