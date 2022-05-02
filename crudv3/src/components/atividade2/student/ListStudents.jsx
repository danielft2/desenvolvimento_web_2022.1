import React, {useEffect, useState} from "react";
import StudentTableRow from "./StudentTableRow";
import axios from "axios";

const ListStudent = () =>{
    function generateTable(){
        if(!students) return
        return students.map((student, key) => {
            return <StudentTableRow student={student} key={key} deleteStudentById={deleteStudentById}/>
        })
    }

    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3002/api/students/list")
        .then(response => {
            setStudents(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, [])

    function deleteStudentById(_id){
        let studentsTemp = students
        for(let i = 0; i < studentsTemp.length;i++)
            if(studentsTemp[i]._id === _id)
                studentsTemp.splice(i,1)
        setStudents([...studentsTemp])
    }

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