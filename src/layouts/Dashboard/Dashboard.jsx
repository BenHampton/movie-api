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
      <div className={"wrapper"}>
          <div className={"p-grid"}>
              <div className={'p-col-12'}>
                  <div className={"box"}>
                    <Header/>
                  </div>
              </div>
          </div>
          <div className={"p-grid"}>
              <div className="p-col-3">
                <Sidebar {...this.props} className={'box'}/>
              </div>
              <Switch>
                  <div style={{background: "red"}}>
                    {dashboardRoutes.map((prop, key) => {
                      if (prop.name === "Notifications")
                        return (
                              <Route path={prop.path} key={key} render={routeProps => (
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
