import React from "react";

const ReminderForm = ({
  reminder,
  handleReminderChange,
  handleReminderSubmitForm,
  date,
  handleDateChange,
  showModal,
  onClose,
}) => {
  const showHideModal = showModal ? "block" : "hidden";
  const isInvalid = reminder === "" || date === "";

  return (
    <div
      className={`container h-full shadow-2xl bg-gradient-to-tr from-brown-dark to-brown-light rounded-md absolute z-50 inset-0 py-14 px-2 flex justify-around ${showHideModal}`}
    >
      <div className="w-1/2 flex items-end">
        <img src="/img/calendar-graphic.svg" alt="set a reminder" />
      </div>
      <form
        onSubmit={handleReminderSubmitForm}
        className="bg-white p-6 rounded-md shadow-lg text-md"
      >
        <fieldset className="p-3 border border-gray-primary flex flex-col h-full justify-around rounded-md w-full">
          <legend className="text-md p-2">
            What do you want to be reminded of?
          </legend>
          <input
            type="text"
            name="reminder"
            aria-label="reminder"
            aria-required="true"
            value={reminder}
            onChange={handleReminderChange}
            className="w-full py-2 border border-gray-primary rounded-md shadow-inner"
          />
          <label
            htmlFor="dateReminder"
            className="py-2 rounded-md outline-none border border-gray-primary m-4 shadow-inner"
          >
            Date:
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
            onClick={onClose}
            className={`bg-rose-middle py-4 rounded-md shadow-sm uppercase ${
              isInvalid && "opacity-50"
            }`}
          >
            Set reminder
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

export default ReminderForm;
