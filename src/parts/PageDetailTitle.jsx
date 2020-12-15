import React from "react";
import Button from "elements/Button";
import Youtube from "react-youtube";
import Fade from "react-reveal/Fade";

import Course from "elements/Course";
import Mentor from "elements/MentorCard";
import Accordion from "elements/Accordion";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";

export default function ClassDetail({ data }) {
  const trailerId = data?.chapter?.[0].lesson[0].video;

  let courseList = [];
  let chapters = data.chapter?.map((chapter) =>
    chapter?.lesson?.map((lesson) => courseList.push(lesson.name))
  );
  console.log(chapters);

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
              Build by {data.mentor_id?.name}
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
              <h4 className="text-primary font-weight-light">
                {capitalizeFirstLetter(data?.level ?? "Level")}
              </h4>
            </div>
          </div>
        </Fade>
        <div className="mt-4 row justify-content-around">
          <Fade bottom>
            <div className="col col-8">
              <Youtube
                videoId={trailerId}
                id={trailerId}
                opts={{
                  playerVars: {
                    loop: 1,
                    mute: 0,
                    autoplay: 1,
                  },
                }}
              />
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-4 mb-3">
              <Course data={courseList} slug={data?.slug} type={data?.type} />
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
          {data.tools ? (
            <div className="col col-4">
              <Fade bottom>
                <h2>Tools</h2>
                {data?.tools?.map((item, index) => {
                  return (
                    <div className="row mb-4" key={index}>
                      <div className="col col-2">
                        <img
                          src={item.image}
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
                          className="text-dark"
                          style={{
                            color: "#101B52",
                            textDecoration: "underline",
                          }}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </Fade>
            </div>
          ) : (
            <div className="col col-4">
              <Fade bottom>
                <h2>No Tools</h2>
              </Fade>
            </div>
          )}
        </div>
      </section>

      <section className="container">
        <div className="" style={{ width: "70%" }}>
          <h2>Join and Learn</h2>
          <p>Class Course that we will study</p>
          {data?.chapter?.map((chapter, chapterIndex) => {
            return (
              <Accordion title={chapter.name} key={chapterIndex}>
                {chapter.lesson?.map((lesson, lessonIndex) => {
                  return (
                    <p className="accordion__text" key={lessonIndex}>
                      {lesson.name}
                    </p>
                  );
                })}
              </Accordion>
            );
          })}
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
              <div className="col-3 mb-5">
                <Mentor data={data.mentor_id} />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
