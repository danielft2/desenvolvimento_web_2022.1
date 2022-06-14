import React, { useState } from "react";
//import axios from 'axios';

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentsService from "../../../services/FirebaseStudentsService";
import { useNavigate } from "react-router-dom";

const CreateStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            { (firebase) => <CreateStudent firebase={firebase}/> }
        </FirebaseContext.Consumer>
    )
}

const CreateStudent = ({ firebase }) => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [ira, setIra] = useState(0);
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //axios.post("http://localhost:3002/api/students/create", newStudent)
        // .then((response) => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        const newStudent = {name, course, ira};
        const firestore = firebase.getFirestoreDb();
        FirebaseStudentsService.create(firestore, newStudent);
        //navigate('/ListStudent')
    }

    return (
        <div className="formStyle">
            <h2 className="title-form text-center pb-1 title">Criar novo Estudante</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
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
                <div className="form-group mb-2" style={{marginBottom: 5}}>
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

export default CreateStudentPage;