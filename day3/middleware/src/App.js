import React, { Component } from "react";
import DisplayContainer from "./containers/DisplayContainer";
import FormContainer from "./containers/FormContainer";

class App extends Component {
  render() {
    return (
      <div>
        <FormContainer />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
