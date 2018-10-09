import React from "react";
import Display from "./Display";
import KeyDemo from "./KeyDemo";
import FormControl from "./FormControl";

class App extends React.Component {
  constructor() {
    super();
    const timeStamp = new Date().toLocaleTimeString();

    this.state = {
      ts: timeStamp,
      counter: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }

  render() {
    const data = [
      { id: 100, name: "HR" },
      { id: 200, name: "Marketing" },
      { id: 300, name: "Finance" }
    ];
    return (
      <div>
        {this.state.ts}
        <hr />
        <Display count={this.state.counter} />{" "}
        <input type="button" value="increment" onClick={this.increment} />
        <hr />
        <KeyDemo data={data} />
        <hr />
        <FormControl />
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      const timeStamp = new Date().toLocaleTimeString();

      this.setState({ ts: timeStamp });
    }, 1000);
  }
}

export default App;
