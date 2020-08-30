import React, { Component } from "react";

import Register from "parts/Register";

export default class RegisterPage extends Component {
  componentDidMount() {
    document.title = "Register Account | Otodyduck";
  }
  render() {
    return (
      <>
        <Register />
      </>
    );
  }
}
