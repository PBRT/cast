// @flow
import React from "react";

type Props = {
  backgroundColor: string,
  children: Object
};

const Banner = (props: Props) => (
  <div
    style={{
      padding: 12,
      backgroundColor: props.backgroundColor,
      width: "100%",
      textAlign: "center"
    }}
  >
    {props.children}
  </div>
);

export default Banner;
