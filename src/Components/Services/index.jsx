import React from "react";
import Service from "./serviceTab";
import Whyus from "./Whyus";
import Tools from "./Tools";
import Crumb from "./Crumb";

const services = () => {
  return (
    <div>
      <Crumb />
      <Service />
      <Whyus />
      <Tools />
    </div>
  );
};

export default services;
