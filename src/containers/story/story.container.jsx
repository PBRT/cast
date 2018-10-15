/* @flow */
import type { Action } from "./story.actions.js";
import type { StoryState, Story as StoryType } from "../stories/stories.type.js";

import { connect } from "react-redux";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { requestStory } from "./story.actions.js";
import Section from "../../components/section/section";

import Button from "@material-ui/core/Button";


import LoadingAnimation from "../../components/loading-animation";

import StoryPage from "./components/learnMore";

type Props = {
  story: StoryState,
  dispatch: Action => void
};

class StoryContainer extends Component<Props> {
  componentDidMount = () => {
    this.props.dispatch(requestStory(this.props.match.params.id))
  };

  render() {
    const { story: { story, error, timestamp } } = this.props;
    if(story.length === 0) {
      return (
        <LoadingAnimation/>
      )
    } else {
      return (
        <div>
          <NavLink to="/stories">

              <Button>Return to stories</Button>
          </NavLink>
          <Section title="Latest stories" info={{ error, timestamp }} style={{ width: "50%" }}>
              <div className="cards-container" style={{ display: "flex", margin: "auto", flexWrap: "wrap", overflow: "auto" }}>
                
                {story.map((story: StoryType, idx: number ) => (
                    <StoryPage key={idx} story={story} />
                ))}
              </div>
            </Section>
        </div>
      );
    };
  };
};

export default connect((state: State) => ({
  story: state.story
}))(StoryContainer);
