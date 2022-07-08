import React, { useState } from "react";
import { toast } from 'react-toastify';
import { validateFieldsStudent } from "../../../auth/validations/validateFieldsStudent";
import { useNavigate } from "react-router-dom";
import { ButtonSpinner } from "../../ButtonSpinner";


import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentsService from "../../../services/FirebaseStudentsService";

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
    const [loading, setLoading] = useState(false);
    const [validate, setValidate] = useState({ name: '', course:' ', ira: 0 });

    const navigate = useNavigate()

    const validateInputs = () => {
        const { res, msg, validate } = validateFieldsStudent(name, course, ira);
        setValidate(validate);
    
        if (res) {
            setLoading(false);
            return true;
        } else {
            toast.error(msg);
            setLoading(false);
            return false;
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateInputs()) return;
        setLoading(true);

        //axios.post("http://localhost:3002/api/students/create", newStudent)
        // .then((response) => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        const newStudent = {name, course, ira};
        const firestore = firebase.getFirestoreDb();
        FirebaseStudentsService.create(firestore, newStudent, (res, content) => {
            setLoading(false);

            if(res) {  
                toast.success(`${name} criado(a) com sucesso.`);
                navigate('/ListStudent')
            } else {
                toast.error(content);
            }
        });
        
    }

    return (
        <div className="formStyle">
            <h2 className="title-form text-center pb-1 title">Criar novo Estudante</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="name">Nome</label>
                    <input 
                        className={`form-control ${validate.name}`}
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
                        className={`form-control ${validate.course}`}
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
                        className={`form-control ${validate.ira}`}
                        type="number" 
                        name="nome" 
                        id="name" 
                        value={(ira === null || ira === undefined) ? '' : ira}
                        onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <ButtonSpinner loading={loading} text="Criar estudante"/>
            </form>
        </div>
    )
}

export default CreateStudentPage;