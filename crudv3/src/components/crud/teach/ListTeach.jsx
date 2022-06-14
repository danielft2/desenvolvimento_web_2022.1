import React, {useState, useEffect} from "react";
import TeachTableRow from "./TeachTableRow";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseProfessorsService from "../../../services/FirebaseProfessorsService";

const ListTeachPage = () => {
    return (
        <FirebaseContext.Consumer>
            {(firebase) => <ListTeach firebase={firebase} />}
        </FirebaseContext.Consumer>
    )
}

const ListTeach = ({firebase}) => {
    const generateTable = () => {
        if (!teachs) return
        return teachs.map((teach, key) => {
           return <TeachTableRow teach={teach} key={key} deleteTeachById={deleteTeachById}/>
        })
    }

    const [teachs, setTeachs] = useState([]);

    useEffect(() => {
        // axios.get("http://localhost:3002/api/professors/list")
        // .then(response => {
        //     setTeachs(response.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })

        const firestore = firebase.getFirestoreDb();
        FirebaseProfessorsService.list_onSnapshot(firestore, (professors) => {
            setTeachs(professors);
        })
        
    }, [firebase])

    function deleteTeachById(_id){
        // let teachsTemp = teachs;
        // for(let i = 0; i < teachsTemp.length;i++)
        //     if(teachsTemp[i]._id === _id)
        //         teachsTemp.splice(i,1)
        // setTeachs([...teachsTemp])
        const firestore = firebase.getFirestoreDb();
        FirebaseProfessorsService.delete(firestore, _id);
    }

    return (
        <div>
            <h2 className="title-form">Listar Professores</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Universidade</th>
                    <th>Titulação</th>
                    <th colSpan="2"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
}

export default ListTeachPage;