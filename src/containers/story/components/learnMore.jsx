/* @flow */
import type { Story as StoryType } from "../stories.type.js";

import React from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import "./learnMore.css"

type Props = {
  story: StoryType,
};

const StoryPage = (props: Props) => {

  const { story } = props;
  let newStory = story[0];
  console.log(newStory);
  return (
    <div className="story-page-ctn">
      <div className="story-page-title">
        <div className="story-page-img"></div>
        <Typography gutterBottom variant="headline" component="h1">
          {props.story.title}
        </Typography>
      </div>
      <Typography gutterBottom variant="headline" component="h2">
        By: {props.story.username}
      </Typography>
      <Typography gutterBottom variant="headline" component="p">
        {props.story.description}
      </Typography>
    </div>
  );
};

StoryPage.propTypes = {
  story: PropTypes.object.isRequired,
};

export default StoryPage;
