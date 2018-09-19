/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./stories.actions.js";
import type { StoriesState, Story as StoryType } from "./stories.type";

import { requestStories } from "./../stories/stories.actions";
import Section from "../../components/section/section";
import Story from "./../stories/components/story";

import { connect } from "react-redux";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Typography from "material-ui/Typography";
import Button from "@material-ui/core/Button"
import LoadingAnimation from "../../components/loading-animation";

import "./home.container.css"

type Props = {
    stories: StoriesState,
    dispatch: Action => void
  };

class Home extends Component<Props> {
    componentDidMount() {
        this.props.dispatch(requestStories("ASC"));
      }
  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    return (
      <div>
        <div className="home-header" style={{ backgroundColor: "#fa983a", width: "100%", height: 250, textAlign: "center", color: "white" }}>
          <h1 style={{ paddingTop: 75 }}>Welcome to Cast</h1>
          <h2>A way to share all your stories</h2>
        </div>
        {stories.length === 0 ?
          <LoadingAnimation/> :
        <div>
          <Section title="Latest stories" info={{ error, timestamp }}>
            <div style={{ display: "flex", margin: "auto", overflow: "auto" }}>
              {stories.map((story: StoryType, idx: number) => (
                <Story key={idx} story={story} />
              ))}
            </div>
          </Section>
        </div>
        }

        <div className="link">
          <NavLink to="/create-story">
            <Button variant="contained" aria-label="Add">
              Create your own!
            </Button>
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/stories">
            <Button variant="contained" aria-label="Add">
              Show all stories
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect((state: State) => ({
    stories: state.stories
  }))(Home);