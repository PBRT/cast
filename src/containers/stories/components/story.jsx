/* @flow */
import type { Story as StoryType } from "../stories.type.js";

import moment from "moment";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};



const Story = (props: Props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/public/careful-mate.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.story.title}
          </Typography>
          <Typography type="caption" component="p">
            {moment(parseInt(props.story.timestamp)).format("DD-MM-YYYY")}
          </Typography>
          <Typography style={{ marginTop: 8 }} type="subheading" component="p">
            {props.story.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Story.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Story);
