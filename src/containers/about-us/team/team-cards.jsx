/* @flow */
import React, { Component } from "react";

import "./team-card.css"
 
class TeamCard extends Component <{}> {
  render() {
    return (
      <div style={{ textAlign: "center", display: "flex", marginLeft: 150 }}>
        <div className="member-card">
          <div className="member-img" >
            <img src="migro.jpg" />
          </div>
          <div style={{ textAlign: "center", height: 200, width: 200 }}>
            <h1>Migro</h1>
            <h2>"La Limace"</h2>
            <p>Adore les insectes et les shooters</p>
          </div>
        </div>
        <div className="member-card" >
          <div className="member-img">
            <img src="8.jpg"/>
          </div>
          <div style={{ textAlign: "center", height: 200, width: 200 }}>
            <h1>Hans</h1>
            <h2>"Wild Fire"</h2>
            <p>Exhibitionniste</p>
          </div>
        </div>
      </div>
    );
  };
};

export default TeamCard;