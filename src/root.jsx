// @flow
import React from "react";
import { Provider } from "react-redux";
import App from "./containers/app/app";
import Stories from "./containers/stories/stories.container";
import CreateStory from "./containers/create-story/create-story.container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

type Props = {
  store: Object
};

const Root = (props: Props) => (
  <Provider store={props.store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Stories} />
          <Route exact path="/create-story" component={CreateStory} />
          <Route
            component={() => (
              <div style={{ textAlign: "center" }}>
                <div style={{ margin: 40 }}>CAREFUL MATE - NOT FOUND</div>
                <img alt="alphie not happy" src="careful-mate.jpg" />
              </div>
            )}
          />
        </Switch>
      </App>
    </Router>
  </Provider>
);

export default Root;
