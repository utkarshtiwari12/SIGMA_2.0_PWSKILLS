/* Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying, "Congratulations [Student Name]! You have cleared the exam." */


const students = [
    {
        name: "Swati",
        marks: 96,
    },
    {
        name: "Utkarsh",
        marks: 94,
    },
    {
        name: "Prabir",
        marks: 86,
    },
    {
        name: "Anjali",
        marks: 78,
    },
    {
        name: "Sweksha",
        marks: 92,
    }
];

function selectToppers(stuName) {
    const student = students.find((student) => student.name === stuName);

    if (student) {
        if (student.marks > 90) {
        console.log(`Congratulations ${student.name}! You have cleared the exam.`);
        } else {
        console.log(`Sorry ${student.name}! You have not cleared the exam.`);
        }
    } else {
    console.log(`Invalid Student...`);
    }
}

selectToppers("Swati");
selectToppers("Anjali");
selectToppers("S");
