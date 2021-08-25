import React from "react";
import Quote from "./Quote";
import { Text } from "../../context/Language";

const HomeView = () => {
  return (
    <div className="">
      <div className="container py-8">
        <h1 className="text-center text-3xl">
          <Text tid="homeHeader" />
        </h1>
      </div>
      <Quote />
    </div>
  );
};

export default HomeView;
