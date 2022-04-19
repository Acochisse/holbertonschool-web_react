namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number
    }
    export class Cpp extends Subject {
        getReqierments(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
            if (!this.teacher) {
                return 'No available teacher';
            }
        return `available teacher: ${this.teacher.firstName}`
        }
    }
}
