'use strict'
// creates a teacher interface with firstName, lastName, fullTimeEmployee(as a boolean), yearsOfExperience, and location
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
}
// creates a const teacher3
const teacher3: Teacher = {
    firstName: 'David',
    lastName: 'Doe',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
};
// interface directors extends teacher
interface Directors extends Teacher {
    numberOfReports: number,
};
// creates a const director1    
const director1: Directors = {
    firstName: 'James',
    lastName: 'Bond',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'London',
    numberOfReports: 5,
    };
    
// creates a new interface function to print teachers
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => '${firstName.charAt(0)}. ${lastName}';

interface StudentClassConstructor {
    new(firstName:string, lastName:string): StudentClassInterface;
}
interface StudentClassInterface {
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }   
    workOnHomework(){
        return 'Currently working';
    }
    displayName(){
        return this.firstName;
    }
}
