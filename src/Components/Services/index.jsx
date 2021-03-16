import React from "react";
import Service from "./Service/Service";
import Servhead from "./serviceTab";
import Whyus from "./Whyus";
import Tools from "./Tools";
import Crumb from "./Crumb";

const services = () => {
  return (
    <div>
      <Crumb />
      <Service />
      <Servhead/>
      <Tools />
      <Whyus />

    </div>
  );
};

export default services;
