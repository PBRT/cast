/* @flow */
import type { Story as StoryType } from "../stories.type.js";

import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import "./learnMore.css"

type Props = {
  story: StoryType,
};

const StoryPage = (props: Props) => {

  return (
    <div className="learnmore-page-ctn">
      <div className="learnmore-page-title">
        <div className="learnmore-page-img"></div>
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
