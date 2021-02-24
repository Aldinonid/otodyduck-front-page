import React from "react";

import Button from "elements/Button";

import capitalizeFirstLetter from "utils/capitalizeFirstLetter";

const CourseFlowCard = ({ data }) => {
  const MAX_LENGTH = 26;
  const name = data?.name;
  return (
    <div className="card mb-4">
      <div className="row">
        <div className="col-5">
          <img
            src={data?.thumbnail}
            alt="wkwk"
            className="img-flow"
            width="234px"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="col-7 text-dark mt-2">
          <h3>
            {name.length > MAX_LENGTH
              ? name.substring(0, MAX_LENGTH - 3) + "..."
              : name}
          </h3>
          <p className="text-gray-500">{`${capitalizeFirstLetter(
            data?.level
          )} Level`}</p>
          <Button
            type="link"
            href={`/class/${data?.slug}`}
            className="btn btn-primary text-white medium"
            isPrimary
          >
            See Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseFlowCard;
