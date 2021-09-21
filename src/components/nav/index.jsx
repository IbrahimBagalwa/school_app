import Header from "./hearder";

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
                    <SideBarMob />
                </div>
            </div>
        </div>
    );
}