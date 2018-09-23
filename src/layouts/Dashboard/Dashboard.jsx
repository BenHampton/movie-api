import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "../../component/Sidebar/Sidebar";

import dashboardRoutes from "../../routes/dashboard.jsx";
import Header from "../../component/Header/Header";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    };
  render() {
    return (
      <div className="wrapper p-grid">
          <div className={'p-grid-12'}>
              <Header/>
          </div>
          <div className="p-col-3 p-align-stretch vertical-container">
            <Sidebar {...this.props} className={'box box-stretched'}/>
          </div>
        <div className={'p-col-9'}>
          <Switch>
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
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
