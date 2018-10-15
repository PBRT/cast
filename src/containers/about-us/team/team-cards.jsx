/* @flow */
import React from "react";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 
import "./team-card.css";

const styles = {
  row: {
    display: 'flex',
  },
  avatar: {
    marginBottom: 15,
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: "auto",
  },
  card: {
    minWidth: 275,
    textAlign: "center",
    justifyContent: "center",
    margin: "15px 15px" ,
    border: "none",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};



const TeamCard = (props) => {

  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;


    return (
      
      <div className="member-container" >
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.row}>
              <Avatar alt="Mimi" src="migro.jpg" className={classNames(classes.avatar, classes.bigAvatar)} />
            </div>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {/* Word of the Day */}
            </Typography>
            <Typography variant="display2" component="h2">
              {bull}Migro{bull}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              "La limace"
            </Typography>
            <Typography component="p">
              Adore les insectes et les shooters
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Avatar alt="Hans" src="8.jpg" className={classNames(classes.avatar, classes.bigAvatar)} />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {/* Word of the Day */}
            </Typography>
            <Typography variant="display2" component="h2">
              {bull}Hans{bull}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              "Wildfire"
            </Typography>
            <Typography component="p">
              Adore le champagne
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  TeamCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TeamCard);