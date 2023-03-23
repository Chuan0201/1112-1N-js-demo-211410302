import { students, sdata  } from "./data_02.js";



console.log('sdata original', sdata);

sdata.sort( function(a,b){return b-a});
console.log('sdata', sdata);
console.log(`The hightest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length-1]}`);


// for students

console.log('students', students);

const students2 = students.map((student) => {
//   student.role = 'student';
    return {...student, role: 'student'};
});

console.log('students2 original', students2);

students2.sort(function(a,b){return b.score - a.score});
console.log('students2', students2);

console.log(`The hightest score: ${students2[0]}`);
console.log(`The lowest score: ${students2[students2.length-1]}`);

console.log('students', students)
const averageStudents = students.reduce( (total, student, index) => {
    console.log('index total', index, total);
    return total + student.score;
}, 0) / students.length;
console.log('Students average', averageStudents);

