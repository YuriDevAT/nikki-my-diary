import React from "react";

const EntrieList = ({ entries }) => {
  return (
    <ul>
      {entries.map((entrie) => (
        <li key={entrie.id}>{entrie.text}</li>
      ))}
    </ul>
  );
};

export default EntrieList;
