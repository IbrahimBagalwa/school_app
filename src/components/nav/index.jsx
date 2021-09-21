import Header from "./hearder";
import Footer from "./footer";

export default function Nav({children}){

    return(

        <div className="page">
            <div className="nav">
                <div className="nav-header">
                    <Header />
                </div>
                <div className="content">
                    {children}
                </div>
                <div className="nav-footer">
                    < Footer />
                </div>
            </div>
        </div>
    );
}