import React from 'react';
import { Text } from '../../context/Language';

const HomeView = () => (
  <div className="container h-full mt-44 flex flex-col mx-auto">
    <section className="h-3/5">
      <h1 className="text-7xl py-8">
        <Text tid="homeHeader" />
      </h1>
      <h3 className="text-3xl">
        The online journal which helps you improve your Japanese skills.
      </h3>
      <h2 className="text-center mt-44 text-4xl font-thin">
        がんばってください〜
      </h2>
    </section>
    <div className="flex justify-around text-center h-full w-full bg-opacity-60 bg-white-base mt-48 py-8 rounded-3xl">
      <section className="w-1/4 bg-gradient-to-br from-green-light to-green-dark rounded-md shadow-md">
        <h2 className="text-2xl py-4 text-lila-dark">Write everyday</h2>
        <h3 className="text-xl px-12">
          Writing about your day every night to bring your Japanese skills to
          the next level.
        </h3>
      </section>
      <section className="w-1/4 bg-gradient-to-br from-lila-light to-lila-dark rounded-md shadow-md">
        <h2 className="text-2xl py-4 text-blue-dark">Set reminders</h2>
        <h3 className="text-xl px-12">
          Set reminders to never forget to pen an entry again.
        </h3>
      </section>
      <section className="w-1/4 bg-gradient-to-br from-gray-light to-gray-dark rounded-md shadow-md">
        <h2 className="text-2xl py-4 text-gray-dark">Celebrate your success</h2>
        <h3 className="text-xl px-12">
          Pay attention of your improvments and celebrate your success.
        </h3>
      </section>
    </div>
  </div>
);

export default HomeView;
