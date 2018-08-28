/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./stories.actions.js";
import type { StoriesState, Story as StoryType } from "./stories.type";

import { connect } from "react-redux";
import React, { Component } from "react";
import { requestStories } from "./stories.actions.js";
import Section from "../../components/section/section";
import Story from "./components/story";

type Props = {
  stories: StoriesState,
  dispatch: Action => void
};

class StoriesContainer extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(requestStories());
  }
  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    if(stories.length === 0) {
      return (
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: 40 }}>No story to show, let's create some!</div>
          <img alt="alphie not happy" src="story-begins.jpg" />
        </div>
      )
    } else {
      return (
        <div>
          <Section title="Latest stories" info={{ error, timestamp }}>
            <div style={{ display: "flex" }}>
              {stories.map((story: StoryType, idx: number) => (
                <Story key={idx} story={story} />
              ))}
            </div>
          </Section>
        </div>
      );
    }
  }
};

export default connect((state: State) => ({
  stories: state.stories
}))(StoriesContainer);
