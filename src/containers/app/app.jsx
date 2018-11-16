/* @flow */

import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faBible } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import "./app.css";

library.add(faHeart);
library.add(faSwatchbook);
library.add(faPlusCircle);
library.add(faHome);
library.add(faBible);
library.add(faPlus);

type Props = {
  children: Array<Object> | Object
};


const App = (props: Props) => {


  const showIcon = (icon) => {
    document.getElementById(icon).style.display="block"
  };

  const hideIcon = (icon) => {
    document.getElementById(icon).style.display="none";
  };

  return (
    <div className="App">
      <AppBar
        position="static"

        
        className="app-bar"
      >
        <div className="navbar-container">
          <div className="btn-container">
            <NavLink className="nav-link" to="/" >
              <Button 
                className="" 
                type="subheading" 
                color="inherit" 
                onMouseOver={() => { showIcon("home-icon") }}
                onMouseOut={() => { hideIcon("home-icon") }}
              >
                <p className="hideOnMobile" >Home</p>
                <FontAwesomeIcon className="hideOnMobile" id="home-icon" icon="home" style={{ display: "none"}}/>
                <FontAwesomeIcon className="mobile-icon" icon="home" style={{ display: "none"}}/>
              </Button>
            </NavLink>
          </div>

          <div className="btn-container">
            <NavLink className="nav-link" to="/stories">
              <Button 
                className="" 
                type="subheading" 
                color="inherit" 
                onMouseOver={() => { showIcon("story-icon") }}
                onMouseOut={() => { hideIcon("story-icon") }}
              >
                <p className="hideOnMobile" >Stories</p>
                <FontAwesomeIcon className="hideOnMobile" id="story-icon" icon="swatchbook" style={{ display: "none"}}/>
                <FontAwesomeIcon className="mobile-icon" icon="bible" style={{ display: "none"}}/>
              </Button>
            </NavLink>
          </div>

          <div className="btn-container">
            <NavLink className="nav-link" to="/create-story">
              <Button 
                className="" 
                type="subheading" color="inherit" 
                onMouseOver={() => { showIcon("create-story-icon") }}
                onMouseOut={() => { hideIcon("create-story-icon") }}
              >
                <p className="hideOnMobile">Create story</p>
                <FontAwesomeIcon className="hideOnMobile" id="create-story-icon" icon="plus-circle" style={{ display: "none"}}/>
                <FontAwesomeIcon className="mobile-icon" icon="plus" style={{ display: "none"}}/>
              </Button>
            </NavLink>
          </div>

          <div className="btn-container">
            <NavLink className="nav-link" to="/about-us">
              <Button 
                className="" 
                type="subheading" color="inherit" 
                onMouseOver={() => { showIcon("about-us-icon") }}
                onMouseOut={() => { hideIcon("about-us-icon") }}
              >
                <p className="hideOnMobile">About us</p>
                <FontAwesomeIcon className="hideOnMobile" id="about-us-icon" icon="heart" style={{ display: "none"}}/>
                <FontAwesomeIcon className="mobile-icon" icon="heart" style={{ display: "none"}}/>
              </Button>
            </NavLink>
          </div>
          
        </div>
      </AppBar>
      {props.children}
      <footer>

      </footer>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;