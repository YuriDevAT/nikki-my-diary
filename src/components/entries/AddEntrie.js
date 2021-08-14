import React from "react";

const AddEntrie = ({
  entrie,
  onAddFormSubmit,
  onAddInputChange,
  onHandleDateChange,
  onHandleMoodChange,
  date,
  heading,
  onHeadingChange,
}) => {
  return (
    <form onSubmit={onAddFormSubmit} className="sm:w-1/2 text-center mx-auto">
      <h2 className="text-2xl py-6">今日はどうですか。</h2>
      <label htmlFor="heading">
        <input
          type="text"
          id="heading"
          onChange={onHeadingChange}
          value={heading}
        />
      </label>
      <label>
        How are you feeling today?
        <select onChange={onHandleMoodChange}>
          <option>Happy</option>
          <option>Okay</option>
          <option>Sad</option>
          <option>Motivated</option>
          <option>Mixed feelings</option>
        </select>
      </label>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date.toLocaleString()}
        min="2021-01-01"
        max="2031-12-31"
        required
        onChange={onHandleDateChange}
      ></input>
      <label htmlFor="entrie">
        <textarea
          name="entrie"
          type="text"
          value={entrie}
          onChange={onAddInputChange}
          className="w-full p-8 border-2 rounded-sm"
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEntrie;
