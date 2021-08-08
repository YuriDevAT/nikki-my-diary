import React from "react";

const AddEntrie = ({ entrie, setEntrie }) => {
  const handleInputChange = (e) => {
    setEntrie(e.target.value);
  };

  return (
    <>
      <input
        name="entrie"
        type="text"
        placeholder="How was your day?"
        value={entrie}
        onChange={handleInputChange}
      />
    </>
  );
};

export default AddEntrie;
