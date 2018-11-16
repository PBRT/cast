/* @flow */
import React from "react";
import Popup from "reactjs-popup";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
 
import "./teamCard.css";




const TeamCard = () => {

  const bull = <span className="bullet">•</span>;
  const teamInfos = [
    {
      name: "Migro",
      nickname: '"La limace"',
      blur: "Adore les insectes et les shooters",
      img: "migro.jpg"
    },
    {
      name: "Hans",
      nickname: '"Wildfire"',
      blur: "Adore le champagne",
      img: "8.jpg"
    }
  ];



    return (
      <div className="team-ctn animated rubberBand">
        {teamInfos.map((member: object, idx: number) => (
        <div className="member-container" key={idx}>
          <Card className="card">
            <CardContent className="card-content">
  
              <div className="card-img" >
                <div className="onMobile">
                  <Popup 
                    className="popup-mobile"
                    trigger={<Avatar alt="member-avatar" src={member.img} className="avatar bigAvatar" />} 
                    position="top center"
                    closeOnDocumentClick
                    on="hover"
                    >
                    <div className="popup-ctn">
                      <div className="popup-name">{bull}{member.name}{bull}</div>
                      <div className="popup-nickname">{member.nickname}</div>
                      <div className="popup-blur">{member.blur}</div>
                    </div>
                  </Popup>
                  </div>
                  <div className="hideOnMobile">
                    <Avatar alt="member-avatar" src={member.img} className="avatar bigAvatar" />
                  </div>
              </div>
              <div className="card-text hideOnMobile">
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