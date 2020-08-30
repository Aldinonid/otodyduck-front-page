import React, { useState } from "react";

import Button from "elements/Button";

import "assets/scss/style.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <div className="container mx-auto login">
      <div className="row align-items-center justify-content-center">
        <div className="col-5">
          <h1 className="h2 font-weight-bold mt-4 pt-1">Sign In</h1>
          <p className="text-gray-500 mt-1 mb-1">Login to continue studying</p>
          <form action="" method="post">
            <label htmlFor="email" className="mt-3 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={onChangeUsername}
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
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
              required
            />

            <input
              type="checkbox"
              name="remember"
              id="rememberMe"
              className="mt-3 mr-2"
            />
            <label htmlFor="rememberMe">Keep me looged in</label>

            <Button
              type="submit"
              name="submit"
              className="btn btn-primary medium btn-block text-white"
            >
              Login My Account
            </Button>
          </form>
          <hr />
          <h5 className="text-gray-500 text-center">
            Don't have an account ?{" "}
            <span>
              <Button
                type="link"
                href="/register"
                className="medium text-primary text-secondary"
                style={{ textDecoration: "underline" }}
              >
                Join Now
              </Button>
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}
