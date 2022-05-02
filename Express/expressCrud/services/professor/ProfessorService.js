const ProfessorModel = require('../../models/professor/ProfessorModel');
const professors = []

let _id = 0;

class ProfessorService {
    static list() {
        return professors;
    }

    static create(data) {
        let professor = new ProfessorModel(
            _id++,
            data.name,
            data.university,
            data.degree
        )

        professors.push(professor)
        return professor;
    }


    static getProfessor(id) {
       return professors[id];
    }

    static edit(_id, data) {
        for(let professor of professors) {
            if (professor._id == _id) {
                professor.name = data.name;
                professor.university = data.university;
                professor.degree = data.degree;

                return professor;
            }     
        }

        return null;
    }

    static delete(_id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i]._id == _id) {
               return true;
            }
        }
        return false;
    }

}

module.exports = ProfessorService;