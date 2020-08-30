import React from "react";

import Button from "elements/Button";

import "./index.scss";

export default function FlowCard(props) {
  const MAX_LENGTH = 40;
  const name = props.name;
  return (
    <div className="card">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={props.imageUrl}
            alt={props.slugh}
            className="img-flow"
            width="234px"
            height="180px"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="col-lg-6 px-0 text-dark mt-2">
          <h3>
            {name.length > MAX_LENGTH
              ? name.substring(0, MAX_LENGTH - 3) + "..."
              : name}
          </h3>
          <p className="text-gray-500">
            {props.level} • {props.classTotal} class
          </p>
          <Button
            type="link"
            href={`/journey/${props.slugh}`}
            className="btn btn-primary text-white medium"
            isPrimary
          >
            Start Journey
          </Button>
        </div>
      </div>
    </div>
  );
}
