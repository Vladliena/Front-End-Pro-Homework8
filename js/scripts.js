const studentsArrayOne = ['John', 'Sam', 'Scott', 'Lisa','Bob','Paul', 'Lola', 'Andrew', 'Vladimir', 'Inna'];

studentsArrayOne.push('Mathew','Tom');
// console.log(studentsArrayOne);

studentsArrayOne.unshift('Agata','Nick');
// console.log(studentsArrayOne);

studentsArrayOne.pop();
// console.log(studentsArrayOne);

studentsArrayOne.shift();
// console.log(studentsArrayOne);

const studentCheck = prompt('Tell me the name');
    if (studentsArrayOne.includes(studentCheck)){
        console.log(`${studentCheck} is here`);
    } else console.log(`${studentCheck} is not here`);

const studentsArrayTwo = studentsArrayOne.slice(3,7);
    // console.log(studentsArrayTwo);

    const studentsArrayThree = ['Rebeca', 'Mark', 'George','Antony','Ben','Claud'];
    const allStudents = studentsArrayTwo.concat(studentsArrayThree);

allStudents.splice(4,1);
allStudents.splice(6,1,'Ivan')

console.log(allStudents.join('-'))