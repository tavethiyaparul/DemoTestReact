import React from 'react'
import ResponsiveDrawer from "./ResponsiveDrawer"
import EmpDetails from './EmpDetails'
import EmpForm from './EmpForm'
import { Route, Switch } from "react-router-dom";
import Details from './Details';
import Demo from './Demo'
const Header = () => {
    return (
        <>
            {/* <Demo /> */}
            <ResponsiveDrawer>
                <Switch>
                    <Route exact path='/emp' component={EmpDetails} />
                    <Route exact path='/form' component={EmpForm} />
                    <Route exact path='/emp/:id' component={Details} />
                </Switch>
            </ResponsiveDrawer>
        </>
    )
}

export default Header