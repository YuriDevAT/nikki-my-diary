import React, { useState } from "react";
import EntrieModal from "./EntrieModal";

const AddButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mx-auto max-w-screen-lg h-full">
      <div className="">
        <div className="flex justify-end h-16">
          <button
            className="w-20 h-20 mr-4 rounded-full bg-pink-200 shadow-md flex justify-center items-center"
            onClick={() => setShowModal(true)}
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
        <EntrieModal onClose={() => setShowModal(false)} show={showModal} />
      </div>
    </div>
  );
};

export default AddButton;
