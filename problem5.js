const studentName = ["Paul", "Blaire", "Drake", "Carti"];

function searchStudent(target) {
    for (let i = 0; i < studentName.length; i++) {
        if (studentName[i] === target) {
            return target;
        }
        return "No Student";
    }
}

const targetStudent = "Nigga";
console.log(searchStudent(targetStudent));