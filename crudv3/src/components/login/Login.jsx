import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { ValidateFields } from "../../auth/validations/validateFields";
import { toast } from 'react-toastify';

import FirebaseUserService from "../../services/FirebaseUserService";
import FirebaseContext from "../../utils/FirebaseContext";
import { ButtonSpinner } from "../ButtonSpinner";

const LoginPage = ({ setIsLogged }) => {
    return (
        <FirebaseContext.Consumer>
            { (firabase) => <Login firabase={firabase} setIsLogged={setIsLogged} />}
        </FirebaseContext.Consumer>
    )
}

const Login = ({ firabase, setIsLogged }) => {
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [validate, setValidate] = useState({ login: '', password:' ', confirmPassword: '' });
 
    const navigate = useNavigate()

    const validateInputs = () => {
        const { res, msg, validate } = ValidateFields(inputLogin, inputPassword);
        setValidate(validate);
    
        if (res) {
            setLoading(false);
            return true;
        } else {
            toast.error(msg);
            setLoading(false);
            return false;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateInputs()) return;

        const fireAuthentication = firabase.getAuthentication();
        setLoading(true);
        FirebaseUserService.login(fireAuthentication, inputLogin, inputPassword, (res, content) => {
            if(res) {
                firabase.setUser(content);
                setIsLogged(true);
                navigate('/ListStudent')
            } else {
                setLoading(false)
                toast.error("Usuário e/ou senha incorretos.")
                setInputLogin('');
                setInputPassword('')
            }
            
        })
    }

    return (
        <div className=" pt-4 d-flex flex-column justify-content-center loginStyle">
           <h2 className="text-center">Bem vindo a tela de login</h2>
           <form action="" onSubmit={handleSubmit} className="">
               <div className="form-group pb-2">
                   <label htmlFor="Email text-amber-300">Login</label>
                   <input
                       type="text"
                       className={`form-control ${validate.login}`}
                       name="Login" id="Login"
                       placeholder="Informe seu Login"
                       value={(inputLogin === null || inputLogin === undefined) ? '' : inputLogin}
                       onChange={(event) => setInputLogin(event.target.value)}
                    />
               </div>
               <div className="form-group">
                   <label htmlFor="Senha">Senha</label>
                   <input
                       type="password"
                       className={`form-control ${validate.password}`}
                       name="Senha" id="Senha"
                       placeholder="Informe sua senha"
                       value={(inputPassword === null || inputPassword === undefined) ? '' : inputPassword}
                       onChange={(event) => setInputPassword(event.target.value)}
                    />
               </div>
               <ButtonSpinner loading={loading} text="Efetuar Login"/>
           </form>
           <Link to="/Cadastro" className="text-center">
                Cadastre-se
           </Link>
        </div>
    )
}

export default LoginPage;