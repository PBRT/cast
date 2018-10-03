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
        <div style={{ height: 200, backgroundColor: "#fa983a", marginBottom: 50, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "1px 1px 8px #888888" }}>
          <h1 style= {{ margin: "auto" }}>Story title</h1>
        </div>

        <div className="story-container">
          <div className="details username" style={{ float: "right", marginRight: 100 }}>    
            <h2>
              {/* {story.username} */}by: username
            </h2>
          </div>
          <div className="details description" style={{ width: "60%", margin: "auto", padding: 25, textAlign: "left", marginTop: 50, marginBottom: 50, border: "2px solid #fa983a", borderRadius: 12, overflowWrap: "break-word" }}>
            <p style={{ fontSize: 32 }}>
              {/* {story.description} */} {("Test").repeat(50)}
            </p>
          </div> 
        </div>
      </div>
    );
  }
};

export default connect((state: State) => ({
  story: state.story
}))(StoryContainer);
