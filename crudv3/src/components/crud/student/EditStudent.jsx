import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { validateFieldsStudent } from "../../../auth/validations/validateFieldsStudent";
import { ButtonSpinner } from "../../ButtonSpinner";

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
    const [loading, setLoading] = useState(false);
    const [validate, setValidate] = useState({ name: '', course:' ', ira: 0 });
    
    const navigate = useNavigate()
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
   
        // axios.put(`http://localhost:3002/api/students/edit/${param.id}`, studentAtualizado)
        // .then(response => {
        //     console.log(response.data)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        const studentAtualizado = { name, course, ira }
        FirebaseStudentsService.edit(firestore, param.id, studentAtualizado, (res, content) => {
            setLoading(false);
            
            if(res) {
                toast.success(`${name} alterado com sucesso`);
                navigate('/ListStudent')
            } else {
                console.log("teste");
                toast.error(content);
            }
        });
    }

    return (
        <div className="formStyle">
            <h2 className="title-form text-center title">Atualizar Estudante</h2>
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
                <div className="form-group mb-2">
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
                <div className="form-group">
                    <label htmlFor="name">IRA</label>
                    <input 
                        className={`form-control ${validate.ira}`}
                        type="text" 
                        name="nome" 
                        id="name" 
                        value={(ira === null || ira === undefined) ? '' : ira}
                        onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <ButtonSpinner loading={loading} text="Atualizar estudante" />
            </form>
        </div>
    )   
}

export default EditStudentPage;