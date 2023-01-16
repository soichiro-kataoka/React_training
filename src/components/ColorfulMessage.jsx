import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStytle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStytle}>{children}</p>;
};

export default ColorfulMessage;
