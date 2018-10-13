/* @flow */
import React, { Component } from "react";

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 
import "./teamCard.css";




const TeamCard = () => {

  const bull = <span className="bullet">•</span>;


    return (
      
      <div className="member-container" >
        <Card className="card">
          <CardContent className="card-content">

            <div className="card-img">
              <Avatar alt="Mimi" src="migro.jpg" className="avatar bigAvatar" />
            </div>
            <div className="card-text">
              <Typography className="title" color="textSecondary" gutterBottom>
                {/* Word of the Day */}
              </Typography>
              <Typography variant="h5" component="h2">
                {bull}Migro{bull}
              </Typography>
              <Typography className="pos" color="textSecondary">
                "La limace"
              </Typography>
              <Typography component="p" className="hideOnMobile">
                Adore les insectes et les shooters
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent className="card-content">
            <div className="card-img">
              <Avatar alt="Mimi" src="8.jpg" className="avatar bigAvatar" />
            </div>
            <div className="card-text">
              <Typography className="title" color="textSecondary" gutterBottom>
                {/* Word of the Day */}
              </Typography>
              <Typography variant="h5" component="h2">
                {bull}Hans{bull}
              </Typography>
              <Typography className="pos" color="textSecondary">
                "Wildfire"
              </Typography>
              <Typography component="p" className="hideOnMobile">
                Adore le champagne
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </div>

          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default TeamCard;