/* @flow */

import moment from "moment";
import React from "react";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import "./section.css";

type Props = {
  title: string,
  info?: {
    error: ?string,
    timestamp: number
  },
  children: Object
};

const Section = (props: Props) => {
  const { title, info, children } = props;
  return (
    <div style={{ margin: "20px 0px" }}>
      <div style={{ padding: "20px 20px 30px" }}>
        <div style={{ marginBottom: 20 }}>
          <Typography type="title" color="inherit" align="center">
            {title}
          </Typography>
          {info !== undefined && (
            <Typography
              type="caption"
              color={info.error ? "error" : "secondary"}
              align="center"
              classes={{ colorSecondary: "color-secondary" }}
              style={{ marginTop: 4 }}
            >
              {info.error
                ? `Last request failed. Last success request at ${moment(
                    info.timestamp
                  ).format("HH:mm:ss")}`
                : `Updated ${moment(info.timestamp).fromNow()}`}
            </Typography>
          )}
        </div>
        {children}
      </div>
      <Divider />
    </div>
  );
};

export default Section;
