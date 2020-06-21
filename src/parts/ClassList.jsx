import React from "react";

import Card from "elements/Card";

export default function ClassList({ data }) {
  return (
    <>
      <hr />
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
          {/* DO LOOPING FOR 6 CARD */}

          {data.slice(0, 6).map((item, index) => {
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
    </>
  );
}
