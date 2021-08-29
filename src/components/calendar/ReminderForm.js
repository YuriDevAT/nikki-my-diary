import React from 'react';
import { Text } from '../../context/Language';

const ReminderForm = ({
  reminder,
  handleReminderChange,
  handleReminderSubmitForm,
  date,
  handleDateChange,
  showModal,
  onClose,
}) => {
  const showHideModal = showModal ? 'block' : 'hidden';
  const isInvalid = reminder === '' || date === '';

  return (
    <div
      className={`modal w-96 h-96 shadow-2xl
      bg-green-light rounded-xl absolute
      z-50 inset-0 top-10 mx-auto px-2 flex justify-around items-center ${showHideModal}`}
    >
      <form
        onSubmit={handleReminderSubmitForm}
        className="bg-white-pure p-6 rounded-md shadow-lg text-md h-80"
      >
        <fieldset
          className="p-3 border border-gray-light flex flex-col
        sm:h-full justify-around rounded-md w-full"
        >
          <legend className="text-md p-2">
            <Text tid="calendarForm" />
          </legend>
          <input
            type="text"
            name="reminder"
            aria-label="reminder"
            aria-required="true"
            value={reminder}
            onChange={handleReminderChange}
            className="w-full py-2 border border-gray-light rounded-md
            shadow-inner"
          />
          <label
            htmlFor="dateReminder"
            className="p-2 rounded-md outline-none border border-gray-dark
            w-full shadow-inner"
          >
            <Text tid="formDate" />
            <input
              type="date"
              name="date"
              id="dateReminder"
              value={date}
              required
              onChange={handleDateChange}
              className="rounded ml-2"
            />
          </label>
          <button
            type="submit"
            className={`bg-rose-dark py-4 rounded-md shadow-sm uppercase ${
              isInvalid && 'opacity-50'
            }`}
          >
            <Text tid="calendarButton" />
          </button>
        </fieldset>
      </form>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 left-4 rounded-full w-10 h-10 flex 
        justify-center bg-rose-light shadow-2xl"
      >
        <img src="/img/icons/close.svg" alt="X" width="20" height="20" />
      </button>
    </div>
  );
};

export default ReminderForm;
