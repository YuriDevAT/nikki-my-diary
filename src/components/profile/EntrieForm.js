import React from "react";

const EntrieForm = ({
  entrie,
  onAddFormSubmit,
  onAddInputChange,
  onHandleDateChange,
  onHandleMoodChange,
  date,
  title,
  showModal,
  onClose,
  onTitleChange,
}) => {
  const showHideModal = showModal ? "block" : "hidden";
  const isInvalid = entrie === "" || title === "";

  return (
    <div
      className={`container shadow-2xl h-auto -top-60 -bottom-20 mt-16 flex justify-center items-center bg-gradient-to-tr from-rose-dark to-rose-light rounded-md absolute z-50 inset-0 ${showHideModal}`}
    >
      <form
        onSubmit={onAddFormSubmit}
        className="bg-white p-6 rounded-md shadow-lg text-md h-4/5 bg-opacity-20 backdrop-blur-2xl border border-white border-opacity-25"
      >
        <fieldset className="p-3 border border-white rounded-md w-full">
          <legend className="text-md p-2">How was your day?</legend>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full py-2 border border-gray-primary rounded-md shadow-inner"
            onChange={onTitleChange}
            value={title}
            required
          />
          <div className="flex justify-around">
            <label>
              How are you feeling today?
              <select
                onChange={onHandleMoodChange}
                aria-label="your mood"
                className="p-2 pl-2 rounded-md border border-gray-primary m-4 shadow-inner cursor-pointer"
              >
                <option>Happy</option>
                <option>Okay</option>
                <option>Sad</option>
                <option>Motivated</option>
                <option>Mixed feelings</option>
              </select>
            </label>
            <label htmlFor="date" className="py-2 pl-2 rounded-md m-4 ">
              Date:
              <input
                type="date"
                id="date"
                name="date"
                className="shadow-inner rounded-md ml-2"
                value={date.toLocaleString()}
                required
                onChange={onHandleDateChange}
              />
            </label>
          </div>
          <label htmlFor="entrie">
            Describe your day
            <textarea
              name="entrie"
              type="text"
              id="entrie"
              rows="9"
              value={entrie}
              onChange={onAddInputChange}
              className="w-full py-2 border border-gray-primary rounded-md shadow-inner resize-none"
              required
            />
          </label>
          <button
            type="submit"
            className={`bg-rose-dark w-full py-4 mt-2 rounded-md shadow-sm uppercase ${
              isInvalid && "opacity-50"
            }`}
          >
            Add Entrie
          </button>
        </fieldset>
      </form>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 left-4 rounded-full w-10 h-10 flex justify-center bg-rose-light shadow-2xl"
      >
        <img src="/img/icons/close.svg" alt="X" width="20" height="20" />
      </button>
    </div>
  );
};

export default EntrieForm;
