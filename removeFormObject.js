const students =[
    {age:12},
    {age:16},
    {age:14},
    {age:19},
    {age:13},
];
const newStudentAge = [...students,{age:245}]
const remaing = newStudentAge.filter(p=>p.age !==15 && p.age !==245)
console.log(newStudentAge);
console.log(remaing);
