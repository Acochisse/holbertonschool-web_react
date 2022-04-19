namespace Subjects {
    export interface Teacher {
        expierienceTeachingJava?: number
    }
}
export class Java extends Subject {
    getReqierments(): string {
        return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher(): string {
        if (!this.teacher) {
            return 'No available teacher';
        }
        return `available teacher: ${this.teacher.firstName}`
    }
}