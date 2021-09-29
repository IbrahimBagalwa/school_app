import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { loginAction } from '../../redux/actions/userActions';
import {Button} from 'antd'
function SignInScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const {loading, error} = useSelector(({users: {login}})=>login);

    const submitHandler = (e)=>{
        e.preventDefault();
        loginAction({
            email:email, 
            password:password
        })(dispatch)
    }

         return  (
             <div className="form">
                 <form action="" onSubmit={submitHandler}>
                     <ul className="form-container">
                         <li>
                             <h2>Sign-In</h2>
                         </li>
                         {loading && <li>chargement....</li>}
                         {
                             error && 
                             <div className="div-error"> {error} </div>
                         }
                         <li>
                             <label htmlFor="email">
                                 Email ou Phone
                             </label>
                             <input type="tel" name="email" id="email" onChange ={(e)=>setEmail(e.target.value)} />
                         </li>
                         <li>
                             <label htmlFor="password">
                                 Password
                             </label>
                             <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                         </li>
                         <li>
                             <Button type="primary" loading={loading} htmlType='submit' block className="button primary">SignIn</Button>
                         </li>
                         <li>
                             Nouveau à Ndahuru
                         </li>
                         <li>
                             <Link to="/register" className="button secondary text-center">Demander l'incription</Link>
                         </li>
                     </ul>
                 </form>
             </div>
         )
}

export default SignInScreen