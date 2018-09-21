/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "../stories/stories.actions.js";
import type { StoriesState } from "../stories/stories.type";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { requestStories, createStory } from "../stories/stories.actions.js";
import Section from "../../components/section/section";
import CreateStoryForm from "./components/form.jsx";
import Button from "@material-ui/core/Button";

export type SupportedInputs = ?string | ?number;
type Props = {
  stories: StoriesState,
  dispatch: Action => void,
  history: Object
};
type ContainerState = {
  values: {
    [string]: SupportedInputs
  }
};

class StoriesContainer extends Component<Props, ContainerState> {
  state: ContainerState = {
    values: {
      username: null,
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
          <div>
            <CreateStoryForm
              handleChange={this._handleChange}
              values={this.state.values}
            />
            <div style={{ textAlign: "center" }}>
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Button color="primary" type="raised">
                  Cancel
                </Button>
              </NavLink>
                <Button color="primary" type="raised" onClick={this._onSubmit}>
                  Submit
                </Button>
            </div>
          </div>
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

  _onSubmit = () => {
    const { timestamp } = this.state.values;
    const date =
      timestamp != null ? new Date(timestamp).getTime() : new Date().getTime();
    this.props.dispatch(
      createStory({
        ...this.state.values,
        ...{ timestamp: date }
      })
    );
    this.props.history.push("/");
  };
}

export default connect((state: State) => ({
  stories: state.stories
}))(withRouter(StoriesContainer));
