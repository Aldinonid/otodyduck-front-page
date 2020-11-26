import React from "react";

import Button from "elements/Button";

const NotFound = () => {
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          <h1>Are you lost?</h1>
          <p className="pt-4">
            Some page are still in development, maybe you can go back if you
            want
          </p>
          <div>
            <Button className="btn btn-light medium mt-5" type="link" href="/">
              Yes, bring me to safe place please
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
