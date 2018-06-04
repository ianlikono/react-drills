import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      text: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit() {
    // this.setState({ list: this.state.list.push(this.state.text) });
    this.setState({ list: this.state.list.concat([this.state.text]) });
  }

  render() {
    let data = this.state.list.map((val, i) => <h2 key={i}>{val}</h2>);
    // console.log(data);
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={this.onInputChange} />
        <button onClick={this.onSubmit}>Add</button>
        <div>{data}</div>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import Todo from "./Todo";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       list: [],
//       input: ""
//     };

//     this.handleAddTask = this.handleAddTask.bind(this);
//   }

//   handleInputChange(value) {
//     this.setState({ input: value });
//   }

//   handleAddTask() {
//     this.setState({
//       list: [...this.state.list, this.state.input],
//       input: ""
//     });
//   }

//   render() {
//     let list = this.state.list.map((element, index) => {
//       return <Todo key={index} task={element} />;
//     });

//     return (
//       <div className="App">
//         <h1>My to-do list:</h1>

//         <div>
//           <input
//             value={this.state.input}
//             placeholder="Enter new task"
//             onChange={e => this.handleInputChange(e.target.value)}
//           />

//           <button onClick={this.handleAddTask}>Add</button>
//         </div>

//         <br />

//         {list}
//       </div>
//     );
//   }
// }

// export default App;
