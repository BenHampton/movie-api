import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import indexRoutes from "routes/index";

ReactDOM.render(
    <HashRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })}
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
