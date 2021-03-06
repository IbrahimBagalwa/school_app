import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';

function Header() {


    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top title">
            <div className="container-fluid">
                <Link className="navbar-brand fst-italic navbar-right mr-5" to="/">NDAHURA HIGTH SCHOOL</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end float-left" id="navbarColor02">
                    <ul className="navbar-nav">
                       
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Accueil</Link>
                            </li>
                            <li className="nav-item drop-down">
                                <Link className="nav-link" to='/valve'>Valve</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>Ndahura-Goma</Link>
                            </li>
                       
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Se connecter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Demande d'inscription</Link> 
                            </li> 
                           
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header