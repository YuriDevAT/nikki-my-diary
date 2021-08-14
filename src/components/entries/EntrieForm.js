import React, { useEffect, useState } from "react";
import AddEntrie from "./AddEntrie";
import EditEntrie from "./EditEntrie";
import EntrieList from "./EntrieList";

import { uuid } from "uuidv4";

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
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntrie, setCurrentEntrie] = useState({});

  const [mood, setMood] = useState("happy");
  const [date, setDate] = useState(new Date());

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleAddInputChange = (e) => {
    setEntrie(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setCurrentEntrie({ ...currentEntrie, text: e.target.value });
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (entrie !== "") {
      setEntries([
        ...entries,
        {
          id: uuid(),
          mood: mood,
          date: date,
          text: entrie.trim(),
        },
      ]);
    }
    setEntrie("");
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateEntrie(currentEntrie.id, currentEntrie);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this entrie?")) {
      const removeEntrie = entries.filter((entrie) => {
        return entrie.id !== id;
      });
      setEntries(removeEntrie);
    }
  };

  const handleUpdateEntrie = (id, updatedEntrie) => {
    const updatedItem = entries.map((entrie) => {
      return entrie.id === id ? updatedEntrie : entrie;
    });
    setIsEditing(false);
    setEntries(updatedItem);
  };

  const handleEditClick = (entrie) => {
    setIsEditing(true);
    setCurrentEntrie({ ...entrie });
  };

  return (
    <div>
      {isEditing ? (
        <EditEntrie
          currentEntrie={currentEntrie}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddEntrie
          entrie={entrie}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
          mood={mood}
          date={date}
          onHandleMoodChange={handleMoodChange}
          onHandleDateChange={handleDateChange}
        />
      )}
      <div className="mx-auto w-full h-full">
        <EntrieList
          entries={entries}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
        {!entries ||
          (entries.length === 0 && (
            <p>No entries available. Please add some entries.</p>
          ))}
      </div>
    </div>
  );
};

export default EntrieForm;
