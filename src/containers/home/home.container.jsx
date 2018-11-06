/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./../stories/actions/stories.actions.js";
import type { StoriesState, Story as StoryType } from "./../stories/stories.type.js";

import { requestStories } from "../stories/stories.actions";
import Section from "../../components/section/section";
import Story from "./../stories/components/story";
import HomeButton from "./components/homeButton";

import { connect } from "react-redux";
import React, { Component } from "react";
import LoadingAnimation from "../../components/loading-animation";

import "./home.css"


type Props = {
    stories: StoriesState,
    dispatch: Action => void
  };

class Home extends Component<Props> {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.dispatch(requestStories("DESC"));
    }
  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    return (
      <div>
        <div className="home-header">
          <h1 className="animated tada">Welcome to Cast</h1>
          <h2>A way to share all your stories</h2>
        </div>
        {stories.length === 0 ?
          <LoadingAnimation/> :
        <div>
          <Section title="Latest stories" info={{ error, timestamp }}>
            <div className="slider-container">
              {stories.map((story: StoryType, idx: number) => (
                <Story key={idx} story={story} />
              ))}
            </div>
          </Section>
        </div>
        }

        <HomeButton />
      </div>
    );
  }
}

export default connect((state: State) => ({
    stories: state.stories
  }))(Home);