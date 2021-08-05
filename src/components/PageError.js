import React from "react";
import "./styles/PageError.css";

function PageError(props) {
  return <div className="PageError">{this.props.error}</div>;
}

export default PageError;
