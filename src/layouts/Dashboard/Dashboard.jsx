import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//import NotificationSystem from "react-notification-system";

import Sidebar from "../../component/Sidebar/Sidebar";

// import { style } from "variables/Variables.jsx";

import dashboardRoutes from "../../routes/dashboard.jsx";
import Header from "../../component/Header/Header";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    };
  render() {
    return (
      <div className="wrapper p-grid">
          <div className="p-col-3">
            <Sidebar {...this.props} className={'p-col-3'}/>
          </div>
        <div className={'p-col-9'}>
            <Header/>
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
