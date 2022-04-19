// interface DirectorInterface includes workFromHome, getCoffeeBreak, WorkDirectorTasks
interface DirectorInterface {
    workFromHome: string;
    getCoffeeBreak: string;
    WorkDirectorTasks: string;
}
// creates an interface teacher with same properties as directorinterface
interface TeacherInterface {
    workFromHome: string;
    getCoffeeBreak: string;
    WorkTeacherTasks: string;
}
// exports class Director and implements director interface
export class Director implements DirectorInterface {
    workFromHome = () => 'Working from home';
    getCoffeeBreak = () => 'Getting coffee break';
    WorkDirectorTasks = () => 'Working on director tasks';
}
// exports class Teacher and implements teacher interface
export class Teacher implements TeacherInterface {
    workFromHome = () => 'Working from home';
    getCoffeeBreak = () => 'Getting coffee break';
    WorkTeacherTasks = () => 'Working on teacher tasks';
}

// exports a const creatEmployee
export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) > 500 ? new Teacher() : new Director();


// export functions related to specific job types: isDirector, executeWork
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).WorkDirectorTasks !== undefined;
}
export function executeWork(employee: TeacherInterface | DirectorInterface): string {
    if (isDirector(employee)) {
        return employee.WorkDirectorTasks();
    } else {
        return employee.WorkTeacherTasks();
    }
}

// creates new subjects math and history
type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}
