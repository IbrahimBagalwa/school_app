import React from 'react';
import Header from "./hearder";
import Footer from "./footer";
import { LoadingComponent } from '../../utils/loading';

function Nav({children}){

    return(
    <>
        {/* <LoadingComponent/> */}
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
    </>
    );
}
export default Nav;