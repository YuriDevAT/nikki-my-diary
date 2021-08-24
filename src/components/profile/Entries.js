import React from "react";

const Entries = ({ entrie, onShow }) => {
  return (
    <div>
      <button
        key={entrie.id}
        className="shadow-md overflow-hidden w-64"
        onClick={onShow}
      >
        <div className="flex flex-col justify-between overflow-hidden">
          <p className="bg-rose-light px-2 py-4">{entrie.date}</p>
          <p className="bg-white px-2 py-4">{entrie.title}</p>
        </div>
      </button>
    </div>
  );
};

export default Entries;
