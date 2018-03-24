/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "../stories/stories.actions.js";
import type { StoriesState } from "../stories/stories.type";

import { connect } from "react-redux";
import React, { Component } from "react";
import { requestStories } from "../stories/stories.actions.js";
import Section from "../../components/section/section";
import CreateStoryForm from "./components/form.jsx";

export type SupportedInputs = ?string | ?number;
type Props = {
  stories: StoriesState,
  dispatch: Action => void
};
type ContainerState = {
  values: {
    [string]: SupportedInputs
  }
};

class StoriesContainer extends Component<Props, ContainerState> {
  state: ContainerState = {
    values: {
      title: null,
      description: null,
      timestamp: 0
    }
  };
  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    return (
      <div>
        <Section title="Create story" info={{ error, timestamp }}>
          <CreateStoryForm
            handleChange={this._handleChange}
            values={this.state.values}
          />
        </Section>
      </div>
    );
  }

  _handleChange = (key: string, value: string) => {
    this.setState({
      values: {
        ...this.state.values,
        ...{
          [key]: value
        }
      }
    });
  };
}

export default connect((state: State) => ({
  stories: state.stories
}))(StoriesContainer);
