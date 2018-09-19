/* @flow */
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";

import GoogleMapsContainer from "./map/maps";
import ImageSlider from "./slider/slider";
import TeamCard from "./team/team-cards"

import "./about-us.css";



class AboutUsContainer extends Component {

  
  render() {
    return (
      <div className="header">
        <div style={{ textAlign: "center" }}>
          <div style={{ zIndex:1 }}>
            <img src="7.jpg" style={{ width: "100%" }}/>
          </div>
          <div style={{ color: "black", top: 360, zIndex:2, fontSize: "400%" }}>
            <center><b>We love pinard but we want more !</b></center>
          </div> 
        </div>
        <div>
          <div style={{ textAlign: "right", marginRight: 16, marginTop: 75 }}>
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
        <div>
          <p style={{ width: "60%", margin: "auto", padding: 25, textAlign: "center", marginTop: 50, marginBottom: 50, border: "1px solid black" }} >Proin vel eros a dolor aliquam placerat id at turpis. Sed facilisis et neque quis varius. Aliquam convallis nulla et pharetra cursus. Cras elementum nec quam quis pellentesque. Nunc molestie arcu dui, vel pellentesque nisi hendrerit ac. In a commodo est. Quisque ac ante arcu. Morbi maximus magna non purus condimentum iaculis. Nulla ultricies nec erat in pretium. Phasellus pharetra libero a libero ultricies, id faucibus mauris maximus. Donec consequat feugiat dolor. Morbi pretium gravida lacus sit amet tempor. Donec vel semper felis.</p>
        </div>
        <ImageSlider/> 
        <AppBar
          position="static"
          color="primary"
          style={{ marginBottom: 16, padding: 8 }}
          classes={{
            colorPrimary: "navbar-color"
          }}
        ></AppBar>

          <TeamCard/>
      
        <AppBar
          position="static"
          color="primary"
          style={{ marginBottom: 16, padding: 8 }}
          classes={{
            colorPrimary: "navbar-color"
          }}
        ></AppBar>
        <div>
          <GoogleMapsContainer/>
        </div>
      </div>
    )
  }
}

export default AboutUsContainer;
