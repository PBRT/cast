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
import SearchField from "./components/searchField.js"


import Button from "@material-ui/core/Button";

import LoadingAnimation from "./../../../src/components/loading-animation";

import "./stories.css";

type Props = {
  stories: StoriesState,
  dispatch: Action => void
};



class StoriesContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm : "",
      currentDisplay: ""
    };
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    return this.props.dispatch(requestStories("DESC"));
  };

  onInputChange = (event) => {

    let newlyDisplayed = _.filter(this.props.stories.stories, story => 
      story.title.includes(event.target.value.toLowerCase()))
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

  render() {

    const { stories: { stories, error, timestamp } } = this.props;
    if(stories.length === 0) {
      return (
        <LoadingAnimation/>
      )
    } else {
      return (
        <div>
          <div className="story-header">
            <h1 >Search a story</h1>
            <SearchField 
              handlechange={this.onInputChange}
              value={this.state.searchTerm}
            />
          </div>
          <div className="btn-filter" >
            <div className="btn-container">
              <Button onClick={this.orderStoriesByDesc}>
                Order by Desc
              </Button>
              <Button onClick={this.orderStoriesByAsc}>
                Order by Asc
              </Button>
            </div>
          </div>
          {this.state.currentDisplay && this.state.searchTerm !== "" ?
          <Section>
            <div className="cards-container">
              {this.state.currentDisplay.length === 0 ?
               <div>No results</div> :
                this.state.currentDisplay.map((story: StoryType, idx: number ) => (
              <Story key={idx} story={story} />
              ))}
            </div>
          </Section> : null
          }
          <Section title="Latest stories" info={{ error, timestamp }}>
            <div className="cards-container">
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