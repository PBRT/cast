/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./../stories/actions/stories.actions.js";
import type { StoriesState } from "./../stories/stories.type.js";

import React, { Component } from "react";

import ImageSlider from "./components/slider/slider";
import { connect } from "react-redux";
import TeamCard from "./components/team/teamCards";

import "./about-us.css";

type Props = {
  stories: StoriesState,
  dispatch: Action => void
};

class AboutUsContainer extends Component<Props> {

  componentDidMount() {
    window.scrollTo(0, 0);
  };



  render() {
    return (
      <div className="container">

        <div className="header">
          <div className="head-image-container">
            <img src="south-park.jpg" alt="wouf wouf"/>
            <div className="definition hideOnMobile">
              <p>
              <a href="https://dictionary.cambridge.org/dictionary/english/animal">Cambridge dictionary</a>
              : animal noun (BAD PERSON)
              </p>
              <p>Informal - an unpleasant, cruel person or someone who behaves badly: He's a real animal when he's had too much to drink.</p>
            </div>
          </div>

        </div>

        <div className="separation-bar"></div>
        
        <div className="top-resume hideOnMobile">
          <div className="text-resume ">
            <p>Ta ‘sta én bouno santat, hè coumo ét médéci, bébé bi !</p>
          </div>
          <ImageSlider className="image-slider-desktop"/>
           
        </div>
        <div className="mobile-only">
          <p>Baù més ana croumpa bi qu’ ana t’at apouticayre !</p>
          <ImageSlider className="image-slider-mobile"/>
        </div>
          <div className="separation-bar"></div>
        <div className="team-resume">          
            <TeamCard/>
        </div>
          <div className="separation-bar"></div>

      </div>
    )
  }
}

export default connect((state: State) => ({
  stories: state.stories
}))(AboutUsContainer);
