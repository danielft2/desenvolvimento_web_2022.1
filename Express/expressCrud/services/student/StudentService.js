const StudentModel = require('../../models/student/StudentsModel')

let students = [];
let _id = 0;

class StudentService {
    static list() {
        return students;
    }

    static create(data) {
        let student = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira
        )

        students.push(student)
        return student;
    }

    static edit(_id, data) {
        for (let student of students) {
            if (student._id == _id) {
                student.name = data.name;
                student.course = data.course;
                student.ira = data.ira;

                return student;
            }
        }
        return null;
    }

    static delete(_id) {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id == _id) {
               
               return true;
            }
        }
        return false;
    }

    static getStudent(id) {
        return students[id];
    }
}

module.exports = StudentService;