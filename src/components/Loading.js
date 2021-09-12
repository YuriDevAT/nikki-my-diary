import React from 'react';
import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <Loader
      type="TailSpin"
      alt="Loading..."
      color="#00000059"
      height={70}
      width={70}
      className="flex justify-center mt-12"
    />
  );
}
