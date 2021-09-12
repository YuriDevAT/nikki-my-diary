import React from 'react';

const BikeForm = ({
  bike,
  onAddFormSubmit,
  onAddInputChange,
  onHandleDateChange,
  date,
  title,
  showModal,
  onClose,
  onTitleChange,
}) => {
  const showHideModal = showModal ? 'block' : 'hidden';
  const isInvalid = bike === '' || title === '';

  return (
    <div
      className={`container sm:w-3/5 mx-auto modal shadow-2xl h-3/5 sm:h-full 
      py-8 mt-20 flex justify-center items-center bg-gradient-to-tr 
      from-lila-dark to-rose-light rounded-md absolute z-30 inset-0 
      ${showHideModal}`}
    >
      <form
        onSubmit={onAddFormSubmit}
        className="bg-white-pure max-w-4/5 p-6 rounded-md shadow-lg text-md
        min-h-full bg-opacity-20 backdrop-blur-2xl border border-white-pure 
        border-opacity-25"
      >
        <fieldset className="p-3 border border-white-pure rounded-md w-full">
          <legend className="text-md p-2">Sell a bike</legend>
          <label htmlFor="title">Information</label>
          <input
            type="text"
            id="title"
            name="title"
            className="sm:w-full py-2 pl-2 border border-gray-light rounded-md 
            shadow-inner"
            onChange={onTitleChange}
            value={title}
            required
            placeholder="Add a title to this entry"
          />
          <div className="flex justify-around">
            <label htmlFor="date" className="pl-2 rounded-md m-4 ">
              model
              <input
                type="date"
                id="date"
                name="date"
                className="shadow-inner rounded-md ml-2 py-2"
                value={date.toLocaleString()}
                required
                onChange={onHandleDateChange}
              />
            </label>
          </div>
          <label htmlFor="entry">
            Times
            <textarea
              name="entry"
              type="text"
              id="entry"
              value={bike}
              onChange={onAddInputChange}
              className="w-full h-44 py-2 border pl-2 border-gray-primary
              rounded-md shadow-inner sm:resize-none"
              required
              placeholder="Write something..."
            />
          </label>
          <button
            type="submit"
            aria-disabled="true"
            className={`bg-green-dark w-full py-4 mt-2 rounded-md shadow-sm
            uppercase ${isInvalid && 'opacity-50'}`}
          >
            Add bike
          </button>
        </fieldset>
      </form>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 left-4 rounded-full w-10 h-10 flex
        justify-center bg-lila-dark shadow-2xl items-center"
      >
        <img src="/img/icons/close.svg" alt="X" width="20" height="20" />
      </button>
    </div>
  );
};

export default BikeForm;
