import React from "react";

const Hero = (props) => (
  <div className="container py-10 fixed mt-32 z-10 bg-gray-background">
    <h1 className="text-center text-3xl">{props.heading}</h1>
  </div>
);

export default Hero;
