import { signInWithEmailAndPassword } from 'firebase/auth'

export default class FirebaseUserService {
    static login = (authentication, login, password, callback) => {
        signInWithEmailAndPassword(authentication, login, password)
        .then((userCredential) => {
            callback(userCredential.user)
        })
        .catch((error) => {
            console.log(error)
            callback(null);
        })
    }

    static logout = (authentication, callback) => {
        
    }
}