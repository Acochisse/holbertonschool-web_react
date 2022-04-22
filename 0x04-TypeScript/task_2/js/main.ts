// interface DirectorInterface includes workFromHome, getCoffeeBreak, WorkDirectorTasks
interface DirectorInterface {
    workFromHome: () => string,
    getCoffeeBreak: () => string,
    workDirectorTasks: () => string,
}
// creates an interface teacher with same properties as directorinterface
interface TeacherInterface {
    workFromHome: () => string,
    getCoffeeBreak: () => string,
    workTeacherTasks: () => string,
}
// exports class Director and implements director interface
export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'work from home'
    }
    getCoffeeBreak(): string {
        return 'get coffee break'
    }
    WorkDirectorTasks(): string {
        return 'working on director tasks'
    }
}
// exports class Teacher and implements teacher interface
export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'work from home'
    }
    getCoffeeBreak(): string {
        return 'get coffee break'
    }
    WorkTeacherTasks(): string {
        return 'working on director tasks'
    }
}
function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher()
    }
    return new Director()
  }
  
  export function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined
  }
  
  export function executeWork(
    employee: TeacherInterface | DirectorInterface,
  ): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks()
    } else {
      return employee.workTeacherTasks()
    }
  }
  
  type Subjects = "Math" | "History"
  
  function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return `Teaching ${todayClass}`
    } else if (todayClass === "History") {
      return `Teaching ${todayClass}`
    }
  }