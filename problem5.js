const studentName = ["Paul", "Blaire", "Drake", "Carti"];

function searchStudent(students, target) {
    for (let i = 0; i < students.length; i++) {
        if (students[i] === target) {
            return target;
        }
        return "No Student";
    }
}

console.log(searchStudent(studentName, 'Uii'));