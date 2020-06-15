import React from "react";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function ClassList({ data }) {
  return (
    <section className="container">
      <div className="mt-40">
        <h4 className="medium text-center">
          Thousands Class Are Waiting for You
        </h4>
        <p className="font-weight-medium text-gray-500 text-center mb-4">
          Start your journey from beginner to become a creator
        </p>
      </div>

      <div className="container-grid">
        {data.map((item, index) => {
          return (
            <div className="item column-4" key={index}>
              <div className="card">
                <Button
                  type="link"
                  href={`/class/${item._id}`}
                  className="stretched-link d-block"
                ></Button>
                <img src={`${item.imageUrl}`} alt="" className="img-class" />
                <h3 className="mb-3 text-dark">{item.name}</h3>
                <hr />
                <h4 className="mt-2 mb-3 text-dark">
                  Rp {formatNumber(item.price)}
                </h4>
                <hr />
                <div className="row align-items-center no-gutters">
                  <div className="mt-2 mb-3 col-auto">
                    <img
                      src={item.teacher.imageUrl}
                      alt=""
                      height="50px"
                      width="50px"
                      style={{ borderRadius: "50px" }}
                    />
                  </div>
                  <div className="col pl-2">
                    <h5
                      className="mt-2 line-height-1 text-dark"
                      style={{ marginBottom: "5px" }}
                    >
                      {item.teacher.name}
                    </h5>
                    <h6 className="font-weight-medium text-dark">
                      {item.teacher.job}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col text-center">
            <Button
              type="link"
              href="/all-class"
              className="btn btn-primary medium text-white mt-5 px-3 py-2"
            >
              View All Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
