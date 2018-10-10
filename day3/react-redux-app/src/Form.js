import React, { Component } from "react";

class Form extends Component {
  render() {
    const { incHandler } = this.props;
    return (
      <div>
        <input
          type="button"
          value="increment"
          onClick={() => {
            incHandler();
          }}
        />
      </div>
    );
  }
}

export default Form;
