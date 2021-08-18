import React from "react";

const Reminder = ({ reminder, handleDeleteClick }) => {
  return (
    <>
      <li className="w-3/4 flex justify-around mx-auto">
        <input type="checkbox" className="" aria-label="checkbox" />
        <p>{reminder.date}</p>
        <p>{reminder.text}</p>
        <button onClick={() => handleDeleteClick(reminder.id)} className="">
          <abbr title="Delete">
            <img src="/img/icons/trash.svg" alt="delete" className="h-5 w-5" />
          </abbr>
        </button>
      </li>
    </>
  );
};

export default Reminder;
