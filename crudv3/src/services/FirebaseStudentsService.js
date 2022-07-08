import { collection, getDocs, addDoc, getDoc, doc, deleteDoc, setDoc, onSnapshot, query, orderBy } from 'firebase/firestore'

class FirebaseStudentsService {
    static list = (firestore, callback) => {
        const coll = collection(firestore, 'students');
        getDocs(coll)
        .then(
            (querrySnapshot) => {
                let students = [];
                querrySnapshot.forEach((doc) => {
                    students.push(
                        {
                            _id: doc.id,
                            name: doc.data().name,
                            course: doc.data().course,
                            ira: doc.data().ira
                        }
                    )
                })
                callback(students);
            }
        )
        .catch(error => console.log(error))
    }

    static list_onSnapshot = (firestore, callback) => {
        const coll = collection(firestore, 'students');
        const q = query(coll, orderBy('name'));
        onSnapshot(q, (querySnapshot) => {
            let students = [];
            querySnapshot.forEach((doc) => {
                students.push(
                    {
                        _id: doc.id,
                        name: doc.data().name,
                        course: doc.data().course,
                        ira: doc.data().ira
                    }
                )
            })
            callback(students);
        })
    }

    static create(firestore, user, callback) {
        const {name, course, ira} = user;
        const coll = collection(firestore, 'students');
        addDoc(coll, {
            name,
            course,
            ira
        })
        .then((response) => {
            callback(true, response.id)
            console.log(response)
        })
        .catch(error => {
            callback(false, error.code)
        })
    }

    static delete(firestore, _id) {
        const document = doc(firestore, "students", _id);
        deleteDoc(document)
        .then(response => console.log('sucess'))
        .catch(error => console.log(error))
    }

    static edit(firestore, _id, newDados, callback) {
        const document = doc(firestore, "students", _id);
        setDoc(document, newDados)
        .then(() => {
            callback(true, newDados);
        })
        .catch(error => {
            callback(false, error.code)
        });
    }

    static retrive(firestore, _id, callback) {
        const document = doc(firestore, "students", _id);
        getDoc(document)
        .then((document) => {
            callback(document.data());
        })
        .catch(error => console.log(error))
    }
}

export default FirebaseStudentsService;