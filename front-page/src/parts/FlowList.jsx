import React from "react";
import Fade from "react-reveal/Fade";

import FlowCard from "elements/FlowCard";

export default function FlowList({ data }) {
  return (
    <section className="container">
      <Fade bottom>
        <div className="mt-4 text-center">
          <h1 className="medium">Your Future's Journey</h1>
          <h5 className="text-gray-500">
            Save your precious time
            <br />
            with more targeted learning.
          </h5>
        </div>
      </Fade>
      <div className="container-grid mt-5">
        {data.map((item, index) => {
          return (
            <div className="item column-6" index={index}>
              <Fade bottom delay={300 * index}>
                <FlowCard
                  item_id={item._id}
                  slugh={item.slugh}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  level={item.level}
                  classTotal={item.classTotal}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
