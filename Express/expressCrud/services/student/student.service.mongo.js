const StudentModel = require('../../models/student/students.model');

class StudentService {
    static list(req,res) {
        StudentModel.find().then(users => res.status(201).json(users))
    }

    static create(req, res) {
        const {name, course, ira} = req.body;
        const newStudent = {name, course, ira}
        StudentModel.create(newStudent).then( () => res.status(201).json(newStudent))
    }

    static retrive(req, res) {
        StudentModel.findById(req.params.id).then( (user) => res.status(201).json(user))
    }

    static update(req, res) {
        StudentModel.findByIdAndUpdate(req.params.id, req.body, {'new':true})
        .then( (user) => res.status(201).json(user))
    }

    static delete(req, res) {
        StudentModel.findByIdAndDelete(req.params.id).then( (user) => res.status(201).json(user))
    }
}

module.exports = StudentService;