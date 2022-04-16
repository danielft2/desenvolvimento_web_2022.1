import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { students } from "./data";

const EditStudent = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [ira, setIra] = useState(0);

    const param = useParams();

    useEffect(() => {
        console.log(param)
        const student = students[param.id];
        setName(student.name);
        setCourse(student.course);
        setIra(student.ira);
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Aluno cadastrado \nNome: ${name} \ncurso: ${course} \nIRA: ${ira}`);
        setName('');
        setCourse('');
        setIra(0);
    }

    return (
        <div>
            <h2 className="title-form">Criar novo Estudante</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="nome" 
                        id="name" 
                        value={(name === null || name === undefined) ? '' : name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Curso</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="nome" 
                        id="name" 
                        value={(course === null || course === undefined) ? '' : course}
                        onChange={(event) => setCourse(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">IRA</label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="nome" 
                        id="name" 
                        value={(ira === null || ira === undefined) ? '' : ira}
                        onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <div className="form-group" style={{paddingTop:10}}>
                    <input type="submit" value="Criar Estudante" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )   
}

export default EditStudent;