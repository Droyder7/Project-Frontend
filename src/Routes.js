import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './User/SignUp'
import Login from './User/Login'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={} /> */}
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={Login} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
