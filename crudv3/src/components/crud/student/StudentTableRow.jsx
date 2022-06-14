//import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
const StudentTableRow = (props) => {
    const {name, course, ira, _id} = props.student;
    
    const deleteStudent = (_id) => {
        if(window.confirm(`Deseja mesmo excluir o elemento correspondente ao ID: ${_id}?`)){
            // axios.delete(`http://localhost:3002/api/students/delete/${_id}`)
            // .then(response=>{
            //     props.deleteStudentById(_id)
            // })
            // .catch(error=>console.log(error))

            props.deleteStudentById(_id)
        }
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{course}</td>
            <td>{ira}</td>
            <td>
                <Link to={`/EditStudent/${_id}`} className="btn btn-warning">Editar</Link>
                <button className="btn btn-danger ms-2" onClick={() => deleteStudent(_id)}>Apagar</button>
            </td>
        </tr>
    )
}

export default StudentTableRow;