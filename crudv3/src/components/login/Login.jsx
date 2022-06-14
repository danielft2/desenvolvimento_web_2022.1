import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import FirebaseUserService from "../../services/FirebaseUserService";
import FirebaseContext from "../../utils/FirebaseContext";

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
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const fireAuthentication = firabase.getAuthentication();
        setLoading(true);
        FirebaseUserService.login(fireAuthentication, inputLogin, inputPassword, (user) => {
            if(user) {
                firabase.setUser(user);
                setIsLogged(true);
                setInputLogin(false);
                navigate('/ListStudent')
            } else {
                setLoading(false)
            }
            
        })
    }

    const loadingHandleSubmit = () => {
        if (loading) {
            return (
                <button className="btn btn-primary mt-2" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="ps-2">Caregando...</span>
                </button>
            )
        } 

        return(
            <div className="form-group pt-2">
                <input type="submit" value="Acessar" className="btn btn-primary"/>
            </div>
        )
    }
    
    return (
        <div className=" pt-4 d-flex flex-column justify-content-center loginStyle">
           <h2 className="text-center">Bem vindo a tela de login</h2>
           <form action="" onSubmit={handleSubmit} className="">
               <div className="form-group pb-2">
                   <label htmlFor="Email text-amber-300">Login</label>
                   <input
                       type="text"
                       className="form-control"
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
                       className="form-control"
                       name="Senha" id="Senha"
                       placeholder="Informe sua senha"
                       value={(inputPassword === null || inputPassword === undefined) ? '' : inputPassword}
                       onChange={(event) => setInputPassword(event.target.value)}
                    />
               </div>
               {loadingHandleSubmit()}
           </form>
        </div>
    )
}

export default LoginPage;