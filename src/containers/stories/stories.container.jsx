/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./stories.actions.js";
import type { StoriesState, Story as StoryType } from "./stories.type";

import _ from "lodash";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import React, { Component } from "react";
import { requestStories } from "./stories.actions.js";
import Section from "../../components/section/section";
import Story from "./components/story";
import SearchField from "./components/search-field"


import Button from "@material-ui/core/Button";

import LoadingAnimation from "./../../../src/components/loading-animation";


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
    return this.props.dispatch(requestStories("DESC"))
  };

  onInputChange = (event) => {

    let newlyDisplayed = _.filter(this.props.stories.stories, story => story.title.includes(event.target.value.toLowerCase()))
    console.log(newlyDisplayed)
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
          <div className="home-header" style={{ backgroundColor: "#fa983a", width: "100%", height: 250, textAlign: "center", color: "white" }}>
<<<<<<< HEAD
            <h1 className="animated bounce" style={{ paddingTop: 75 }}>Search a story</h1>
            <h2></h2>
=======
            <h1 style={{ paddingTop: 75, marginBottom: 100 }}>Search a story</h1>
            <SearchField 
            handlechange={this.onInputChange}
            value={this.state.searchTerm}
            />
>>>>>>> fe8cac762e617ecbe8676d2ae919e8ef21b49017
          </div>
          
          <div style={{ paddingTop: 100, margin: "auto", width: "70%" }} >
            <div style={{ margin: 20 }}>
              <Button onClick={this.orderStoriesByDesc}>
                Order by Desc
              </Button>
              <Button onClick={this.orderStoriesByAsc}>
                Order by Asc
              </Button>
            </div>
          </div>
          {this.state.currentDisplay && this.state.searchTerm != "" ?
          <Section style={{ width: "100%" }}>
            <div className="cards-container" style={{ display: "flex", margin: "auto", flexWrap: "wrap", width: "70%" }}>
              {this.state.currentDisplay.length == 0 ?
               <div>No results</div> :
                this.state.currentDisplay.map((story: StoryType, idx: number ) => (
              <Story key={idx} story={story} />
              ))}
            </div>
          </Section> : null
          }
          <Section title="Latest stories" info={{ error, timestamp }} style={{ width: "100%" }}>
            <div className="cards-container" style={{ display: "flex", margin: "auto", flexWrap: "wrap", width: "70%" }}>
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
