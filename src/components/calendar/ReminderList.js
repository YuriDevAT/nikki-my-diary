import React from "react";
import Reminder from "./Reminder";

const ReminderList = ({ reminders, setReminders, handleDeleteClick }) => {
  return (
    <div className="h-full w-full">
      {!reminders ||
        (reminders.length === 0 && (
          <div className="h-full flex justify-center items-center">
            <p>No reminders available. Set a reminder.</p>
          </div>
        ))}
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
