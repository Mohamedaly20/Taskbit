import React from "react";

const Slider1 = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      <img src={data} style={{ width: "100%", objectFit: "contain" }} />
    </div>
  );
};

export default Slider1;
