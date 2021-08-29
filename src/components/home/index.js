import React from 'react';
import Footer from '../Footer';
import { Text } from '../../context/Language';

const HomeView = () => (
  <div className="container h-full lg:mt-44 flex flex-col mx-auto">
    <section className="h-3/5 relative">
      <h1 className="text-7xl py-8">
        <Text tid="homeHeader" />
      </h1>
      <h3 className="text-3xl">
        The online journal which helps you improve your Japanese skills.
      </h3>
      <img
        src="/img/pics/kanji.png"
        alt=""
        width="150"
        className="absolute right-80 top-96 hidden xl:block"
      />
      <img
        src="/img/pics/takoyaki.png"
        alt=""
        width="550"
        className="absolute right-0 -top-32 hidden xl:block"
      />
      <h2 className="text-center mt-24 text-4xl font-thin">
        <img src="/img/pics/good-luck.png" alt="good luck" width="50%" />
      </h2>
    </section>
    <section
      className="flex justify-around text-center h-full w-full bg-opacity-60 
    bg-white-base mt-48 py-8 rounded-3xl flex-wrap"
    >
      <div
        className="sm:w-1/4 px-4 sm:px-0 bg-gradient-to-br from-green-light 
      to-green-dark rounded-md shadow-md py-2 relative w-full m-2 sm:m-0 sm:h-96"
      >
        <h2 className="text-2xl py-4 text-lila-dark">Write everyday</h2>
        <h3 className="text-xl lg:px-14">
          Write about your day to bring your Japanese skills to the next level.
        </h3>
        <img
          src="/img/pics/kawai1.png"
          alt=""
          width=""
          className="sm:absolute bottom-0 left-0 right-0 mx-auto w-24 sm:w-44 xl:w-56"
        />
      </div>
      <div
        className="sm:w-1/4 px-4 sm:px-0 bg-gradient-to-br from-lila-light 
      to-lila-dark rounded-md shadow-md py-2 relative w-full m-2 sm:m-0 sm:h-96"
      >
        <h2 className="text-2xl py-4 text-blue-dark">Set reminders</h2>
        <h3 className="text-xl lg:px-14">
          Set reminders to never forget to pen an entry again.
        </h3>
        <img
          src="/img/pics/kawai3.png"
          alt=""
          width="60%"
          className="sm:absolute bottom-0 left-0 right-0 mx-auto w-24 sm:w-44 xl:w-56"
        />
      </div>
      <div
        className="sm:w-1/4 px-4 sm:px-0 bg-gradient-to-br from-gray-light 
      to-gray-dark rounded-md shadow-md py-2 relative w-full m-2 sm:m-0 sm:h-96"
      >
        <h2 className="text-2xl py-4 text-gray-dark">Celebrate your success</h2>
        <h3 className="text-xl lg:px-14">
          Pay attention of your improvments and celebrate your success.
        </h3>
        <img
          src="/img/pics/kawai2.png"
          alt=""
          width="60%"
          className="sm:absolute bottom-0 left-0 right-0 mx-auto w-24 sm:w-44 xl:w-56"
        />
      </div>
    </section>
    <Footer />
  </div>
);

export default HomeView;
