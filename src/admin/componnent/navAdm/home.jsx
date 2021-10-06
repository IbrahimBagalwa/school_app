import React from 'react'
import { Route, Router, Switch } from 'react-router'
import { protectedRoutesAdmin, protectedRoutesWithoutNavAdmin, unProtectedRoutesWithoutNavAdmin } from '../../../helpers/getRoutes'
import NavAdm from './navAdm'

export default function HomeAdmin() {
    return (

                <NavAdm>
                    <div className="home">
                        <div className="homeWidget">
                            {unProtectedRoutesWithoutNavAdmin.map(route =>(
                                <Route path={route.path} exact={route.exact} key={route.name} render={() =>(
                                    
                                    <route.component />
                                )} />
                            ))}
                        </div>
                    </div>
                </NavAdm>
    )
}
