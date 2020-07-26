import React from "react";

const Title = (id, className) => {
  return <div className={"grid-8 col-1-8 " + className}>{id}</div>;
};

export default Title;
