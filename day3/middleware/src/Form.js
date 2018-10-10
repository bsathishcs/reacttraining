import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue="https://api.github.com/users/gaearon"
          ref={node => {
            this.urlVal = node;
          }}
        />
        <br />
        <br />
        <input
          type="button"
          value="get user"
          onClick={() => {
            this.props.getUserDetails(this.urlVal.value);
          }}
        />
        <br />
      </div>
    );
  }
}

export default Form;
