import { unProtectedRoutes, protectedRoutesWithoutNav } from "../helpers/getRoutes";

function Routes(){
    return(
        <Router>
            <Switch>
                {
                    unProtectedRoutes.map(route =>(
                        <Route key={route.name} exact={route.exact} path={route.path} component={route.component} />
                    ))
                }
                
                    {/* <LoadingComponent /> */}
                    {protectedRoutesWithoutNav.map(route =>(
                        <Route path={route.path} exact={route.exact} key={route.name} render={() =>(
                            
                            <route.component />
                        )} />
                    ))}
          
                    {/* <LoadingComponent /> */}
                        <Nav>
                            {protectedRoutes.map(route =>(
                                <Route path={route.path} exact={route.exact} key={route.name} render={() =>(
                                        <route.component />
                                )} />
                            ))}
                        </Nav>
                
            </Switch>
        </Router>
    );
};

export default Routes;