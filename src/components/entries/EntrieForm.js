import React, { useEffect, useState } from "react";
import AddEntrie from "./AddEntrie";
import EntrieList from "./EntrieList";

const EntrieForm = () => {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");
    if (savedEntries) {
      return JSON.parse(savedEntries);
    } else {
      return [];
    }
  });

  const [entrie, setEntrie] = useState("");

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (entrie !== "") {
      setEntries([
        ...entries,
        {
          id: entries.length + 1,
          text: entrie.trim(),
        },
      ]);
    }
    setEntrie("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AddEntrie entrie={entrie} setEntrie={setEntrie} />
      </form>
      <div>
        <EntrieList entries={entries} />
      </div>
    </div>
  );
};

export default EntrieForm;
