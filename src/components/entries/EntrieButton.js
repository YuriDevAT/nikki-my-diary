import React from "react";

const EntrieButton = ({ entrie }) => {
  return (
    <li
      key={entrie.id}
      className="m-2 rounded-sm shadow-sm overflow-hidden flex"
    >
      <div className="flex justify-between w-full">
        <p className="bg-purple-300 w-1/4 px-3 py-4">{entrie.date}</p>
        <p className="bg-yellow-300 w-3/4 px-3 py-4">{entrie.heading}</p>
      </div>
    </li>
  );
};

export default EntrieButton;
