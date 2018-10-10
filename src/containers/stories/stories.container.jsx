/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./stories.actions.js";
import type { StoriesState, Story as StoryType } from "./stories.type";

import _ from "lodash";
import { connect } from "react-redux";
import React, { Component } from "react";
import { requestStories } from "./stories.actions.js";
import Section from "../../components/section/section";
import Story from "./components/story";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import LoadingAnimation from "./../../../src/components/loading-animation";


library.add(faSearch);


type Props = {
  stories: StoriesState,
  dispatch: Action => void
};

class StoriesContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm : "",
      currentDisplay: this.props.stories.stories
    };
  };

  componentDidMount = () => {
    return this.props.dispatch(requestStories("DESC"))
  };

  onInputChange = (event) => {

    let newlyDisplayed = _.filter(this.props.stories.stories, story => story.title.includes(event.target.value.toLowerCase()))

    return this.setState({
      searchTerm: event.target.value,
      currentDisplay: newlyDisplayed
    });
  };

  orderStoriesByDesc = () => {
    this.props.dispatch(requestStories("DESC"))
  };

  orderStoriesByAsc = () => {
    this.props.dispatch(requestStories("ASC"))
  };

  // deleteThisStory = () => {
  //   console.log(this.props)
  //   this.props.dispatch(deleteStory("test"))
  // };

  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    console.log("current display : " + this.state.currentDisplay)
    console.log("stories : " + stories)
    if(stories.length === 0) {
      return (
        <LoadingAnimation/>
      )
    } else {
      return (
        <div>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }} >
            <div style={{ margin: 20 }}>
              <Button onClick={this.orderStoriesByDesc}>
                Order by Desc
              </Button>
              <Button onClick={this.orderStoriesByAsc}>
                Order by Asc
              </Button>
            </div>
            <div style={{ width: 300 }} >
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                margin="normal"
                variant="outlined"
                value={this.state.searchTerm}
                onChange={this.onInputChange}
              />
              <Button >
                <FontAwesomeIcon id="search-icon" icon="search"/>
              </Button>
            </div>
          </div>
          <Section style={{ width: "100%" }}>
            <div className="cards-container" style={{ display: "flex", margin: "auto", flexWrap: "wrap" }}>
              {this.state.currentDisplay.map((story: StoryType, idx: number ) => (
              <Story key={idx} story={story} />
              ))}
            </div>
          </Section>
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
