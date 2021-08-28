import React from 'react';
import { Text } from '../../context/Language';

const HomeView = () => (
  <div className="">
    <div className="container py-8">
      <h1 className="text-center text-3xl">
        <Text tid="homeHeader" />
      </h1>
    </div>
  </div>
);

export default HomeView;
