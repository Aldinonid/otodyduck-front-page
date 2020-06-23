import React from "react";

import Button from "elements/Button";
import imgFlow from "assets/images/flow-img.jpg";

export default function Flow() {
  return (
    <>
      <hr />
      <section className="container">
        <div className="row">
          <div className="col mt-5">
            <h2 className="font-weight-bold">
              More <span className="text-primary">Directed Learning !</span>
            </h2>
            <p className="font-weight-medium text-gray-500">
              Get the best shortcut for your dream career
            </p>
            <Button
              type="link"
              href="/flow"
              className="btn btn-primary text-white medium mt-4"
              style={{ padding: "10px" }}
            >
              View Learn Flow
            </Button>
          </div>
          <div className="col-4">
            <img src={imgFlow} alt="Learning Flow" width="291" height="291" />
          </div>
        </div>
      </section>
    </>
  );
}
