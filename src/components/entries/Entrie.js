import React from "react";

const Entrie = ({ entrie, onEditClick, onDeleteClick }) => {
  return (
    <li key={entrie.id} className="h-56 m-2 p-2 bg-white rounded-sm shadow-sm">
      <div className="h-5/6 overflow-auto break-words">{entrie.text}</div>
      <div className="flex justify-around">
        <button onClick={() => onEditClick(entrie)} className="">
          <abbr title="Edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="24px"
            >
              <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
            </svg>
          </abbr>
        </button>
        <button onClick={() => onDeleteClick(entrie.id)} className="">
          <abbr title="Delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="24px"
            >
              <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
            </svg>
          </abbr>
        </button>
      </div>
    </li>
  );
};

export default Entrie;
