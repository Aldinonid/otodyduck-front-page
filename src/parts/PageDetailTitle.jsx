import React from "react";

export default function ClassDetail({ data }) {
  return (
    <section className="container">
      <div className="text-center">
        <h1 className="medium">Online Class</h1>
        <h1 className="medium" style={{ marginTop: "-30px" }}>
          {data.title}
        </h1>
        <h5 className="text-gray-500" style={{ marginTop: "-10px" }}>
          Build by {data.classTeacher}
        </h5>
      </div>
      <div className="row justify-content-md-center mt-5">
        <div className="col text-center">
          <h3 className="medium">Student</h3>
          <h4 className="text-primary font-weight-light">{data.students}</h4>
        </div>
        <div className="col text-center">
          <h3 className="medium">Level</h3>
          <h4 className="text-primary font-weight-light">{data.level}</h4>
        </div>
      </div>
    </section>
  );
}
