import React from "react";
import "./index.scss";

const index = ({ data }) => {
  return (
    <div className="featured text-center">
      <img
        src={data.imageUrl}
        alt={data.name}
        height="100px"
        width="100px"
        style={{ borderRadius: "50px" }}
      />
      <h5 className="mt-4">{data.name}</h5>
      <p>{data.job}</p>
    </div>
  );
};

export default index;
