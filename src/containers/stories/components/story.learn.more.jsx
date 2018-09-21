/* @flow */
// import type { State } from "../../state/state.type.js";
// import type { Action } from "./stories.actions.js";
// import type { StoriesState, Story as StoryType } from "./stories.type";

// import moment from "moment";
import { connect } from "react-redux";
import React from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

type Props = {
  stories: Array<Object> | Object
};

const StoryPage = (props: Props) => {
    const stories = props.stories.stories;     
    const storyId = props.match.params.id;
    console.log(storyId)
    console.log(stories)
    return (
        <div>
         { storyId ?
          stories.filter((story: StoryType) => {
           if(story.timestamp === storyId) {
             console.log(story)
             return (
               <div>
                 <Typography gutterBottom variant="headline" component="h2">
                   {story.title}
                 </Typography>
                 <Typography gutterBottom variant="headline" component="h2">
                   {story.username}
                 </Typography>
                 <Typography gutterBottom variant="headline" component="h2">
                   {story.description}
                 </Typography>
               </div>
             )
             
           } else {
             console.log("hey")
           }
         }) : null }
        </div>
  );
}

StoryPage.propTypes = {
  stories: PropTypes.object.isRequired,
};

export default connect((state: State) => ({
  stories: state.stories
}))(StoryPage);

