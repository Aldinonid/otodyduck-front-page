import React from "react";
import Fade from "react-reveal/Fade";

import CourseFlowCard from "elements/CourseFlowCard";

const FlowDetail = ({ data }) => {
  return (
    <section className="container mb-5">
      <Fade bottom>
        <div className="text-center">
          <h1 className="medium">Learning Flow</h1>
          <h1 className="medium" style={{ marginTop: "-30px" }}>
            {data?.name}
          </h1>
          <h5 className="text-gray-500" style={{ marginTop: "-10px" }}>
            Complete all the classes below properly to achieve your goal
          </h5>
        </div>
      </Fade>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-8">
            {data?.courses?.map((item, index) => {
              return (
                <Fade bottom delay={200 * index}>
                  <CourseFlowCard data={item} key={index} />
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowDetail;
