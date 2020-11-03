import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconStudent from "assets/images/icon/ic-student.svg";
import IconClass from "assets/images/icon/ic-class.svg";
import IconTeacher from "assets/images/icon/ic-teacher.svg";

import formatNumber from "utils/formatNumber.js";

import Button from "elements/Button";

export default function Hero({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ marginTop: 50, width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Take <span className="text-primary">New</span> Step, <br />
              Upgrade New <span className="text-primary">Skill</span>
            </h1>
            <p
              className="font-weight-medium text-gray-500 w-75 mb-4"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to get experience and let the world knows
              your expertise
            </p>
            <Button
              className="btn text-white medium px-5"
              type="link"
              href="/class"
              isPrimary
              hasShadow
            >
              Start Learn
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img
                  height="60"
                  width="60"
                  src={IconStudent}
                  alt={`${data?.students} students`}
                />
                <h6 className="mt-3">
                  {formatNumber(data?.students || 0)}{" "}
                  <span className="text-gray-500 font-weight-500">
                    students
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img
                  height="60"
                  width="60"
                  src={IconClass}
                  alt={`${data?.classes} classes`}
                />
                <h6 className="mt-3">
                  {formatNumber(data?.classes || 0)}{" "}
                  <span className="text-gray-500 font-weight-500">classes</span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  height="60"
                  width="60"
                  src={IconTeacher}
                  alt={`${data?.teachers} teachers`}
                />
                <h6 className="mt-3">
                  {formatNumber(data?.teachers || 0)}{" "}
                  <span className="text-gray-500 font-weight-500">
                    teachers
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5" style={{ width: 421, height: 330.54 }}>
            <div>
              <img
                src={ImageHero}
                alt="Otodyduck Hero"
                className="img-fluid position-absolute"
                style={{
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                }}
              />
              <img
                src={ImageHeroFrame}
                alt="Hero Frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
