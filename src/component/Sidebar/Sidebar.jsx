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
      <div id="sidebar" className="sidebar" >
        <div className={'sidebar-wrapper'}>
          <div className={'sidebar-fixed'}>
            <ul className={'nav'}>
                {dashboardRoutes.map((prop, key) => {
                  if (!prop.redirect)
                    return (
                      <li className={ prop.upgrade ? "active active-pro" : this.activeRoute(prop.path) } key={key} >
                        <NavLink to={prop.path} className={prop.hide ? "nav-link navLink-hoverBox sidebar-hide" : "nav-link navLink-hoverBox"} activeClassName="active" >
                          <i className={prop.icon} />
                          <p>{prop.name}</p>
                        </NavLink>
                      </li>
                    );
                  return null;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
