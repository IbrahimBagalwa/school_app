import React from 'react';
import {Link} from 'react-router-dom';
import './style.register.css'

function RegisterScreen(props) {

    return  (
        <div className="newUser">
        <h1 className="newUserTitle">Demande d'inscription</h1>
        <form action="" enctype="multipart/form-data"className="newUserForm">
            <div className="newUserItem">
                <label htmlFor="name">Nom</label>
                <input type="text" placeholder="Nom"/>
            </div>
            <div className="newUserItem">
                <label htmlFor="postnom">Post Nom</label>
                <input type="text" placeholder="Post nom"/>
            </div>
            <div className="newUserItem">
                <label htmlFor="prenom">Prenom</label>
                <input type="text" placeholder="Prenom"/>
            </div>
            <div className="newUserItem">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email"/>
            </div>
            <div className="newUserItem">
                <label>Sexe</label>
                <select className="newUserSelect" name="sexe" id="sexe">
                    <option value="1">Masculin</option>
                    <option value="2">Feminin</option>
                </select>
            </div>
            <div className="newUserItem">
                <label htmlFor="date">Date Naissance</label>
                <input type="text" placeholder="11/05/2019"/>
            </div>
            <div className="newUserItem">
                <label>Etat Civil</label>
                <select className="newUserSelect" name="etatCivil" id="etatCivil">
                    <option value="1">Marié(e)</option>
                    <option value="2">Célibataire</option>
                    <option value="3">Divorcé(e)</option>
                    <option value="2">Veuf(ve)</option>
                </select>
            </div>
            <div className="newUserItem">
               <label htmlFor="avatar">Avatar</label>
               <input className="avatarInput" type="file" placeholder="img.pjg..." accept="image/*"/>
           </div>
           <div className="newUserItem">
                <label>Classe</label>
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
                <label htmlFor="nomCompletTutaire">Nom Complet du tutaire</label>
                <input type="text" placeholder="Peter Swedi Wasolela" />
            </div>
            <div className="newUserItem">
                <label htmlFor="emailTutaire">Email tutaire</label>
                <input type="email" placeholder="tutaire@gmail.com" />
            </div>
            <div className="newUserItem">
                <label htmlFor="phone">Phone tutaire</label>
                <input type="tel" placeholder="+243 971 004 914"/>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Himbi | Goma" />
            </div>
           
            <div className="newUserItem">
                <label>Role</label>
                <select value={role} onChange={(e) =>{
                    setRole(e.target.value);
                    if(parseInt(e.target.value) === 2) setisconductor(true);
                    else setisconductor(false); 
                }
                } className="newUserSelect" name="active" id="active">
                    <option value="0">Agent</option>
                    <option value="2">Chauffeur</option>
                    <option value="3">Others</option>
                </select>
            </div>
            {
            isconductor ?
            <>
                <div className="newUserItem">
                    <label>Taxis</label>
                    <select value={idcategorie} onChange={(e) =>setCategory(e.target.value)} className="newUserSelect" name="active" id="active">
                        <option value="1">Taxis Voiture</option>
                        <option value="2">Taxis Bus</option>
                        <option value="3">Taxis Moto</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label htmlFor="matricule">Matricule Taxis</label>
                    <input type="text" placeholder="TY-9847-CHS1" onChange = {(e)=>{setMatriculeCar(e.target.value)}} />
                </div> 
            </>
        : <div></div>
        }   
            <button type="submit" className="newUserButton">Create</button>

        </form>
    </div>
    )
}

export default RegisterScreen