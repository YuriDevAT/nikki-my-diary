import React from 'react';
import Reminder from './Reminder';
import { Text } from '../../context/Language';

const ReminderList = ({ reminders, setReminders, handleDeleteClick }) => (
  <div className="w-96">
    {!reminders ||
      (reminders.length === 0 && (
        <div
          className="h-full flex items-center flex-col px-6 relative
        justify-around"
        >
          <p>
            <Text tid="calendarWarning" />
          </p>
          <img src="/img/pics/kawai2.png" alt="" />
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

export default ReminderList;
