import React from "react";
import { Hero, Footer } from "../components";
import CalendarView from "../components/calendar/index";

const Calendar = () => (
  <>
    <Hero heading="What's up for today" />
    <CalendarView />
    <Footer />
  </>
);

export default Calendar;
