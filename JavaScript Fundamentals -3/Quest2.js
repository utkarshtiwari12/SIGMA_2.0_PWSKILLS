/* Define an object that represents a student's information including name, age, and grade. Implement a
method to update the student's grade. */


const stuInfo = {
    name: "Utkarsh",
    age: 20,
    grade: "B"
};

function updateStuGrade(newGrade)
{
    stuInfo.grade = newGrade;
}

updateStuGrade("A");

console.log(stuInfo);