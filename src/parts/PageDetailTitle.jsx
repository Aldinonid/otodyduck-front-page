import React from "react";
import Button from "elements/Button";
import Youtube from "react-youtube";
import Fade from "react-reveal/Fade";

import Course from "elements/Course";
import Mentor from "elements/MentorCard";

export default function ClassDetail({ data }) {
  const trailerId = data.trailerUrl.split("/").reverse();
  return (
    <>
      <section className="container">
        <Fade bottom>
          <div className="text-center">
            <h1 className="medium">Online Class</h1>
            <h1 className="medium" style={{ marginTop: "-30px" }}>
              {data.name}
            </h1>
            <h5 className="text-gray-500" style={{ marginTop: "-10px" }}>
              Build by {data.mentor}
            </h5>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row justify-content-md-center mt-5">
            <div className="col text-center">
              <h3 className="medium">Student</h3>
              <h4 className="text-primary font-weight-light">
                {data.total_students}
              </h4>
            </div>
            <div className="col text-center">
              <h3 className="medium">Level</h3>
              <h4 className="text-primary font-weight-light">{data.level}</h4>
            </div>
          </div>
        </Fade>
        <div className="mt-4 row justify-content-around">
          <Fade bottom>
            <div className="col col-8">
              <Youtube
                videoId={trailerId[0]}
                opts={{
                  playerVars: {
                    loop: 1,
                    mute: 1,
                    autoplay: 1,
                  },
                }}
              />
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-4 mb-3">
              <Course data={data.courseList} />
            </div>
          </Fade>
        </div>

        <div className="mt-5 row justify-content-around">
          <Fade bottom>
            <div className="col col-8">
              <h2>About Class</h2>
              <p className="text-justify pr-3">{data.description}</p>
            </div>
          </Fade>
          <div className="col col-4">
            <Fade bottom>
              <h2>Tools</h2>
              {data.tool.map((item, index) => {
                return (
                  <div className="row mb-4" key={index}>
                    <div className="col col-2">
                      <img
                        src={item.imageurl}
                        alt={item.name}
                        height="50"
                        width="50"
                      />
                    </div>
                    <div className="col col-auto">
                      <p className="mb-0">{item.name}</p>
                      <Button
                        type="link"
                        isExternal
                        href={item.url}
                        style={{ color: "#101B52" }}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                );
              })}
            </Fade>
          </div>
        </div>
      </section>
      <section className="mentor-wrapper">
        <div className="container">
          <Fade bottom>
            <div className="row justify-content-center">
              <div className="col-11 text-center">
                <h2>Class Mentor</h2>
                <p>Chosen as a trusted and reliable teacher</p>
              </div>
            </div>
            <div className="row justify-content-center">
              {data.teacher.map((item, index) => {
                return (
                  <div className="col-3 mb-5" key={index}>
                    <Fade bottom delay={200 * index}>
                      <Mentor data={item} />
                    </Fade>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
