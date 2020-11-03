import React from "react";
import "./index.scss";

import NotFound from "assets/images/image-not-found.jpg";

const index = ({ data }) => {
  if (!data) return null;

  const imageStyle = {
    height: "100px",
    width: "100px",
    backgroundImage: `url(${data.avatar || NotFound})`,
    backgroundSize: "cover",
    borderRadius: "50px",
  };

  return (
    <div className="featured d-flex flex-column align-items-center">
      <div id="mentor-image" style={imageStyle}></div>
      <h5 className="mt-4">{data.name}</h5>
      <p>{data.job}</p>
    </div>
  );
};

export default index;
