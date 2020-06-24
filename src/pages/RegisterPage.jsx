import React, { Component } from "react";

import Button from "elements/Button";

import "assets/scss/style.scss";

export default class RegisterPage extends Component {
  componentDidMount() {
    document.title = "Register Account | Otodyduck";
  }
  render() {
    return (
      <div className="container mx-auto login">
        <div className="row align-items-center justify-content-center">
          <div className="col-5">
            <h1 className="h2 font-weight-bold mt-4 pt-1">New Student</h1>
            <p className="text-gray-500 mt-1 mb-1">
              Learn. Build. Share to Make Money
            </p>
            <form action="" method="post">
              <label htmlFor="name" className="mt-3 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Full Name"
                required
              />

              <label htmlFor="email" className="mt-3 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Email Address"
                required
              />

              <label htmlFor="password" className="mt-3 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="password"
                placeholder="Password (Min. 8 Character)"
                required
              />

              <label htmlFor="skill" className="mt-3 mb-1">
                Skill
              </label>
              <input
                type="text"
                name="job"
                class="form-control"
                id="skill"
                placeholder="Skill, Ex: Web Designer"
                required
              />

              <Button
                type="submit"
                name="submit"
                className="btn btn-primary medium btn-block text-white mt-5"
              >
                Join Now
              </Button>
            </form>
            <hr />
            <h5 className="text-gray-500 text-center">
              Already have an account ?{" "}
              <span>
                <Button
                  type="link"
                  href="/login"
                  className="medium text-primary text-secondary"
                  style={{ textDecoration: "underline" }}
                >
                  Sign Now
                </Button>
              </span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
