/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./../stories/actions/stories.actions.js";
import type { StoriesState } from "./../stories/stories.type.js";

import React, { Component } from "react";

import { connect } from "react-redux";
import TeamCard from "./components/team/team-cards";

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
            <h1><b>We love pinard but we want more !</b></h1>
          </div>

          <div className="definition hideOnMobile">
            <p><a href="https://dictionary.cambridge.org/dictionary/english/animal">Cambridge dictionary</a>: animal noun [ C ] (BAD PERSON)</p>
            <p>Informal - an unpleasant, cruel person or someone who behaves badly: <br/><i>He's a real animal when he's had too much to drink.</i></p>
          </div>
        </div>

        <div className="separation-bar"></div>
        
        <div className="top-resume hideOnMobile">
          <div className="text-resume ">
            <p>Proin vel eros a dolor aliquam placerat id at turpis. Sed facilisis et neque quis varius. Aliquam convallis nulla et pharetra cursus. Cras elementum nec quam quis pellentesque. Nunc molestie arcu dui, vel pellentesque nisi hendrerit ac. In a commodo est. Quisque ac ante arcu. Morbi maximus magna non purus condimentum iaculis. Nulla ultricies nec erat in pretium. Phasellus pharetra libero a libero ultricies, id faucibus mauris maximus. Donec consequat feugiat dolor. Morbi pretium gravida lacus sit amet tempor. Donec vel semper felis.</p>
          </div>
          
          {/* <ImageSlider/>  */}
        </div>
        <div className="mobile-only">
          <p style={{ display: "none" }}>Proin vel eros a dolor aliquam placerat id at turpis.</p>
        </div>
        <div className="team-resume">          
          <div className="separation-bar"></div>
            <TeamCard/>
          <div className="separation-bar"></div>
        </div>

      </div>
    )
  }
}

export default connect((state: State) => ({
  stories: state.stories
}))(AboutUsContainer);
