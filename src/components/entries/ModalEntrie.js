import React from "react";

const ModalEntrie = ({
  entrie,
  onAddFormSubmit,
  onAddInputChange,
  onHandleDateChange,
  onHandleMoodChange,
  date,
  heading,
  showModal,
  onClose,
  onHeadingChange,
}) => {
  const showHideModal = showModal ? "block" : "hidden";
  return (
    <div className={`w-full h-96 absolute z-50 inset-0 py-14 ${showHideModal}`}>
      <form
        onSubmit={onAddFormSubmit}
        className="xl:w-1/2 mx-auto bg-gray-200 p-6 rounded-md shadow-lg text-md"
      >
        <fieldset className="p-3 bg-white flex flex-col rounded-md max-w-full">
          <legend className="text-sm bg-white rounded-sm p-2 shadow-sm">
            今日はどうですか。
          </legend>
          <label htmlFor="heading">Title</label>
          <input
            type="text"
            id="heading"
            name="heading"
            className="py-2 rounded-md pl-2 outline-none focus:border-gray-600 border-2 max-w-full"
            onChange={onHeadingChange}
            value={heading}
            required
          />
          <div className="flex justify-around">
            <label>
              How are you feeling today?
              <select
                onChange={onHandleMoodChange}
                aria-label="select in which mood you are"
                className="p-2 pl-2 rounded-md shadow-sm outline-none focus:border-gray-600 border-2 m-4"
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
              className="p-2 pl-2 rounded-md shadow-sm outline-none focus:border-gray-600 border-2 m-4"
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
              value={entrie}
              onChange={onAddInputChange}
              className="w-full p-8 border-2 rounded-md"
              required
            />
          </label>
          <button
            type="submit"
            onClick={onClose}
            className="bg-pink-300 py-4 rounded-md shadow-sm uppercase"
          >
            Add Entrie
          </button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ModalEntrie;
