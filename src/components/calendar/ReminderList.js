import React from "react";
import Reminder from "./Reminder";

const ReminderList = ({ reminders, handleDeleteClick }) => {
  return (
    <div>
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
  );
};

export default ReminderList;
