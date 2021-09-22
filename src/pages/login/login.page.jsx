import React from 'react';
import {Link} from 'react-router-dom';

function SignInScreen(props) {
    

         return  (
             <div className="form">
                 <form action="">
                     <ul className="form-container">
                         <li>
                             <h2>Sign-In</h2>
                         </li>
                         <li>
                             <label htmlFor="email">
                                 Email
                             </label>
                             <input type="email" name="email" id="email" />
                         </li>
                         <li>
                             <label htmlFor="password">
                                 Password
                             </label>
                             <input type="password" id="password" name="password"/>
                         </li>
                         <li>
                             <button type="submit" className="button primary">SignIn</button>
                         </li>
                         <li>
                             New to uzisha
                         </li>
                         <li>
                             <Link to="/register" className="button secondary text-center">Create your uzisha account</Link>
                         </li>
                     </ul>
                 </form>
             </div>
         )
}

export default SignInScreen