import React, {useState, useEffect} from "react";
import axios from 'axios';

const CreateStudent = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [ira, setIra] = useState(0);
    const newStudent = {name, course, ira};

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3002/api/students/create", newStudent)
        .then((response) => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <h2 className="title-form">Criar novo Estudante</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{marginBottom: 5}}>
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
                <div className="form-group" style={{marginBottom: 5}}>
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
                <div className="form-group" style={{marginBottom: 5}}>
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

export default CreateStudent;