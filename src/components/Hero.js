import React from "react";

const Hero = (props) => (
  <div className="container py-8">
    <h1 className="text-center text-3xl">{props.heading}</h1>
  </div>
);

export default Hero;
