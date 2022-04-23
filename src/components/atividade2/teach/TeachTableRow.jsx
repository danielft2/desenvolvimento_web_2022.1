import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TeachTableRow = (props) => {
    const { id, name, university, degree } = props.teach;

    const deleteTeach = (id) => {
        axios.delete(`http://localhost:3001/professors/${id}`)
        .then(response => {
            alert(`O professor ${name} foi deletado`);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td><Link to={`/EditTeach/${id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger" onClick={() => deleteTeach(id)}>Apagar</button></td>
        </tr>
    )
}

export default TeachTableRow