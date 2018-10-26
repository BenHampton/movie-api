import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './css/sidebard.css';

import dashboardRoutes from "../../routes/dashboard.jsx";
import * as ReactDOM from "react-dom";

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

  componentDidUpdate(){
    window.scrollTo(0,0);
  }

  render() {
    //p-grid is on Dashboard and is good... SideBar had no p-grid and is not bootstrapped.. needs bootstrap and styling
    return (
      <div id="sidebar" className="sidebar" >
        <div className={'sidebar-wrapper'}>
          <div className={'sidebar-fixed'}>
            <ul className={'nav'}>
              <div>
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
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
