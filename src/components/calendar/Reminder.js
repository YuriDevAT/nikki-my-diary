import React from "react";

const Reminder = ({ reminder, handleDeleteClick }) => {
  return (
    <div>
      <li className="w-3/4 flex justify-around mx-auto">
        <input
          type="checkbox"
          className="checked:bg-pink-500 checked:border-transparent"
        />
        <p>{reminder.date}</p>
        <p>{reminder.text}</p>
        <button onClick={() => handleDeleteClick(reminder.id)} className="">
          <abbr title="Delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="16px"
            >
              <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
            </svg>
          </abbr>
        </button>
      </li>
    </div>
  );
};

export default Reminder;
