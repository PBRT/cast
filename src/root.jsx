// @flow
import React from "react";
import { Provider } from "react-redux";
import App from "./containers/app/app";
import Stories from "./containers/stories/stories.container";
import Home from "./containers/home/home.container";
import AboutUsContainer from "./containers/about-us/about-us.container";
import StoryContainer from "./containers/story/story.container";
import CreateStory from "./containers/create-story/create-story.container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// This is flow, we can go back to that later
// but it's super cool (give you type in javascript)
type Props = {
  store: Object
};

// This is the root of the app with REact router
const Root = (props: Props) => (
  <Provider store={props.store}>
    <Router>
      <App>
        <Switch>
          <Route 
            exact path="/" 
            render={(props) => (
              <Home history={props.history} />
            )} />
          <Route 
            exact path="/stories" 
            render={(props) => (
              <Stories history={props.history} />
            )} />
          <Route 
            exact path="/create-story" 
            render={(props) => (
              <CreateStory history={props.history} />
            )} /> />
          <Route 
            exact path="/about-us" 
            render={(props) => (
              <AboutUsContainer history={props.history} />
            )} />
          <Route 
            exact path="/stories/:id" 
            render={(props) => (
              <StoryContainer history={props.history} />
            )} />
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
