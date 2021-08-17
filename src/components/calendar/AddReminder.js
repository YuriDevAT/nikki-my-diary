import React from "react";

const AddReminder = ({
  reminder,
  handleReminderChange,
  handleReminderSubmitForm,
  date,
  handleDateChange,
}) => {
  return (
    <form
      onSubmit={handleReminderSubmitForm}
      className="xl:w-1/2 mx-auto bg-gray-200 p-6 rounded-md shadow-lg text-md"
    >
      <fieldset className="p-3 bg-white flex flex-col rounded-md max-w-full">
        <legend className="text-sm bg-white rounded-sm p-2 shadow-sm">
          What do you want to be reminded of?
        </legend>
        <label htmlFor="reminder">
          <input
            type="text"
            name="reminder"
            id="reminder"
            value={reminder}
            onChange={handleReminderChange}
            className="w-full p-3 border-2 rounded-md"
          />
        </label>
        <label
          htmlFor="dateReminder"
          className="p-2 pl-2 rounded-md shadow-sm outline-none focus:border-gray-600 border-2 m-4"
        >
          Date:
          <input
            type="date"
            name="date"
            value={date.toLocaleString()}
            required
            onChange={handleDateChange}
          />
        </label>
        <button
          type="submit"
          className="bg-pink-300 py-4 rounded-md shadow-sm uppercase"
        >
          Set reminder
        </button>
      </fieldset>
    </form>
  );
};

export default AddReminder;
