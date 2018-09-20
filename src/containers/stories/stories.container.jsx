/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./stories.actions.js";
import type { StoriesState, Story as StoryType } from "./stories.type";

import { connect } from "react-redux";
import React, { Component } from "react";
import { requestStories } from "./stories.actions.js";
import Section from "../../components/section/section";
import Story from "./components/story";
import Button from "@material-ui/core/Button";

import LoadingAnimation from "./../../../src/components/loading-animation";

type Props = {
  stories: StoriesState,
  dispatch: Action => void
};

class StoriesContainer extends Component<Props> {
  componentDidMount = () => {
    this.props.dispatch(requestStories("DESC"))
  }

  orderStoriesByDesc = () => {
    this.props.dispatch(requestStories("DESC"))
  }

  orderStoriesByAsc = () => {
    this.props.dispatch(requestStories("ASC"))
  }

  // deleteThisStory = () => {
  //   console.log(this.props)
  //   this.props.dispatch(deleteStory("test"))
  // };

  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    if(stories.length === 0) {
      return (
        <LoadingAnimation/>
      )
    } else {
      return (
        <div>
          <Button onClick={this.orderStoriesByDesc}>
            Order by Desc
          </Button>
          <Button onClick={this.orderStoriesByAsc}>
            Order by Asc
          </Button>
          <Section title="Latest stories" info={{ error, timestamp }} style={{ width: "100%" }}>
            <div className="cards-container" style={{ display: "flex", margin: "auto", flexWrap: "wrap" }}>
              
              {stories.map((story: StoryType, idx: number ) => (
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
