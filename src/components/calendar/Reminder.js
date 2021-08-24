import React from "react";

const Reminder = ({ reminder, reminders, setReminders, handleDeleteClick }) => {
  const handleComplete = () => {
    setReminders(
      reminders.map((item) => {
        if (item.id === reminder.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <li
        className={`sm:w-96 mx-auto relative pl-2 py-2 flex my-2 ${
          reminder.completed ? "line-through opacity-60" : ""
        }`}
      >
        <input type="checkbox" onClick={handleComplete} aria-label="checkbox" />
        <p className="mx-4 sm:w-18 flex items-center">{reminder.date}</p>
        <p className="sm:w-56 text-left">{reminder.text}</p>
        <button onClick={() => handleDeleteClick(reminder.id)}>
          <abbr title="Delete">
            <img
              src="/img/icons/trash.svg"
              alt="delete"
              className="h-5 w-5 ml-4 absolute top-3 right-1"
            />
          </abbr>
        </button>
      </li>
    </>
  );
};

export default Reminder;
