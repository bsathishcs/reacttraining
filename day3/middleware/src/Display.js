import React, { Component } from "react";

class Display extends Component {
  render() {
    const { isFetching, userDetails, error } = this.props;
    return (
      <div>
        {isFetching && <h2>Please wait while details are getting loaded!!!</h2>}

        {userDetails.name && (
          <ul>
            <li>Name : {userDetails.name} </li>
            <li>Location : {userDetails.location} </li>
            <li>Blog : {userDetails.blog} </li>
          </ul>
        )}

        {error && <h2>{error.message}</h2>}
      </div>
    );
  }
}

export default Display;
