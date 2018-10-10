import React, { Component } from "react";
import {Route, Switch, Redirect, Link} from "react-router-dom";

import Sidebar from "../../component/Sidebar/Sidebar";

import dashboardRoutes from "../../routes/dashboard.jsx";
import Header from "../../component/Header/Header";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

import '../../../node_modules/primeicons/fonts/primeicons.svg'
import '../../../node_modules/primereact/resources/primereact.css'
import '../../../node_modules/primeflex/primeflex.css'
import '../../../node_modules/primeicons/primeicons.css'
import '../../component/Header/css/header.css'

import '../../component/PopularMovies/css/movies.css';
import '../../component/PopularMovies/css/movie.css';
import MoviePanel from "../../component/PopularMovies/MoviePanel";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false}

    };

  render() {
    return (
      <div className="p-grid p-nogutter">
          <div className={'p-col-12'}>
                <Header/>
          </div>
          <div className={'p-grid p-col-12 p-nogutter p-align-stretch vertical-container sidebar'}>
              <div className={'p-col-2'}>
                  <Sidebar {...this.props} className={'sidebar'}/>
              </div>
              <div className={'p-col-10 dashboard-route'}>
                  <Switch>
                          {dashboardRoutes.map((prop, key) => {
                              if (prop.name === "/movie") {
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
                              }else if (prop.redirect) {
                                  return <Redirect from={prop.path} to={prop.to} key={key}/>;
                              }
                              return (
                                  <Route path={prop.path} component={prop.component} key={key}/>
                              );
                          })}
                  </Switch>
              </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
