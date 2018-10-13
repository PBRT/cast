/* @flow */
import type { Story as StoryType } from "../stories.type.js";

import moment from "moment";
import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = {
  card: {
    width: "100%"
  },
  media: {
    objectFit: 'cover',
  },
};



const Story = (props: Props) => {

  const { classes, story } = props;

  return ( 
    <div className="card-container" style={{ margin: 25, width: 300, height: 600, margin: "auto" }} >
      <Card className={classes.card} >
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image="1.jpg"
          title="something"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.story.title}
          </Typography>
          <Typography type="caption" component="p">
            {moment(parseInt(props.story.timestamp)).format("DD-MM-YYYY")}
          </Typography>
          <Typography style={{ marginTop: 8, textOverflow: "ellipsis", width: 200, whiteSpace: "nowrap", overflow: "hidden" }} type="subheading" component="p">
            {props.story.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Share
          </Button>
          <NavLink to={`stories/${story.id}`} >
            <Button size="small" color="primary" >
              Learn More
            </Button>
          </NavLink>

        </CardActions>
      </Card>
    </div>
  );
}

Story.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Story);

