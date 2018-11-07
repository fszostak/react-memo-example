
import React from "react";

const MyNormalComponent = props => {
  console.log("MyNormalComponent rendered");
  return (<div>{props.message}</div>)
}

export default MyNormalComponent;