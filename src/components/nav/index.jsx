import React from 'react';
import Header from "./hearder";
import Footer from "./footer";

function Nav({children}){

    return(

        <div className="page">
            <div className="nav">
                <div className="nav-header">
                    <Header />
                </div>
                <div className="main">
                    {children}
                </div>
                <div className="nav-footer">
                    < Footer />
                </div>
            </div>
        </div>
    );
}
export default Nav;