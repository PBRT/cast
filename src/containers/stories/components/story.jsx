/* @flow */
import type { Story as StoryType } from "../stories.type.js";

import moment from "moment";
import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./story.css"

type Props = {
  story: StoryType,
};


const Story = (props: Props) => {

  const { story } = props;

  return ( 
    <div className="card-container" >
      <Card className="card" >
        <CardMedia
          component="img"
          className="media"
          height="140"
          image="1.jpg"
          title="something"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.story.title}
          </Typography>
          <Typography type="caption" component="p">
            {moment(parseInt(props.story.timestamp, 10)).format("DD-MM-YYYY")}
          </Typography>
          <Typography className="description" type="subheading" component="p">
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
  story: PropTypes.object.isRequired,
};

export default Story;

