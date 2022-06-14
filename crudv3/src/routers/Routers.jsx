import React from "react";
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../components/login/Login';
import Home from '../components/Home';
import About from '../components/About';
import CreateStudent from '../components/crud/student/CreateStudent';
import ListStudents from '../components/crud/student/ListStudents';
import EditStudent from '../components/crud/student/EditStudent';
import CreateTeach from '../components/crud/teach/CreateTeach';
import ListTeach from '../components/crud/teach/ListTeach';
import EditTeach from '../components/crud/teach/EditTeach';
import { PrivateRouter } from "./PrivateRouter";

export const Routers = ({ isLogged, setIsLogged }) => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage isLogged={isLogged} setIsLogged={setIsLogged} />} />
   
            <Route path="/Home" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/Home" element={<Home />} />
            </Route>
            <Route path="/About" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/About" element={<About />} />
            </Route>
            
            <Route path="/CreateStudent" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/CreateStudent" element={<CreateStudent />} />
            </Route>
            <Route path="/ListStudent" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/ListStudent" element={<ListStudents />} />
            </Route>
            <Route path="/EditStudent/:id" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/EditStudent/:id" element={<EditStudent />} />
            </Route>
            
            <Route path="/CreateTeach" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/CreateTeach" element={<CreateTeach />} />
            </Route>
            <Route path="/ListTeach" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/ListTeach" element={<ListTeach/>} />
            </Route>
            <Route path="/EditTeach/:id" element={<PrivateRouter isLogged={isLogged} />} >
                <Route path="/EditTeach/:id" element={<EditTeach/>} />
            </Route>
        </Routes>
    )
}