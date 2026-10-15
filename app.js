import fs from 'fs';
fs.readFile('data/users.txt','utf-8',(err,res)=>{
    //console.log(res);
    if(err){ console.log(err); return;}
    const names = res.split('\n');
   // names.map(x=>console.log("Hello "+x));
});
const data = fs.readFileSync("data/users.txt","utf-8");

const students = [
  { id: 1, name: 'Ravi', marks: 85 },
  { id: 2, name: 'Priya', marks: 90 },
  { id: 3, name: 'Kiran', marks: 78 },
  { id: 4, name: 'Sneha', marks: 92 },
  { id: 5, name: 'Arun', marks: 88 },
  { id: 6, name: 'Divya', marks: 95 },
  { id: 7, name: 'Rahul', marks: 80 },
  { id: 8, name: 'Anu', marks: 87 },
  { id: 9, name: 'Sita', marks: 91 },
  { id: 10, name: 'Manoj', marks: 76 }
];

const len = Math.ceil(students.length/2);
const selectedStudents = students.slice(0,len);

const header = "ID,Names,Marks";
const rows = selectedStudents.map(x=>`${x.id},${x.name},${x.marks}`);

const csvData = [header, ...rows].join('\n');

fs.writeFile('students.csv',csvData,'utf-8',(err)=>{
    if(err){
        console.log('error writing the file');
        return;
    }
    console.log('csv file creaated successfully');
    fs.appendFile('students.csv','\n11,Geetha,76',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('appended successfully')
})
});


