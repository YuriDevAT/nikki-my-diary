import React from "react";
import { Hero } from "../components";
import CalendarView from "../components/calendar/index";

const Home = () => (
  <>
    <Hero heading="What's up for today" />
    <CalendarView />
  </>
);

export default Home;
