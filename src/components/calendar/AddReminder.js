import React from "react";

const AddReminder = ({
  reminder,
  handleReminderChange,
  handleReminderSubmitForm,
  handleDateChange,
  date,
}) => {
  return (
    <form
      onSubmit={handleReminderSubmitForm}
      className="border-2 flex flex-col  bg-white"
    >
      <h2>What do you want to be reminded of?</h2>
      <label
        htmlFor="dateReminder"
        className="p-2 pl-2 rounded-md shadow-sm outline-none focus:border-gray-600 border-2 m-4"
      >
        Date:
        <input
          type="date"
          name="dateReminder"
          value={date.toLocaleString()}
          required
          onChange={handleDateChange}
        />
      </label>
      <label htmlFor="reminder">
        <input
          type="text"
          name="reminder"
          id="reminder"
          value={reminder}
          onChange={handleReminderChange}
          className="bg-blue-300 my-8"
        />
      </label>
      <button type="submit" className="bg-green-200 py-4 px-3">
        Set reminder
      </button>
    </form>
  );
};

export default AddReminder;
