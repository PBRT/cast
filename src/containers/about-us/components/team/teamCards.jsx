/* @flow */
import React from "react";

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 
import "./teamCard.css";




const TeamCard = () => {

  const bull = <span className="bullet">•</span>;

  const teamInfos = [
    {
      name: "Migro",
      nickname: "La limace",
      blur: "Adore les insectes et les shooters",
      img: "migro.jpg"
    },
    {
      name: "Hans",
      nickname: "Wildfire",
      blur: "Adore le champagne",
      img: "8.jpg"
    }
  ]
    return (
      <div className="team-ctn">

        {teamInfos.map((member, idx) => (
        <div className="member-container" key={idx}>
          <Card className="card">
            <CardContent className="card-content">
  
              <div className="card-img" >
                <Avatar alt="Mimi" src={member.img} className="avatar bigAvatar" />

              </div>
              <div className="card-text">
                <Typography className="title" color="textSecondary" gutterBottom>
                  {/* Word of the Day */}
                </Typography>
                <Typography variant="display2" component="h2" className="hideOnMobile">
                  {bull}{member.name}{bull}
                </Typography>
                <Typography className="pos hideOnMobile" color="textSecondary">
                  {member.nickname}
                </Typography>
                <Typography component="p" className="hideOnMobile">
                  {member.blur}
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </div>
            </CardContent>
          </Card>
          </div>
          ))}
      </div>

    );
  };
  
  export default TeamCard;