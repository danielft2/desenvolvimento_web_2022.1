import React, { useState } from "react";

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