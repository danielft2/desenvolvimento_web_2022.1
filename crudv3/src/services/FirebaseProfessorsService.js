import { collection, getDocs, addDoc, getDoc, doc, deleteDoc, setDoc, onSnapshot, query, orderBy } from 'firebase/firestore'

class FirebaseProfessorsService {
    static list = (firestore, callback) => {
        // Modelo com o async e await

        const coll = collection(firestore, 'professors');
        async function docs() {
            let professors = [];
            const querrySnapshot = await getDocs(coll);
            try {
                querrySnapshot.forEach((doc) => {
                    professors.push(
                        {
                            _id: doc.id,
                            name: doc.data().name,
                            university: doc.data().university,
                            degree: doc.data().degree
                        }
                    )
                })
                callback(professors);
            } catch (error) {
                console.log(error);
            }  
        }

        docs();
    }

    static list_onSnapshot = (firestore, callback) => {
        const coll = collection(firestore, 'professors');
        const q = query(coll, orderBy('name'));
        onSnapshot(q, (querySnapshot) => {
            let professors = [];
            querySnapshot.forEach((doc) => {
                professors.push(
                    {
                        _id: doc.id,
                        name: doc.data().name,
                        university: doc.data().university,
                        degree: doc.data().degree
                    }
                )
            })
            callback(professors);
        })
    }

    static create(firestore, user, callback) {
        const {name, university, degree} = user;
        const coll = collection(firestore, 'professors');
        async function adicionarDoc() {
            try {
                const docCriado = await addDoc(coll, {
                    name,
                    university,
                    degree
                })

                callback(true, docCriado);
            } catch(error) {
                callback(false, error.code)
            }
        }

        adicionarDoc();
    }

    static delete(firestore, _id) {
        const document = doc(firestore, "professors", _id);
        deleteDoc(document)
        .then(response => console.log('sucess'))
        .catch(error => console.log(error))
    }

    static edit(firestore, _id, newDados, callback) {
        const document = doc(firestore, "professors", _id);
        setDoc(document, newDados)
        .then(() => {
            callback(true, newDados);
        })
        .catch(error => {
            callback(false, error.code);
        });
    }

    static retrive(firestore, _id, callback) {
        const document = doc(firestore, "professors", _id);
        const d = getDoc(document)
        .then((document) => {
            callback(document.data());
        })
        .catch(error => console.log(error))
    }
}

export default FirebaseProfessorsService;