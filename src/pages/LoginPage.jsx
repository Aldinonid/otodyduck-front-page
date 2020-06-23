import React, { Component } from "react";

import Button from "elements/Button";

export default class LoginPage extends Component {
  componentDidMount() {
    document.title = "Login Page";
  }
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <h1>Login Page</h1>
            <Button type="link" href="/" className="btn btn-primary" isPrimary>
              Back to Login Page
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
