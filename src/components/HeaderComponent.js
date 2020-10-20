import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomeComponent from './HomeComponent';

function HeaderComponent() {

    return(
        <BrowserRouter>
            <div className="headerNavbar">
                <Link to="/">Home</Link>
            </div>

            <Switch>
                <Route path="/" component={HomeComponent} />
            </Switch>
        </BrowserRouter>
    )

}

export default HeaderComponent
