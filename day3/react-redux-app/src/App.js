import React, { Component } from "react";

import DisplayContainer from "./container/DisplayContainer";
import FormContainer from "./container/FormContainer";

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
