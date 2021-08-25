import React from "react";
import sad from "./img/sad.png";
import happy from "./img/happy.png";
import mixed from "./img/mixed-feelings.png";
import motivated from "./img/motivated.png";
import okay from "./img/okay.png";

const Entrie = ({
  entrie,
  onEditClick,
  onDeleteClick,
  showEntrie,
  handleEntrieClose,
}) => {
  const showHideModal = showEntrie ? "block" : "hidden";

  return (
    <div
      className={`container modal w-2/3 mx-auto z-50 bg-white h-full px-14 py-2 absolute inset-0 -top-32 shadow-md backdrop-blur-md ${showHideModal}`}
    >
      <div>
        <img
          src={
            entrie.mood === "Happy"
              ? happy
              : entrie.mood === "Sad"
              ? sad
              : entrie.mood === "Okay"
              ? okay
              : entrie.mood === "Motivated"
              ? motivated
              : mixed
          }
          alt="I feel how I feel."
          className="absolute h-44 left-2 top-6 opacity-20 sm:opacity-50"
        />
      </div>
      <div className="h-4/5 text-center">
        <p className="text-left">{entrie.date}</p>
        <h2 className="text-3xl pb-4">{entrie.title}</h2>
        <p>{entrie.text}</p>
      </div>
      <div className="w-full flex justify-around py-8 border-t-2 border-gray-primary absolute bottom-0 left-0">
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
      <button
        type="button"
        onClick={handleEntrieClose}
        className="absolute top-4 right-4 rounded-full w-10 h-10 flex justify-center bg-rose-light shadow-2xl"
      >
        <img src="/img/icons/close.svg" alt="X" width="20" height="20" />
      </button>
    </div>
  );
};

export default Entrie;
