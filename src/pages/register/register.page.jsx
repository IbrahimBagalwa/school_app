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
                <label>Sexe</label>
                <select className="newUserSelect" name="sexe" id="sexe">
                    <option value="1">Masculin</option>
                    <option value="2">Feminin</option>
                </select>
                </div>
            <div className="newUserItem">
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Services" onChange = {(e)=>setFullName(e.target.value)} />
            </div>
            <div className="newUserItem">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="mileservi@gmail.com" onChange = {(e)=> setEmail(e.target.value)} />
            </div>
            <div className="newUserItem">
                <label htmlFor="phone">Phone</label>
                <input type="tel" placeholder="+243 971 004 914" onChange = {(e)=>setPhone(e.target.value)} />
            </div>
           <div className="newUserItem">
               <label htmlFor="avatar">Avatar</label>
               <input className="avatarInput" type="file" placeholder="img.pjg..." accept="image/*" onChange = {(e)=>onFileChange(e)} />
           </div>
            <div className="newUserItem">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Himbi | Goma" onChange = {(e)=>{setAddress(e.target.value)}} />
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