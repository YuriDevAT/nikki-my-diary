import React from "react";

const Entrie = ({ entrie, onEditClick, onDeleteClick }) => {
  return (
    <div
      className={`container w-2/3 bg-white float-right h-full px-14 py-2 mt-2 mr-2" ${
        entrie.active ? "block" : "hidden"
      }`}
    >
      <p className="">{entrie.date}</p>
      <h2 className="text-2xl">{entrie.heading}</h2>
      <p>{entrie.mood}</p>
      <p>{entrie.text}</p>
      <div className="w-full flex justify-around py-8 border-t-2">
        <button onClick={() => onEditClick(entrie)} className="">
          <abbr title="Edit">
            <img
              src="/img/icons/edit-pencil.svg"
              alt="delete"
              className="h-5 w-5"
            />
          </abbr>
        </button>
        <button onClick={() => onDeleteClick(entrie.id)} className="">
          <abbr title="Delete">
            <img src="/img/icons/trash.svg" alt="delete" className="h-5 w-5" />
          </abbr>
        </button>
      </div>
    </div>
  );
};

export default Entrie;
