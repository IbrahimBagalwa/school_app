import React from 'react';
import { unProtectedRoutes, protectedRoutesWithoutNav, protectedRoutes, unProtectedRoutesWithoutNav, unProctedRoutesAdmin, unProtectedRoutesWithoutNavAdmin } from "../helpers/getRoutes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/nav";
import NavAdmin from '../admin/componnent/navBar/navAdm';

function Routes(){
    return(
        <Router>
            <Switch>
                {
                    protectedRoutes.map(route =>(
                        
                            <Route key={route.name} exact={route.exact} path={route.path} component={route.component} />
                    ))
                }
                
                {
                    protectedRoutesWithoutNav.map(route =>(
                        <Route path={route.path} exact={route.exact} key={route.name} render={() =>(
                            
                            <route.component />
                        )} />
                    ))
                }
                {
                    unProtectedRoutes.map(route =>(
                        <Route path={route.path} exact={route.exact} key={route.name} render={() =>(
                            <route.component />
                        )} />
                    ))
                }
                 {
                    unProctedRoutesAdmin.map(route =>(
                        <Route path={route.path} exact={route.exact} key={route.name} render={()=>(
                            <route.component />
                        )} />
                    ))
                }          
                <Nav>
                    {unProtectedRoutesWithoutNav.map(route =>(
                        <Route path={route.path} exact={route.exact} key={route.name} render={() =>(
                            
                            <route.component />
                        )} />
                    ))}
                </Nav>
                <NavAdmin>
                {
                    unProtectedRoutesWithoutNavAdmin.map(route =>(
                        <Route path={route.path} exact={route.exact} key={route.name} render={()=>(
                            <route.component />
                        )} />
                    ))
                }
                </NavAdmin>
            </Switch>
        </Router>
    );
};

export default Routes;