/* @flow */
import React, { Component } from "react";

 
class TeamCard extends Component {
  render() {
    return (
      <div className="member-container">
        <div className="member-card">
          <div className="member-img" >
            <img src="migro.jpg" alt=""/>
          </div>
          <div className="member-description">
            <h1>Migro</h1>
            <h2>"La Limace"</h2>
            <h3>Adore les insectes et les shooters</h3>
          </div>
        </div>
        <div className="member-card" >
          <div className="member-img">
            <img src="8.jpg" alt=""/>
          </div>
          <div className="member-description">
            <h1>Hans</h1>
            <h2>"Wild Fire"</h2>
            <h3>Exhibitionniste</h3>
          </div>
        </div>
      </div>
    );
  };
};

export default TeamCard;