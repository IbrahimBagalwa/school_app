import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { actionRegister, registerAction } from '../../redux/actions/userActions';
import './style.register.css';
import {Button} from 'antd';
import { useSelector } from 'react-redux';
import { LoadingComponent } from '../../utils/loading';
function RegisterScreen(props) {
    const [nom, setNom] = useState('');
    const [postnom, setPostNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [sexe, setSexe] = useState('');
    const [age, setAge] = useState('');
    const [etatCivil, setEtatCivil] = useState('');
    const [avatar, setAvatar] = useState('');
    const [idClass, setClasse] = useState('');
    const [nomCompletTutaire, setNomTut] = useState('');
    const [emailTutaire, setEmailTut] = useState('');
    const [phoneTutaire, setPhoneTut] = useState('');
    const {loading, error} = useSelector(({users: {register}})=>register);
    const dispatch = useDispatch();

    const onFileChange = (e) =>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = () =>{
                setAvatar(reader.result);
                console.log(avatar);
            }
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        actionRegister({
            nom,
            postnom,
            prenom,
            email,
            sexe,
            age,
            etatCivil,
            avatar: avatar,
            idClass: idClass,
            nomCompletTutaire:nomCompletTutaire,
            emailTutaire:emailTutaire,
            phoneTutaire:phoneTutaire
        })(dispatch)
    }

    return  (
        <div className="newUser py-2 justify-content-center">
            {
                loading && 
                <LoadingComponent/>
            }
            <h1 className="newUserTitle text-center font-weight-bold py-2">Demande d'inscription</h1>
            <p className="text-center"><strong >CONDITION D'INSCRIPTION</strong></p>
            <p>1. Pr??senter une Photocopie de bulletin de la promotion montantante ou son ??quivalent <br/>
                2. Se munir de: <br />
                - Une farde chemise en plastique ?? tringle;<br />
                - Attestation de fr??quentation de l'Institution d'origine;
            </p>
            <p>NB: Apres traitement de votre demande si vous admis un email sera envoyer a votre tutaire pour vous en informez</p>
            {
                error &&
                <div className="div-err">{error}</div>
            }
            <form action="" enctype="multipart/form-data"className="newUserForm" onSubmit={submitHandler}>
                <div className="newUserItem">
                    <label htmlFor="name">Nom <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Wasolela" onChange = {(e)=>setNom(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="postnom">Post Nom <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Swedi" onChange ={(e)=>setPostNom(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="prenom">Prenom <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Peter" onChange= {(e)=>setPrenom(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                    <input type="email" placeholder="eleve@gmail.com" onChange = {(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label>Sexe <span className="text-danger">*</span></label>
                    <select className="newUserSelect" name="sexes" id="sexes" value={sexe} onChange={(e)=>{setSexe(e.target.value)}}>
                        <option value="1">Masculin</option>
                        <option value="2">Feminin</option>
                        <option value="3">Autre</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label htmlFor="date">Date Naissance <span className="text-danger">*</span></label>
                    <input type="text" placeholder="11/05/2019" onChange = {(e)=>setAge(e.target.value)}/>
                </div>
                <div className="newUserItem">
                    <label>Etat Civil <span className="text-danger">*</span></label>
                    <select className="newUserSelect" name="etatCivil" id="etatCivil" value={etatCivil} onChange={(e)=>{setEtatCivil(e.target.value)}}  >
                        <option value="1">Mari??(e)</option>
                        <option value="2">C??libataire</option>
                        <option value="3">Divorc??(e)</option>
                        <option value="4">Veuf(ve)</option>
                    </select>
                </div>
                <div className="newUserItem">
                <label htmlFor="avatar">Avatar <span className="text-danger">*</span></label>
                <input className="avatarInput" type="file" placeholder="img.pjg..." accept="image/*" onChange = {(e)=>onFileChange(e)}/>
            </div>
            <div className="newUserItem">
                    <label>Classe <span className="text-danger">*</span></label>
                    <select className="newUserSelect" name="idClasse" id="idClasse" value={idClass} onChange={(e)=>{setClasse(e.target.value)}} >
                        <option value="1">1ere C.O</option>
                        <option value="2">2eme C.O</option>
                        <option value="3">3eme H.P</option>
                        <option value="4">4eme H.P</option>
                        <option value="5">5eme H.P</option>
                        <option value="6">6eme H.P</option>
                    </select>
                </div>
                <div className="newUserItem">
                <label htmlFor="avatar">Photocopie du bulletin de la promotion montantante <span className="text-danger">*</span></label>
                <input className="avatarInput" type="file" placeholder="img.pjg..." accept="image/*" onChange = {(e)=>{onFileChange(e)}}/>
            </div>
                <div className="newUserItem">
                    <label htmlFor="nomCompletTutaire">Nom Complet du tutaire <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Peter Swedi Wasolela" onChange = {(e)=>{setNomTut(e.target.value)}} />
                </div>
                <div className="newUserItem">
                    <label htmlFor="emailTutaire">Email tutaire <span className="text-danger">*</span></label>
                    <input type="email" placeholder="tutaire@gmail.com" onChange = {(e)=>{setEmailTut(e.target.value)}} />
                </div>
                <div className="newUserItem">
                    <label htmlFor="phone">Phone tutaire <span className="text-danger">*</span></label>
                    <input type="tel" placeholder="+243 971 004 914" onChange={(e)=>{setPhoneTut(e.target.value)}} />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Himbi | Goma" />
                </div>
            
                <Button type="primary" loading={loading} htmlType='submit' block className="newUserButton">Demande d'inscription</Button>

            </form>
        </div>
    )
}

export default RegisterScreen