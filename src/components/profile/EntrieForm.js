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
      className={`container shadow-2xl bg-gradient-to-tr from-rose-dark to-rose-light rounded-md absolute z-50 inset-0 px-2 flex justify-around ${showHideModal}`}
    >
      <div className="w-1/2 flex items-end">
        <img src="/img/calendar-graphic.svg" alt="write an entrie" />
      </div>
      <form
        onSubmit={onAddFormSubmit}
        className="bg-white p-6 rounded-md shadow-lg text-md h-3/4"
      >
        <fieldset className="p-3 border border-gray-primary rounded-md w-full">
          <legend className="text-md p-2">今日はどうですか。</legend>
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
            <label
              htmlFor="date"
              className="py-2 pl-2 rounded-md border border-gray-primary m-4 shadow-inner"
            >
              Date:
              <input
                type="date"
                id="date"
                name="date"
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
              rows="10"
              value={entrie}
              onChange={onAddInputChange}
              className="w-full py-2 border border-gray-primary rounded-md shadow-inner"
              required
            />
          </label>
          <button
            type="submit"
            onClick={onClose}
            className={`bg-pink-300 py-4 rounded-md shadow-sm uppercase ${
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
        className="absolute top-4 left-4 rounded-full px-6 py-3 bg-rose-light shadow-2xl"
      >
        X
      </button>
    </div>
  );
};

export default EntrieForm;
