export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Subject = new Subjects.Java();
export const react: Subjects.Subject = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
}

console.log("C++");
cpp.setTeacher = cTeacher
console.log(cpp.getReqierments())
console.log(cpp.getAvailableTeacher())

console.log("Java")
java.setTeacher = cTeacher
console.log(java.getReqierments())
console.log(java.getAvailableTeacher())

console.log("React")
react.setTeacher = cTeacher
console.log(react.getReqierments())
console.log(react.getAvailableTeacher())
