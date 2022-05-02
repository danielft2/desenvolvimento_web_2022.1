import React, {useState, useEffect} from "react";
import { teachs } from "./data";
import TeachTableRow from "./TeachTableRow";
import axios from "axios";

const ListTeach = () => {
    const generateTable = () => {
        if (!teachs) return
        return teachs.map((teach, key) => {
           return <TeachTableRow teach={teach} key={key} deleteTeachById={deleteTeachById}/>
        })
    }

    const [teachs, setTeachs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/api/professors")
        .then(response => {
            setTeachs(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    function deleteTeachById(_id){
        let teachsTemp = teachs;
        for(let i = 0; i < teachsTemp.length;i++)
            if(teachsTemp[i]._id === _id)
                teachsTemp.splice(i,1)
        setTeachs([...teachsTemp])
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