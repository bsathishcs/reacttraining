import React from "react";

import Navbar from "./components/Navbar";
import Header from "./Header";
import Main from "./Main";

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Navbar />
        <Main />
      </div>
    );
  }
}
