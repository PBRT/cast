/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "../stories/stories.actions.js";
import type { StoriesState } from "../stories/stories.type";

import { connect } from "react-redux";
import React, { Component } from "react";
import { requestStories } from "../stories/stories.actions.js";
import Section from "../../components/section/section";

type Props = {
  stories: StoriesState,
  dispatch: Action => void
};

class StoriesContainer extends Component<Props> {
  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    return (
      <div>
        <Section title="Create story" info={{ error, timestamp }}>
          <div>TO CREATE</div>
        </Section>
      </div>
    );
  }
}

export default connect((state: State) => ({
  stories: state.stories
}))(StoriesContainer);
