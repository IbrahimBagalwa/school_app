import React from 'react';
import {Link} from 'react-router-dom';
import { register } from '../redux/actions/userActions';

function RegisterScreen(props) {

         return  (
             <div className="form">
                 <form action="">
                     <ul className="form-container">
                         <li>
                             <h2>Create Account</h2>
                         </li>
                         <li>
                             <label htmlFor="name">
                                 Name
                             </label>
                             <input type="name" name="name" id="name" />
                         </li>
                         <li>
                             <label htmlFor="email">
                                 Email
                             </label>
                             <input type="email" name="email" id="email"/>
                         </li>
                         <li>
                             <label htmlFor="password">
                                 Password
                             </label>
                             <input type="password" id="password" name="password"/>
                         </li>
                         <li>
                             <label htmlFor="rePassword">
                                 Confirm Password
                             </label>
                             <input type="password" id="rePassword" name="rePassword"/>
                         </li>
                         <li>
                             <button type="submit" className="button primary">Register</button>
                         </li>
                         <li>
                             All ready have account? <Link to='/signin'>Sign-in</Link>
                         </li>
                     </ul>
                 </form>
             </div>
         )
}

export default RegisterScreen