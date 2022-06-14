//import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import { teachs } from "./data";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseProfessorsService from "../../../services/FirebaseProfessorsService";

const EditTeachPage = () => {
    return(
        <FirebaseContext.Consumer>
            {(firebase) => <EditTeach firebase={firebase} />}
        </FirebaseContext.Consumer>
    )
}

const EditTeach = ({ firebase }) => {
    const [name, setName] = useState('');
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');

    const param = useParams();

    useEffect(() => {
        // axios.get(`http://localhost:3002/api/professors/retrive/${param.id}`)
        // .then(response => {
        //     setName(response.data.name);
        //     setUniversity(response.data.university);
        //     setDegree(response.data.degree);
        // })
        // .catch(error => console.log(error))
        const firestore = firebase.getFirestoreDb();
        FirebaseProfessorsService.retrive(firestore, param.id, (professor) => {
            const { name, university, degree } = professor;
            
            setName(name);
            setUniversity(university);
            setDegree(degree)
        });
    }, [param.id, firebase])

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Professor Atualizado \nNome: ${name} \nUniversidade: ${university} \nTitulação: ${degree}`);
        
        const teachAtualizado = {name, university, degree};
        // axios.put(`http://localhost:3002/api/professors/edit/${param.id}`, teachAtualizado)
        // .then(response => {
        //     console.log(response.data)
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        const firestore = firebase.getFirestoreDb();
        FirebaseProfessorsService.edit(firestore, param.id, teachAtualizado);
    }

    return (
        <div className="formStyle">
            <h2 className="title-form text-center title">Atualizar Professor</h2>
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
                <div className="form-group pt-2">
                    <input type="submit" value="Atualizar Professor" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default EditTeachPage;