import React, { Component } from "react";

class Display extends Component {
  render() {
    return <div>{this.props.val}</div>;
  }
}

Display.defaultProps = {
  val: 0
};

export default Display;
