interface Student {
    firstName: string;
    lastName: string;
    age: number;
    gpa: number;
}

const processStudent = (student: Student): string => {
    if (student.gpa > 2) {

        return JSON.stringify(student);
    } else {

        return `คุณ ${student.firstName} พ้นสภาพ`;
    }
};
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    gpa: 3.2
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 21,
    gpa: 1.8
};

console.log(processStudent(student1));


console.log(processStudent(student2));

