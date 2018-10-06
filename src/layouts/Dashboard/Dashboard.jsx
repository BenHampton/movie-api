import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "../../component/Sidebar/Sidebar";
import {Col, Row} from "react-bootstrap";
import dashboardRoutes from "../../routes/dashboard.jsx";
import Header from "../../component/Header/Header";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

import '../../../node_modules/primeicons/fonts/primeicons.svg'
import '../../../node_modules/primereact/resources/primereact.css'
import '../../../node_modules/primeflex/primeflex.css'
import '../../../node_modules/primeicons/primeicons.css'
import '../../component/Header/css/header.css'
import '../../component/PopularMovies/css/movie.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    };
  render() {

    return (
      <div className="p-grid p-nogutter ">
          <div className={'p-col-12'} style={{background: 'red'}}>
                <Header/>
          </div>
          <div className={'p-grid p-col-12 p-nogutter p-align-stretch vertical-container sidebar'}>
              <div className={'p-col-2'} style={{background: 'blue'}}>
                  <Sidebar {...this.props} className={'sidebar'}/>
              </div>
              <Switch>
                  <div className={'p-col-10'} style={{background: 'green'}}>
                      {dashboardRoutes.map((prop, key) => {
                          if (prop.name === "Notifications")
                            return (
                              <Route
                                path={prop.path}
                                key={key}
                                render={routeProps => (
                                  <prop.component
                                    {...routeProps}
                                  />
                                )}
                              />
                            );
                          if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />;
                          return (
                                <Route path={prop.path} component={prop.component} key={key} />
                          );
                      })}
                  </div>
              </Switch>
          </div>
      </div>
    );
  }
}

export default Dashboard;
