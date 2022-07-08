import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default class FirebaseUserService {
    static login = (authentication, login, password, callback) => {
        signInWithEmailAndPassword(authentication, login, password)
        .then((userCredential) => {
            callback(true, userCredential.user)
        })
        .catch((error) => {
            console.log(error)
            callback(false, error.code);
        })
    }

    static createUser = (authentication, login, password, callback) => {
        createUserWithEmailAndPassword(authentication, login, password)
        .then((userCredential) => {
            sendEmailVerification(authentication.currentUser)
            .then(() => {
                callback(true, userCredential.user);
            })
            .catch(error => {
                console.log(error)
                callback(false, error.code);
            })
            
        })
        .catch(error => {
            console.log(error)
            callback(false, error.code);
        })
    }

    static logout = (authentication, callback) => {
        
    }
}