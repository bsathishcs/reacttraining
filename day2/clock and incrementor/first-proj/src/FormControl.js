import React from "react";

export default class FormControl extends React.Component {
  constructor() {
    super();

    this.state = {
      textVal: "",
      radioVal: false
    };

    this.textChange = this.textChange.bind(this);
    this.radioChange = this.radioChange.bind(this);
  }

  textChange(event) {
    this.setState({
      textVal: event.target.value
    });
  }

  radioChange(event) {
    this.setState({
      radioVal: event.target.checked
    });
  }

  render() {
    return (
      <form>
        <textarea onChange={this.textChange} value={this.state.textVal} />
        <br />
        <input
          type="radio"
          onChange={this.radioChange}
          checked={this.state.radioVal}
        />
        <br />
        <input type="button" value="submit" />
      </form>
    );
  }
}
