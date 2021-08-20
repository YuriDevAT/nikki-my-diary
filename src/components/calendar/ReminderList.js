import React from "react";
import Reminder from "./Reminder";

const ReminderList = ({ reminders, setReminders, handleDeleteClick }) => {
  return (
    <div>
      <ul>
        {reminders.map((reminder) => (
          <Reminder
            key={reminder.id}
            reminder={reminder}
            reminders={reminders}
            setReminders={setReminders}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReminderList;
