import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <section className="content">
        <h1>Login</h1>
        <form action="">
          <div className="form-input">
            <label>Username:</label>
            <input type="text" />
          </div>

          <div className="form-input">
            <label>Password:</label>
            <input type="password" />
          </div>

          <div className="form-input">
            <input type="button" value="Login" />
            <input type="button" value="Reset" />
          </div>
        </form>
      </section>
    );
  }
}
