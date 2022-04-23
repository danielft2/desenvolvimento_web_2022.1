import React, {useEffect, useState} from "react";
import StudentTableRow from "./StudentTableRow";
import axios from "axios";

const ListStudent = () =>{
    function generateTable(){
        if(!students) return
        return students.map((student, key) => {
            return <StudentTableRow student={student} key={key}/>
        })
    }

    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/students")
        .then(response => {
            setStudents(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, [])

    return(
        <div>
            <h2 className="title-form">Listar Estudante</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>IRA</th>
                    <th colSpan="2"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
}
export default ListStudent;