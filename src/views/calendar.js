import React from "react";
import { Hero } from "../components";
import CalendarView from "../components/calendar/index";

const Calendar = () => (
  <>
    <Hero heading="What's up for today?" />
    <CalendarView />
  </>
);

export default Calendar;
