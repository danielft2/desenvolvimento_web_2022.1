export function validateFieldsStudent(name, course, ira) {
    const validate = { name: '', course:' ', ira: 0 };

    if(ira < 0 || ira > 10) {
        validate.ira = 'is-invalid';
        return { res: false, msg: "Valor do ira invalido.", validate };
    }

    if(name === '' || course === '') {
        if(name === '') validate.name = 'is-invalid'
        if(course === '') validate.course = 'is-invalid'
        return { res: false, msg: "Preencha todos os campos", validate };
    }

    return { res: true, validate };
}
