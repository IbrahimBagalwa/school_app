import React from 'react';
import {Link} from 'react-router-dom';
import './style.register.css'

function RegisterScreen(props) {

    return  (
        <div className="newUser py-2 justify-content-center">
            <h1 className="newUserTitle text-center font-weight-bold py-2">Demande d'inscription</h1>
            <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam cupiditate totam doloremque, 
                aperiam consequuntur nesciunt delectus ipsa inventore architecto tenetur placeat sequi, 
                ab accusantium minus voluptate quibusdam quia, rem vero? Soluta dolores 
                consequuntur ex nostrum fugit voluptatum nisi et esse nobis? Ab a facilis quod!
            </p>
            <form action="" enctype="multipart/form-data"className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="name">Nom <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Wasolela"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="postnom">Post Nom <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Swedi"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="prenom">Prenom <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Peter"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                    <input type="email" placeholder="eleve@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Sexe <span className="text-danger">*</span></label>
                    <select className="newUserSelect" name="sexe" id="sexe">
                        <option value="1">Masculin</option>
                        <option value="2">Feminin</option>
                        <option value="2">Autre</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label htmlFor="date">Date Naissance <span className="text-danger">*</span></label>
                    <input type="text" placeholder="11/05/2019"/>
                </div>
                <div className="newUserItem">
                    <label>Etat Civil <span className="text-danger">*</span></label>
                    <select className="newUserSelect" name="etatCivil" id="etatCivil">
                        <option value="1">Marié(e)</option>
                        <option value="2">Célibataire</option>
                        <option value="3">Divorcé(e)</option>
                        <option value="2">Veuf(ve)</option>
                    </select>
                </div>
                <div className="newUserItem">
                <label htmlFor="avatar">Avatar <span className="text-danger">*</span></label>
                <input className="avatarInput" type="file" placeholder="img.pjg..." accept="image/*"/>
            </div>
            <div className="newUserItem">
                    <label>Classe <span className="text-danger">*</span></label>
                    <select className="newUserSelect" name="idClass" id="idClass">
                        <option value="1">1ere C.O</option>
                        <option value="2">2eme C.O</option>
                        <option value="3">3eme H.P</option>
                        <option value="2">4eme H.P</option>
                        <option value="3">5eme H.P</option>
                        <option value="2">6eme H.P</option>
                    </select>
                </div>
                <div className="newUserItem">
                <label htmlFor="avatar">Copier du diplome de la classe Precedente <span className="text-danger">*</span></label>
                <input className="avatarInput" type="file" placeholder="img.pjg..." accept="image/*"/>
            </div>
                <div className="newUserItem">
                    <label htmlFor="nomCompletTutaire">Nom Complet du tutaire <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Peter Swedi Wasolela" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="emailTutaire">Email tutaire <span className="text-danger">*</span></label>
                    <input type="email" placeholder="tutaire@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="phone">Phone tutaire <span className="text-danger">*</span></label>
                    <input type="tel" placeholder="+243 971 004 914"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Himbi | Goma" />
                </div>
            
                <button type="submit" className="newUserButton">Demande d'inscription</button>

            </form>
        </div>
    )
}

export default RegisterScreen