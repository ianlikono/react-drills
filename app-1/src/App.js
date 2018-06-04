import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ text: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} />
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default App;
