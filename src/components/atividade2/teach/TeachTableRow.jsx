import React from "react";
import { Link } from "react-router-dom";

const TeachTableRow = (props) => {
    const { id, name, university, degree } = props.teach;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td><Link to={`/EditTeach/${id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger">Apagar</button></td>
        </tr>
    )
}

export default TeachTableRow