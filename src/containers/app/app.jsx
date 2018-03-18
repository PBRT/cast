/* @flow */

import React from "react";

import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
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
              <Typography type="subheading" color="inherit">
                Home
              </Typography>
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
              <Typography type="subheading" color="inherit">
                Create story
              </Typography>
            </NavLink>
          </div>
        </div>
      </AppBar>
      {props.children}
    </div>
  );
};

export default App;
