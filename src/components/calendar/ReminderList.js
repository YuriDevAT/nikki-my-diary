import React from "react";
import Reminder from "./Reminder";

const ReminderList = ({ reminders, setReminders, handleDeleteClick }) => {
  return (
    <div className="h-full py-2">
      {!reminders ||
        (reminders.length === 0 && (
          <p>No reminders available. Set a reminder.</p>
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
