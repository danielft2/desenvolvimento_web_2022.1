const ProfessorModel = require('../../models/professor/professor.model');

class ProfessorService {
    static list(req, res) {
        ProfessorModel.find().then(user => res.status(201).json(user))
    }

    static create(req, res) {
        ProfessorModel.create(req.body).then(user => res.status(201).json(user))
    }

    static retrive(req, res) {
        ProfessorModel.findById(req.params.id).then(user => res.status(201).json(user));
    }

    static upadte(req, res) {
        ProfessorModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(user => res.status(201).json(user));
    }

    static delete(req, res) {
        ProfessorModel.findByIdAndRemove(req.params.id).then(user => res.status(201).json(user));
    }
}

module.exports = ProfessorService;