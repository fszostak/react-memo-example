
import React from "react";

const MyMemoComponent = props => {
  console.log("MyMemoComponent rendered");
  return (<div>{props.message}</div>)
}

export default React.memo(MyMemoComponent);