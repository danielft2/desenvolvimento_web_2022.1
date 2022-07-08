import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { validateFieldsProfessor } from "../../../auth/validations/validatesFieldsProfessor";
import { ButtonSpinner } from "../../ButtonSpinner";

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
    const [loading, setLoading] = useState(false);
    const [validate, setValidate] = useState({ name: '', university:'', degree: '' });

    const navigate = useNavigate()

    const validateInputs = () => {
        const { res, msg, validate } = validateFieldsProfessor(name, university, degree);
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

        // axios.post(`http://localhost:3002/api/professors/create`, newProfessor)
        // .then(response => console.log(response.data))
        // .catch( error => console.log(error))

        const newProfessor = { name, university, degree };
        const firestore = firebase.getFirestoreDb();
        FirebaseProfessorsService.create(firestore, newProfessor, (res, content) => {
            setLoading(false);

            if(res) {
                toast.success(`${name} criado com sucesso.`);
                navigate('/ListTeach');
            } else {
                toast.error(content);
            }
        });
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
                        className={`form-control ${validate.name}`}
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
                        className={`form-control ${validate.university}`}
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
                        className={`form-control ${validate.degree}`}
                        onChange={(event) => setDegree(event.target.value)}
                    />
                </div>
                <ButtonSpinner loading={loading} text="Criar professor" />
            </form>
        </div>
    )
}

export default CreateTeachPage;