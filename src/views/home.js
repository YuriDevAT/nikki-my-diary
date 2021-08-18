import React from "react";
import { Footer, Hero } from "../components";
import HomeView from "../components/home";

const Home = () => (
  <>
    <Hero heading="Welcome to Nikki App" />
    <HomeView />
    <Footer />
  </>
);

export default Home;
