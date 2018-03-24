/* @flow */
import type { Story as StoryType } from "../stories.type.js";

import moment from "moment";
import Paper from "material-ui/Paper";
import React, { Component } from "react";
import Typography from "material-ui/Typography";

type Props = {
  story: StoryType
};
const Story = (props: Props) => (
  <div style={{ maxWidth: 800, margin: "auto" }}>
    <Paper style={{ marginBottom: 12, padding: 12 }}>
      <Typography type="title">{props.story.title}</Typography>
      <Typography type="caption">
        {moment(parseInt(props.story.date)).format("DD-MM-YYYY")}
      </Typography>
      <Typography style={{ marginTop: 8 }} type="subheading">
        {props.story.description}
      </Typography>
    </Paper>
  </div>
);

export default Story;
