import React from "react";
import { teachs } from "./data";
import TeachTableRow from "./TeachTableRow";

const ListTeach = () => {
    const generateTable = () => {
        if (!teachs) return
        return teachs.map((teach, key) => {
           return <TeachTableRow teach={teach} key={key}/>
        })
    }

    return (
        <div>
            <h2 className="title-form">Listar Professores</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Universidade</th>
                    <th>Titulação</th>
                    <th colSpan="2"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
}

export default ListTeach;