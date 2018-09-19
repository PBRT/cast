/* @flow */

import React from "react";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { NavLink } from "react-router-dom";

import "./app.css";

type Props = {
  children: Array<Object> | Object
};

const App = (props: Props) => {
  return (
    <div className="App">
      <AppBar
        position="static"
        color="primary"
        style={{ marginBottom: 16, padding: 8 }}
        classes={{
          colorPrimary: "navbar-color"
        }}
      >
        <div style={{ display: "flex", padding: "0px 12px" }}>
          <div style={{ flex: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button type="subheading" color="inherit">
                Home
              </Button>
            </NavLink>
          </div>

          <div style={{ flex: 1 }}>
            <NavLink to="/stories" style={{ textDecoration: "none", color: "white" }}>
              <Button type="subheading" color="inherit">
                Stories
              </Button>
            </NavLink>
          </div>

          <div style={{ flex: 1, textAlign: "right" }}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: 12,
                display: "inline-block"
              }}
              to="/create-story"
            >
              <Button type="subheading" color="inherit">
                Create story
              </Button>
            </NavLink>
          </div>

          <div style={{ flex: 1, textAlign: "right", width: 25 }}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: 12,
                display: "inline-block"
              }}
              to="/about-us"
            >
              <Button type="subheading" color="inherit">
                About us
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

export default App;