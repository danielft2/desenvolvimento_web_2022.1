import React, { useState } from "react";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseProfessorsService from "../../../services/FirebaseProfessorsService";

const CreateTeachPage = () => {
    return(
        <FirebaseContext.Consumer>
            {(firebase) => <CreateTeach firebase={firebase} />}
        </FirebaseContext.Consumer>
    )
}

const CreateTeach = ({ firebase }) => {
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
        // axios.post(`http://localhost:3002/api/professors/create`, newProfessor)
        // .then(response => console.log(response.data))
        // .catch( error => console.log(error))
        const firestore = firebase.getFirestoreDb();
        FirebaseProfessorsService.create(firestore, newProfessor);
    }

    return (
        <div className="formStyle">
            <h2 className="title-form text-center title">Criar novo Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
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
                <div className="form-group mb-2">
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
                <div className="form-group">
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
                <div className="form-group mt-2">
                    <input type="submit" value="Criar Professor" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateTeachPage;