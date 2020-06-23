import React from "react";

import FlowCard from "elements/FlowCard";

export default function FlowList({ data }) {
  return (
    <section className="container">
      <div className="mt-4 text-center">
        <h1 className="medium">Your Future's Journey</h1>
        <h5 className="text-gray-500">
          Save your precious time
          <br />
          with more targeted learning.
        </h5>
      </div>
      <div className="container-grid mt-5">
        {data.map((item, index) => {
          return (
            <div className="item column-6" index={index}>
              <FlowCard
                item_id={item._id}
                slugh={item.slugh}
                imageUrl={item.imageUrl}
                name={item.name}
                level={item.level}
                classTotal={item.classTotal}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
