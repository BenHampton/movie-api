import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Sidebar from "../../component/Sidebar/Sidebar";

import dashboardRoutes from "../../routes/dashboard.jsx";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import '../../../node_modules/primeicons/fonts/primeicons.svg';
import '../../../node_modules/primereact/resources/primereact.css';
import '../../../node_modules/primeflex/primeflex.css';
import '../../../node_modules/primeicons/primeicons.css';

import '../../component/Media/css/movies.css';
import '../../component/Media/css/movie.css';
import '../../component/SimilarMedia/css/similarMedia.css';
import '../../component/TvShows/css/tvShow.css';
import '../../component/TvShows/css/tvShows.css';
import './css/dashboard.css'

class Dashboard extends Component {

  render() {
    return (
      <div className="p-grid p-nogutter" style={{background: 'black'}}>
          <div className={'p-col-12'} >
              <Sidebar {...this.props}/>
          </div>
          <div className={'p-grid p-col-12 p-nogutter p-align-stretch vertical-container'} style={{background: 'black'}}>
              <div className={'p-col-12'}>
                  <Switch>
                          {dashboardRoutes.map((prop, key) => {
                              if (prop.name === "/movie" || prop.name === "/tv-show" || prop.name === "/now-playing-movie") {
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
                              } else if (prop.redirect) {
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
