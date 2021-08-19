import React from "react";

const Reminder = ({ reminder, handleDeleteClick }) => {
  return (
    <>
      <li className="w-96 flex mx-auto relative rounded-md border-2 border-brown-light pl-2 py-2">
        <input type="checkbox" className="" aria-label="checkbox" />
        <p className="mx-4 w-18">{reminder.date}</p>
        <p>{reminder.text}</p>
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
