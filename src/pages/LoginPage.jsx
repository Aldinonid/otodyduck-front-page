import React, { Component } from "react";

import Login from 'parts/Login'

export default class LoginPage extends Component {
  componentDidMount() {
    document.title = "Login Page";
  }
  render() {
    return (
      <>
      <Login />
      </>
    );
  }
}
