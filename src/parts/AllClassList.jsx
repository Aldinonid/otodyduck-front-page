import React from "react";

import Card from "elements/Card";

import "assets/scss/style.scss";

export default function AllClassList({ data }) {
  return (
    <section className="container">
      <div className="text-center">
        <h1 className="medium">All Class</h1>
        <h5 className="text-gray-500">
          Don’t lose update with others.
          <br />
          Let's follow the development of technology.
        </h5>
      </div>
      <div className="row justify-content-md-center mb-5">
        <div className="col-8">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="container-grid mb-5">
        {data.map((item, index) => {
          return (
            <div className="item column-4" key={index}>
              <Card
                item_id={item._id}
                imageUrl={item.imageUrl}
                name={item.name}
                type={item.type}
                price={item.price}
                teacherImg={item.teacher.imageUrl}
                teacherName={item.teacher.name}
                teacherJob={item.teacher.job}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
