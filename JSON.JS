const student = ['raihan','habib','nosib','ryc',14,432,43,24,432];
const studentJson = JSON.stringify(student)
console.log(student);
console.log(studentJson);

// convert stringify to normal
const studentObj=JSON.parse(studentJson);
console.log(studentObj);