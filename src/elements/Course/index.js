import React from "react";
import Button from "elements/Button";
import "./style.scss";

const Course = ({ data }) => {
  const MAX_LENGTH = 36;
  return (
    <div className="course-table">
      <div className="title">
        <h2>Course List</h2>
      </div>
      {data.slice(0, 5).map((item, index) => {
        return (
          <div className="course-items" key={index}>
            <p>
              {item.title.length > MAX_LENGTH
                ? item.title.substring(0, MAX_LENGTH - 4) + " ..."
                : item.title}
            </p>
          </div>
        );
      })}

      <div className="course-items last mb-2">
        <p>{data.length - 5} Other Videos</p>
      </div>
      <div className="confirm-learn">
        <Button type="link" href="/payment" className="btn d-block">
          Enroll This Course
        </Button>
      </div>
    </div>
  );
};

export default Course;
