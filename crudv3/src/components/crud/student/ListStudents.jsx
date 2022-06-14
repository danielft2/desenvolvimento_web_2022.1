import React, {useEffect, useState} from "react";
import StudentTableRow from "./StudentTableRow";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentsService from "../../../services/FirebaseStudentsService";

const ListStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            { (firebase) => <ListStudent firebase={firebase}/>}
        </FirebaseContext.Consumer>
    )
}

const ListStudent = ({ firebase }) =>{
    function generateTable(){
        if(!students) return
        return students.map((student, key) => {
            return <StudentTableRow student={student} key={key} deleteStudentById={deleteStudentById}/>
        })
    }

    const [students, setStudents] = useState([]);
    useEffect(() => {
        // axios.get("http://localhost:3002/api/students/list")
        // .then(response => {
        //     setStudents(response.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        
        const firestore = firebase.getFirestoreDb();
        FirebaseStudentsService.list_onSnapshot(firestore, (students) => {
            setStudents(students);
        });

    }, [firebase])

    function deleteStudentById(_id){
        const firestore = firebase.getFirestoreDb();
        FirebaseStudentsService.delete(firestore, _id);
    }

    return(
        <div>
            <h2 className="title-form title">Listar Estudante</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>IRA</th>
                    <th colSpan="1"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentPage;