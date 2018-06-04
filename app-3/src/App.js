import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: ["spaghetti", "milk", "fresh", "turkey"],
      text: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(val) {
    this.setState({ text: val });
  }

  render() {
    const values = this.state.food
      .filter((val, i) => val.includes(this.state.text))
      .map((val, i) => {
        return <h2 key={i}>{val}</h2>;
      });
    return (
      <div>
        <input onChange={e => this.onInputChange(e.target.value)} />
        <div>{values}</div>
      </div>
    );
  }
}

export default App;
