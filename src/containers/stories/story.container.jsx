/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./story.actions.js";
import type { StoryState, Story as StoryType } from "./stories.type";

import { connect } from "react-redux";
import React, { Component } from "react";
import { requestStory } from "./story.actions.js";
import Typography from "@material-ui/core/Typography";

import LoadingAnimation from "./../../../src/components/loading-animation";

type Props = {
  story: StoryState,
  dispatch: Action => void
};

class StoryContainer extends Component<Props> {
  componentDidMount = () => {
    this.props.dispatch(requestStory(this.props.match.params))
  }

  // deleteThisStory = () => {
  //   console.log(this.props)
  //   this.props.dispatch(deleteStory("test"))
  // };

  render() {
    const { story } = this.props;
    console.log(this.props)
      return (
        <div>
               <div>
                 <Typography gutterBottom variant="headline" component="h2">
                   {/* {story.title} */}a
                 </Typography>
                 <Typography gutterBottom variant="headline" component="h2">
                   {/* {story.username} */}b
                 </Typography>
                 <Typography gutterBottom variant="headline" component="h2">
                   {/* {story.description} */}c
                 </Typography>
               </div>
             )
        </div>
    );
  }
};

export default connect((state: State) => ({
  story: state.story
}))(StoryContainer);
