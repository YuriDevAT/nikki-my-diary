import React from "react";
import Reminder from "./Reminder";

const ReminderList = ({ reminders, handleDeleteClick }) => {
  return (
    <div className="container mb-24">
      <div className="overflow-auto my-6 w-full">
        <ul>
          {reminders.map((reminder) => (
            <Reminder
              key={reminder.id}
              reminder={reminder}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReminderList;
