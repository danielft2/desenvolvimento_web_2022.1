import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TeachTableRow = (props) => {
    const { _id, name, university, degree } = props.teach;

    const deleteTeach = (id) => {
        if(window.confirm(`Deseja mesmo excluir o elemento correspondente ao ID: ${_id}?`)){
            axios.delete(`http://localhost:3002/api/professors/delete/${_id}`)
            .then( response => 
                props.deleteTeachById(_id)   
            )
            .catch(error=>console.log(error))
        }
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td><Link to={`/EditTeach/${_id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger" onClick={() => deleteTeach(_id)}>Apagar</button></td>
        </tr>
    )
}

export default TeachTableRow