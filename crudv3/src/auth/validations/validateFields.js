export function ValidateFields(login, password, repassword = "empty") {
    const validate = { login: '', password:' ', confirmPassword: '' };

    if(password !== repassword && repassword !== "empty") {
        validate.password = 'is-invalid';
        validate.confirmPassword = 'is-invalid';
        return {res: false, msg: "Repita a mesma senha", validate};
    }

    if(login === '' || password === '' || repassword === '') {
        if(login === '') validate.login = 'is-invalid'
        if(password === '') validate.password = 'is-invalid'
        if(repassword === '') validate.confirmPassword = 'is-invalid'

        return {res: false, msg: "Preencha todos os campos", validate};
    }

    return { res: true, validate};
}
