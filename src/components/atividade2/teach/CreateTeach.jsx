import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateTeach = () => {
    const [name, setName] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Professor cadastrado \nNome: ${name} \nUniversidade: ${university} \nDegree: ${degree}`);
        setName('');
        setUniversity('');
        setDegree('');

        const newProfessor = {name, university, degree};
        axios.post("http://172.18.104.241:3001/professors", newProfessor)
        .then(response => console.log(response.data))
        .catch( error => console.log(error))
    }

    return (
        <div>
            <h2 className="title-form">Criar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{marginBottom: 5}}>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="Nome" 
                        id="name" 
                        value={(name === null || name === undefined) ? '' : name}
                        className="form-control"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group" style={{marginBottom: 5}}>
                    <label htmlFor="university">Universidade</label>
                    <input 
                        type="text" 
                        name="Nome" 
                        id="university" 
                        value={(university === null || university === undefined) ? '' : university}
                        className="form-control"
                        onChange={(event) => setUniversity(event.target.value)}
                    />
                </div>
                <div className="form-group" style={{marginBottom: 5}}>
                    <label htmlFor="degree">Titulação</label>
                    <input 
                        type="text" 
                        name="Nome" 
                        id="degree" 
                        value={(degree === null || degree === undefined) ? '' : degree}
                        className="form-control"
                        onChange={(event) => setDegree(event.target.value)}
                    />
                </div>
                <div className="form-group" style={{paddingTop:10}}>
                    <input type="submit" value="Criar Professor" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateTeach;