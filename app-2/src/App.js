import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }
  render() {
    const data = this.state.data.map((dat, i) => <h2 key={i}>{dat}</h2>);
    return <div>{data}</div>;
  }
}

export default App;
