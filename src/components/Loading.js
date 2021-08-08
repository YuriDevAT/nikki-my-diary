import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => (
  <Loader
    type="TailSpin"
    alt="Loading..."
    color="#00000059"
    height={70}
    width={70}
    className="flex justify-center mt-12"
  />
);

export default Loading;
