/* @flow */
import type { Action } from "./story.actions.js";
import type { StoryState, Story as StoryType } from "../stories/stories.type.js";

import { connect } from "react-redux";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

import { requestStory, deleteStory } from "./story.actions.js";
import Section from "../../components/section/section";
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

  alertUserBeforeDelete = () => {
    let answer = window.confirm("Do you really want to delete this story?");
    if(answer) {
      this.props.dispatch(deleteStory(this.props.match.params.id))
      this.props.history.push("/stories")
    } else {
      console.log("cancelled")
    }
  }

  render() {
    const { story: { story, error, timestamp } } = this.props;
    if(story.length === 0) {
      return (
        <LoadingAnimation/>
      )
    } else {
      return (
        <div className="story-page-ctn">
          <NavLink to="/stories">
              <Button>Return to stories</Button>
          </NavLink>
          <Section title="Latest stories" info={{ error, timestamp }}>
            <div >              
              {story.map((story: StoryType) => (
                  <StoryPage key={story.id} story={story} />
              ))}
            </div>
          </Section>
          <Button onClick={this.alertUserBeforeDelete}>
            Delete this story
          </Button>
        </div>
      );
    }
  };
};

StoryContainer.propTypes = {
  story: PropTypes.object.isRequired,
};

export default connect((state: State) => ({
  story: state.story
}))(StoryContainer);
