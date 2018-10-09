import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div>
          <Link to="/department">Department</Link>
        </div>
        <div>
          <Link to="/employee">Employee</Link>
        </div>
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      </nav>
    );
  }
}
