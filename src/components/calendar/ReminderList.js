import React from "react";
import Reminder from "./Reminder";

const ReminderList = ({ reminders, handleDeleteClick }) => {
  return (
    <div className="container">
      <div className="overflow-auto my-6 w-full">
        {reminders.map((reminder) => (
          <Reminder
            key={reminder.id}
            reminder={reminder}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ReminderList;
