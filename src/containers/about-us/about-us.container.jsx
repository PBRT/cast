/* @flow */
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";

import GoogleMapsContainer from "./map/maps";
import SimpleMediaCard from "./cards/cards";

import "./about-us.css";

var images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "migro.jpg"
];

class AboutUsContainer extends Component<{}> {
  
  renderImage = (imageUrl) => {
    return (
      <div> 
          <img src={imageUrl}/>
      </div>
    );
  }

  
  render() {
    return (
      <div className="header">
        <div>
          <div id="slider" className="">
            <figure>
              <div className="" style={{ textAlign: "center", display: "flex" }}>
                {images.map(imageUrl => this.renderImage(imageUrl))}
              </div>
            </figure>
          </div>
        </div>    
        <div style={{ textAlign: "center" }}>
          <h1>We love pinard but we want more!!</h1>
        </div>
        <div>
          <div style={{ textAlign: "right", marginRight: 16 }}>
            <p><a href="https://dictionary.cambridge.org/dictionary/english/animal">Cambridge dictionary</a>: animal noun [ C ] (BAD PERSON)</p>
            <p>Informal - an unpleasant, cruel person or someone who behaves badly: <br/><i>He's a real animal when he's had too much to drink.</i></p>
          </div>
        </div>
        <AppBar
          position="static"
          color="primary"
          style={{ marginBottom: 16, padding: 8 }}
          classes={{
            colorPrimary: "navbar-color"
          }}
        ></AppBar>
        <div style = {{ display: "flex", textAlign: "center", margin: 250 }}>
            <SimpleMediaCard />
            <p>Ut non nunc iaculis massa tempus venenatis. Cras rhoncus malesu </p>
        </div>

        <div>
          <GoogleMapsContainer/>
        </div>
      </div>
    )
  }
}

export default AboutUsContainer;
