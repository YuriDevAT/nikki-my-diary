import React, { useContext } from 'react';
import { LanguageContext } from '../../context/Language';

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
  const showHideModal = showModal ? 'block' : 'hidden';
  const isInvalid = entrie === '' || title === '';
  const { dictionary } = useContext(LanguageContext);

  return (
    <div
      className={`container sm:w-3/5 mx-auto modal shadow-2xl h-full py-8
      mt-20 flex justify-center items-center bg-gradient-to-tr 
      from-lila-dark to-rose-light rounded-md absolute z-30 inset-0 
      ${showHideModal}`}
    >
      <form
        onSubmit={onAddFormSubmit}
        className="bg-white-pure max-w-4/5 p-6 rounded-md shadow-lg text-md
        h-full bg-opacity-20 backdrop-blur-2xl border border-white-pure 
        border-opacity-25"
      >
        <fieldset className="p-3 border border-white-pure rounded-md w-full">
          <legend className="text-md p-2">{dictionary.entrieFormLegend}</legend>
          <label htmlFor="title">{dictionary.entrieTitle}</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full py-2 pl-2 border border-gray-light rounded-md 
            shadow-inner"
            onChange={onTitleChange}
            value={title}
            required
            placeholder="Add a title to this entry"
          />
          <div className="flex justify-around flex-wrap">
            <label>
              {dictionary.entrieMood}
              <select
                onChange={onHandleMoodChange}
                aria-label="your mood"
                className="p-2 pl-2 rounded-md border border-gray-light m-4 
                shadow-inner cursor-pointer"
              >
                <option>{dictionary.entrieMood1}</option>
                <option>{dictionary.entrieMood2}</option>
                <option>{dictionary.entrieMood3}</option>
                <option>{dictionary.entrieMood4}</option>
                <option>{dictionary.entrieMood5}</option>
              </select>
            </label>
            <label htmlFor="date" className="pl-2 rounded-md m-4 ">
              {dictionary.formDate}
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
          <label htmlFor="entrie">
            {dictionary.entrieEntrie}
            <textarea
              name="entrie"
              type="text"
              id="entrie"
              value={entrie}
              onChange={onAddInputChange}
              className="w-full h-52 py-2 border pl-2 border-gray-primary
              rounded-md shadow-inner sm:resize-none"
              required
              placeholder="Write something..."
            />
          </label>
          <button
            type="submit"
            className={`bg-lila-dark w-full py-4 mt-2 rounded-md shadow-sm
            uppercase ${isInvalid && 'opacity-50'}`}
          >
            {dictionary.entrieButton}
          </button>
        </fieldset>
      </form>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 left-4 rounded-full w-10 h-10 flex
        justify-center bg-green-light shadow-2xl"
      >
        <img src="/img/icons/close.svg" alt="X" width="20" height="20" />
      </button>
    </div>
  );
};

export default EntrieForm;
