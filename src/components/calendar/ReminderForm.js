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
      className={`modal sm:w-2/3 sm:h-full h-3/5 shadow-2xl mx-auto
      bg-gradient-to-tr from-brown-dark to-brown-light rounded-md absolute
      z-50 inset-0 py-14 px-2 flex justify-around ${showHideModal}`}
    >
      <div className="lg:flex hidden w-2/5 items-end">
        <img src="/img/calendar-graphic.svg" alt="set a reminder" />
      </div>
      <form
        onSubmit={handleReminderSubmitForm}
        className="bg-white p-6 rounded-md shadow-lg text-md"
      >
        <fieldset
          className="p-3 border border-gray-primary flex flex-col
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
            className="w-full py-2 border border-gray-primary rounded-md
            shadow-inner"
          />
          <label
            htmlFor="dateReminder"
            className="p-2 rounded-md outline-none border border-gray-primary 
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
            />
          </label>
          <button
            type="submit"
            className={`bg-rose-middle py-4 rounded-md shadow-sm uppercase ${
              isInvalid && 'opacity-50'
            }`}
          >
            Set reminder
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
