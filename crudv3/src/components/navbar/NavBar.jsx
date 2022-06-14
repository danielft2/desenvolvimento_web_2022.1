import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export function NavBarVeri({ isLogged, firebase, setIsLogged }) {
    return isLogged ? <NavBar firebase={firebase} setIsLogged={setIsLogged}/> : null;
}

const NavBar = ({ firebase, setIsLogged }) => {
    const navigate = useNavigate();

    function logout() {
        firebase.setUser(null);
        setIsLogged(false);
        navigate('/');
    }

    function weolcomeProfile() {
        if(firebase.getUser()) {
            return(
                <>
                   <span className="navProfile pe-2">Bem vindo, Daniel Almeida</span>
                   <button 
                      type="button" 
                      className="btn btn-secondary me-4 py-1 px-3"
                      onClick={() => logout()}
                    >
                       Sair
                    </button>
                </>
            )
        }
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark nav ps-3'>
            <Link to="/" className='navbar-brand'>UFC</Link>
            <div className='collapse navbar-collapse nav-flex' id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                    <li className='navitem'>
                        <Link to="Home" className='nav-link'>Home</Link>
                    </li>

                    <li className='navitem'>
                        <Link to="About" className='nav-link'>About</Link>
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
            <div>
                {weolcomeProfile()}
            </div>
      </nav>
    )
}