/* @flow */
import React, { Component } from "react";

import "./slider.css";

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
  

  
  render() {
    return (
        <div>
          <div id="slider" className="slider">
            <figure>
              <div className="slider-row" style={{ textAlign: "center", display: "flex" }}>
                {images.map(imageUrl => (
                  <div> 
                    <img src={imageUrl} alt=""/>
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </div>   
    )
  } 
}

export default ImageSlider;
