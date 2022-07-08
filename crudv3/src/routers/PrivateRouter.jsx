import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import FirebaseContext from '../utils/FirebaseContext';

export function PrivateRouter({ isLogged }) {
    const firebase = useContext(FirebaseContext)
    const isEmailVerified = (firebase.getUser() != null) ? firebase.getUser().emailVerified : false;
 
    if(isLogged && isEmailVerified) {
        return <Outlet />
    } else {
        let msg = "Verifique seu email e realize o login."
        if (!isEmailVerified && !isLogged) msg = "Acesso restrito, Realize o Login na página."

        return (
            <div className="text-center pt-5">
                <h3>{msg}</h3>
            </div>
        )
    }
}