/* @flow */
import type { Story as StoryType } from "../stories.type.js";

import React from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

type Props = {
  story: StoryType,
};

const StoryPage = (props: Props) => {

  const { story } = props;
  let newStory = story[0];
  console.log(newStory)
  return (
    <div>
      <Typography gutterBottom variant="headline" component="h2">
        {props.story.title}
      </Typography>
      <Typography gutterBottom variant="headline" component="h2">
        {props.story.username}
      </Typography>
      <Typography gutterBottom variant="headline" component="h2">
        {props.story.description}
      </Typography>
    </div>
  );
}

StoryPage.propTypes = {
  story: PropTypes.object.isRequired,
};

export default StoryPage;
