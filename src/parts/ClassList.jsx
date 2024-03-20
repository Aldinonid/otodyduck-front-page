import React from "react";
import Fade from "react-reveal/Fade";

import ClassCard from "elements/ClassCard";

export default function ClassList({ data }) {
  return (
    <>
      <Fade bottom>
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

            {data?.slice(0, 6).map((item, index) => {
              return (
                <div className="item column-4" key={index}>
                  <Fade bottom delay={200 * index}>
                    <ClassCard
                      item_id={item.id}
                      slug={item.slug}
                      imageUrl={item.thumbnail}
                      name={item.name}
                      type={item.type.toUpperCase()}
                      price={item.price}
                      teacherImg={item.user.avatar}
                      teacherName={item.user.name}
                      teacherJob={item.user.job}
                    />
                  </Fade>
                </div>
              );
            })}
          </div>
        </section>
      </Fade>
    </>
  );
}
