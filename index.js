
/* const arr2 = {
    fname:"John",
    lname:"Doe",
    age: 25,
}
console.log(arr2);;

const arr4 = [true, false, "yay!", [3,6,7], null, 9];
console.log(arr4);

const arr3 = [true, false, "yay!", [1,4,8], null, 5];
console.log(arr3);
*/


const students = [
    {
        fName: "Alex",
        lName: "Mkrtichian",
        heights: ['7','1'],
        graduations: ['2007','2011'],
        grade: 10,
    },
    {
        fName: "Paul",
        lName: "Jones",
        heights: ['6','8'],
        graduations: ['2008',2010],
        grade: 9,
    },
    {
        fName: "Josh",
        lName: "Mkrtichian",
        heights: ['6','5'],
        graduations: ['2008','2009'],
        grade: 10,
    }
]
students.forEach((students) => console.log(students.fName + " " + students.lName));

students.forEach((students) => {
    console.log(students.fName + " " + students.lName + 'graduations:');
    students.graduations.forEach((graduated) => {
        console.log(graduated);
    });
});

students.forEach((students) => {
    console.log(students.fName + " " + students.lName + 'heights:');
    students.heights.forEach((height) => {
        console.log(height);
    });
});

const tenthgrade = students.filter((student) => student.grade === 10);
console.log(tenthgrade)