import React, {Suspense, lazy, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

export const renderRoutes = (routes) => {
    return(
        <Suspense fallback={<div>Please Wait...</div>}>
            <Switch>
                {routes.map( (route, index) => {
                    const Component = route.component
                    const Gaurd = route.gaurd || Fragment
                    return(
                        <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        render={ (props) => (
                            <Gaurd>
                                <Component {...props} />
                            </Gaurd>
                        )}
                        />
                    )
                })}
            </Switch>
        </Suspense>
    )
}

export const routes = [
    {
        exact: true,
        path: '/',
        // gaurd: '',
        component: lazy(() => import('./pages/Landing'))
    }
]