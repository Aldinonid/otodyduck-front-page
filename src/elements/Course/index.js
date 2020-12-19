import React from "react";
import Button from "elements/Button";
import "./style.scss";

const Course = ({ data, slug, type }) => {
  if (!data) return null;

  const MAX_LENGTH = 29;
  return (
    <div className="course-table">
      <div className="title">
        <h2>Course List</h2>
      </div>
      {data?.slice(0, 5).map((item, index) => {
        return (
          <div className="course-items text-dark" key={index}>
            <p>
              {item?.length > MAX_LENGTH
                ? item.substring(0, MAX_LENGTH - 3) + " ..."
                : item}
            </p>
          </div>
        );
      })}

      <div className="course-items last mb-2">
        <p>{data?.length - 5} Other Videos</p>
      </div>
      <div className="confirm-learn">
        <Button
          isExternal
          type="link"
          href={`${process.env.REACT_APP_MEMBERPAGE_URL}/joined/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn d-block"
        >
          {type === "premium" ? "Buy Now" : "Enroll Now"}
        </Button>
      </div>
    </div>
  );
};

export default Course;
