import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "../../component/Sidebar/Sidebar";
import {Col, Row} from "react-bootstrap";
import dashboardRoutes from "../../routes/dashboard.jsx";
import Header from "../../component/Header/Header";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

import '../../component/Header/css/header.css'
import '../../../node_modules/primeicons/fonts/primeicons.svg'
import '../../../node_modules/primereact/resources/primereact.css'
import '../../../node_modules/primeflex/primeflex.css'
import '../../../node_modules/primeicons/primeicons.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    };
  render() {

    return (
      <div className="container-fluid">
          <Row className={"show-grid"}>
              <Col md={12} className={'header'}>
                <div>
                    <Header/>
                </div>
              </Col>
          </Row>
          <Row className={"show-grid"}>
              <Col md={2} className={'sidebar'}>
                <div>
                    <Sidebar {...this.props} className={'sidebar'}/>
                </div>
              </Col>
                <Col md={10}>
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
                </Col>
          </Row>
      </div>
    );
  }
}

export default Dashboard;
