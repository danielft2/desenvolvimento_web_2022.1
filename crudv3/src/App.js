import { Component, useState } from 'react';
import './App.css';
import { Routes, Route, Links, Link, Router } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

import Home from './components/Home';
import About from './components/About';
import CreateStudent from './components/atividade2/student/CreateStudent';
import ListStudents from './components/atividade2/student/ListStudents';
import EditStudent from './components/atividade2/student/EditStudent';
import CreateTeach from './components/atividade2/teach/CreateTeach';
import ListTeach from './components/atividade2/teach/ListTeach';
import EditTeach from './components/atividade2/teach/EditTeach';

/*import IMC from './components/imc/IMC';
import IMCClasse from './components/imc/IMCClasse';
import Pai from './components/filhopai/Pai';
import CidadeSimples from './components/cidades/CIdadeSimples';
import CidadeComClasse from './components/cidades/CidadeComClasse';
import World from './components/atividade02/components/World';
import Arena from './components/atividade02/components/Arena';
import Hero from './components/atividade02/components/Hero';
import Enemy from './components/atividade02/components/Enemy';
import Contador from './components/hooks/Contador';
*/

//UseState
// function App() {
//   return (
//     <div className='App'>
//       <Contador/>
//     </div>
//   )
// }

function App() {
  return (
    <div className='container-fluid container-reset'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark nav'>
        <Link to="/" className='navbar-brand'>UFC</Link>
        <div className='collapse navbar-collapse nav-flex' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='navitem'>
              <Link to="/" className='nav-link'>
                Home
              </Link>
            </li>

            <li className='navitem'>
              <Link to="About" className='nav-link'>
                About
              </Link>
            </li>

            <li className='navitem' id="navbarNavDarkDropdown">
              <NavDropdown id="nav-dropdown-dark" title="Students" menuVariant="dark">
                <NavDropdown.Item>
                  <Link to="CreateStudent" className='nav-link'>Create Student</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="ListStudent" className='nav-link'>List Student</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>

            <li className='navitem' id="navbarNavDarkDropdown">
              <NavDropdown id="nav-dropdown-dark" title="Teachs" menuVariant="dark">
                <NavDropdown.Item>
                  <Link to="CreateTeach" className='nav-link'>Create Teach</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="ListTeach" className='nav-link'>List Teach</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="CreateStudent" element={<CreateStudent />} />
        <Route path="ListStudent" element={<ListStudents />} />
        <Route path="EditStudent/:id" element={<EditStudent />} />
        <Route path="CreateTeach" element={<CreateTeach/>}/>
        <Route path="ListTeach" element={<ListTeach/>}/>
        <Route path="EditTeach/:id" element={<EditTeach/>} />
      </Routes>
    </div>
  )
}

/*function App() {
  return (
    <div className='App'>
      <div className='App-item'>
        <World>
          <Arena arena="Old Trafod">
            <Hero nome="Daniel Almeida"/>
            <Enemy nome="Pedro Junior"/>
          </Arena>
          <Arena arena="Alianz Parque">
            <Hero nome="João Lucas"/>
            <Enemy nome="Leticia"/>
          </Arena>
        </World>
      </div>
    </div> 
  )
}*/

/*function App() {
  return (
    <div>
      <Casa>
        <Personagem nome="Arya" casa="Stark"/>
        <Personagem nome="Tyrion" casa="Lennister"/>
        <Personagem nome="Jonh" casa="Stark"/>
      </Casa>
    </div>
  )
}
*/

//Props nos childrens
/*function App() {
  return (
    <div>
      <Casa casa="Stark" horario="nobre">
        <Personagem nome="Arya"/>
        <Personagem nome="Tyrion"/>
        <Personagem nome="Jonh"/>
      </Casa>
    </div>
  )
}*/

export default App;
