/* @flow */
import type { Stories as StoriesType } from "../stories.type.js";


import React from "react";
import { NavLink } from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import "./homeButton.css"


const images = [
  {
    url: "dikkenek.jpg",
    title: 'Show all stories',
    width: '30%',
    path: "/stories",
  },
  {
    url: 'oss.jpg',
    title: 'Create your own',
    width: '40%',
    path: "/create-story",
  },
  {
    url: 'workaholic.jpg',
    title: 'Meet the team',
    width: '30%',
    path: "/about-us",
  },
];


const HomeButton = () => {

  return (
    <div className="bigButtonsContainer">
    {images.map(image => (
      
      <ButtonBase
        focusRipple
        key={image.title}
        className="image"
        focusVisibleClassName="focusVisible"
        style={{
          width: image.width,
        }}
      >
        <span
          className="imageSrc"
          style={{
            backgroundImage: `url(${image.url})`,
          }}
        />
        <span className="imageBackdrop" />
        <NavLink to={image.path}>
          <span className="imageButton">
            <Typography
              component="span"
              variant="display1"
              color="inherit"
              className="imageTitle"
            >
              {image.title}
              <span className="imageMarked hideOnMobile" />
            </Typography>
          </span>
        </NavLink>
      </ButtonBase>
      
    ))}
  </div>
  );
}

export default HomeButton;

