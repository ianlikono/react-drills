import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onValSubmit = this.onValSubmit.bind(this);
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(this.state);
  }

  onValSubmit() {
    console.log(this.state);
    alert(this.state.username + " " + this.state.password);
  }

  render() {
    const { username, password } = this;
    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={this.onInputChange}
        />

        <button onClick={this.onValSubmit}>Submit</button>
      </div>
    );
  }
}

export default Login;
