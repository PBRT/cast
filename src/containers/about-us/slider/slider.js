/* @flow */
import React, { Component } from "react";

import "./../about-us.css";

var images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "8.jpg",
  "migro.jpg"
];

class ImageSlider extends Component<{}> {
  
  renderImage = (imageUrl) => {
    return (
      <div> 
          <img src={imageUrl} alt=""/>
      </div>
    );
  }

  
  render() {
    return (
        <div>
          <div id="slider" className="">
            <figure>
              <div className="" style={{ textAlign: "center", display: "flex" }}>
                {images.map(imageUrl => this.renderImage(imageUrl))}
              </div>
            </figure>
          </div>
        </div>   
    )
  } 
}

export default ImageSlider;
