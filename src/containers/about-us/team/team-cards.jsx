/* @flow */
import React, { Component } from "react";


class TeamCard extends Component <{}> {
  render() {
    return (
      <div>
        <div className="member-card" style={{ textAlign: "center", display: "flex", marginBottom: 25 }}>
          <div style={{ textAlign: "center", height: 200, width: 200 }}>
            <img src="migro.jpg" style={{ width: 200, height: 200, overflow: "hidden", borderRadius: "50%", marginBottom: 50 }}/>
          </div>
          <div style={{ textAlign: "center", height: 200, width: 200 }}>
            <h1>Migro</h1>
            <h2>"La Limace"</h2>
            <p>Adore les insectes et les shooters</p>
          </div>
        </div>
      </div>
    );
  };
};

export default TeamCard;