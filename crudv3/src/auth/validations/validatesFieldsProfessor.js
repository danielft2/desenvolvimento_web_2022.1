export function validateFieldsProfessor(name, university, degree) {
    const validate = { name: '', university: '', degree: '' };

    if(name === '' || university === '' || degree === '') {
        if(name === '') validate.name = 'is-invalid'
        if(university === '') validate.university = 'is-invalid'
        if(degree === '') validate.degree = 'is-invalid'
        return { res: false, msg: "Preencha todos os campos", validate };
    }

    return { res: true, validate };
}
