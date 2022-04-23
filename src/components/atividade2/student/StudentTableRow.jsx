import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
const StudentTableRow = ({student}) => {
    const {name, course, ira, id} = student;
    
    const deleteStudent = (id) => {
        axios.delete(`http://localhost:3001/students/${id}`)
        .then(response => {
            alert(`Aluno ${name} foi deletado`);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{course}</td>
            <td>{ira}</td>
            <td><Link to={`/EditStudent/${id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger" onClick={() => deleteStudent(id)}>Apagar</button></td>
        </tr>
    )
}

export default StudentTableRow;