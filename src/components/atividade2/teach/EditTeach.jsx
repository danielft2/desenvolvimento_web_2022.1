import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { teachs } from "./data";

const EditTeach = () => {
    const [name, setName] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');

    const param = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/students/${param.id}`)
        .then(response => {
            setName(response.data.name);
            setUniversity(response.data.course);
            setDegree(response.data.ira);
        })
    }, [param.id])

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Professor Atualizado \nNome: ${name} \nUniversidade: ${university} \nTitulação: ${degree}`);
        
        const teachAtualizado = {name, university, degree};
        axios.put(`http://localhost:3001/professors/${param.id}`, teachAtualizado)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
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

export default EditTeach;