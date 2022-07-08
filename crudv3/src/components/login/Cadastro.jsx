import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ValidateFields } from "../../auth/validations/validateFields";
import FirebaseUserService from "../../services/FirebaseUserService";
import FirebaseContext from "../../utils/FirebaseContext";

export function Cadastro({ setIsLogged }) {
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [validate, setValidate] = useState({ login: '', password:' ', confirmPassword: '' });

    const firebase = useContext(FirebaseContext);
    const navigate = useNavigate()
    
    const validateInputs = () => {
        const { res, msg, validate } = ValidateFields(inputLogin, inputPassword, inputConfirmPassword);
        setValidate(validate);

        if (res) {
            toast.success(msg);
            setLoading(false);
        } else {
            toast.error(msg);
            setLoading(false);
            return false;
        }

        return true;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!validateInputs()) return;
        
        FirebaseUserService.createUser(firebase.getAuthentication(), inputLogin, inputPassword, (response, content) => {
            if(response) {
                toast.success(`cadastro realizado com sucesso.`);
                firebase.setUser(content);
                setIsLogged(true);
                navigate('/ListStudent');
            } else {
                toast.error(content)
            }
        })
    };


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
                <input type="submit" value="Realizar Cadastro" className="btn btn-primary"/>
            </div>
        )
    }
    
    return (
        <div className=" pt-4 d-flex flex-column justify-content-center loginStyle">
           <h2 className="text-center">Bem vindo, Cadastre-se</h2>
           <form onSubmit={handleSubmit}>
               <div className="form-group pb-2">
                   <label htmlFor="Email text-amber-300">Login</label>
                   <input
                       className={`form-control ${validate.login}`}
                       type="text"
                       name="Login" id="Login"
                       placeholder="Informe seu Login"    
                       value={(inputLogin === null || inputLogin === undefined) ? '' : inputLogin}
                       onChange={(event) => setInputLogin(event.target.value)}
                    />
               </div>
               <div className="form-group pb-2">
                   <label htmlFor="Senha">Senha</label>
                   <input
                       className={`form-control ${validate.password}`}
                       type="password"
                       name="Senha" id="Senha"
                       placeholder="Informe sua senha"
                       value={(inputPassword === null || inputPassword === undefined) ? '' : inputPassword}
                       onChange={(event) => setInputPassword(event.target.value)}
                    />
               </div>
               <div className="form-group">
                   <label htmlFor="confirmPass">Confirmar senha</label>
                   <input
                       type="password"
                       className={`form-control ${validate.confirmPassword}`}
                       name="Confirmar Senha" id="confirmPass"
                       placeholder="Confirme sua senha"
                       value={(inputConfirmPassword === null || inputConfirmPassword === undefined) ? '' : inputConfirmPassword}
                       onChange={(event) => setInputConfirmPassword(event.target.value)}
                    />
               </div>
               {loadingHandleSubmit()}
           </form>
        </div>
    )
}