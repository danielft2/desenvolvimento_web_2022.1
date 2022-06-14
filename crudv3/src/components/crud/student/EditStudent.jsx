import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentsService from "../../../services/FirebaseStudentsService";

const EditStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            { (firebase) => <EditStudent firebase={firebase}/> }
        </FirebaseContext.Consumer>
    )
}

const EditStudent = ({ firebase }) => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [ira, setIra] = useState(0);
    const param = useParams();
    const firestore = firebase.getFirestoreDb();

    useEffect(() => {
        // axios.get(`http://localhost:3002/api/students/retrive/${param.id}`)
        // .then(response => {
        //     setName(response.data.name);
        //     setCourse(response.data.course);
        //     setIra(response.data.ira)
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        
        
        FirebaseStudentsService.retrive(firestore, param.id, (student) => {
            const {name, course, ira} = student;
            setName(name);
            setCourse(course);
            setIra(ira);
        })

    }, [param.id, firebase])

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Aluno atualizado \nNome: ${name} \ncurso: ${course} \nIRA: ${ira}`);
        const studentAtualizado = {name, course, ira}

        // axios.put(`http://localhost:3002/api/students/edit/${param.id}`, studentAtualizado)
        // .then(response => {
        //     console.log(response.data)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        FirebaseStudentsService.edit(firestore, param.id, studentAtualizado);
    }

    return (
        <div className="formStyle">
            <h2 className="title-form text-center title">Atualizar Estudante</h2>
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
                <div className="form-group mb-2">
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
                    <input type="submit" value="Atualizar Estudante" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )   
}

export default EditStudentPage;