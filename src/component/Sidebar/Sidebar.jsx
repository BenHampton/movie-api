import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './css/sidebard.css';

import dashboardRoutes from "../../routes/dashboard.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {

    return (
      <div id="sidebar" className="sidebar">
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <div className={ prop.upgrade ? "active active-pro" : this.activeRoute(prop.path) } key={key} >
                    <NavLink to={prop.path} className="nav" activeClassName="active" >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </div>
                );
              return null;
            })}
      </div>
    );
  }
}

export default Sidebar;
