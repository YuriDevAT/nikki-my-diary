import React, { useEffect, useState } from "react";
import AddEntrie from "./AddEntrie";
import EditEntrie from "./EditEntrie";
import EntrieList from "./EntrieList";
import { v4 as uuid } from "uuid";

const ProfileView = () => {
  const [entrie, setEntrie] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntrie, setCurrentEntrie] = useState({});
  const [mood, setMood] = useState("happy");
  const [date, setDate] = useState(new Date());
  const [heading, setHeading] = useState("");
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");
    if (savedEntries) {
      return JSON.parse(savedEntries);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (entrie !== "") {
      setEntries([
        ...entries,
        {
          id: uuid(),
          heading: heading,
          mood: mood,
          date: date,
          text: entrie.trim(),
        },
      ]);
    }
    setEntrie("");
    setHeading("");
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAddInputChange = (e) => {
    setEntrie(e.target.value);
  };

  const handleEditClick = (entrie) => {
    setIsEditing(true);
    setCurrentEntrie({ ...entrie });
  };

  const handleEditInputChange = (e) => {
    setCurrentEntrie({ ...currentEntrie, text: e.target.value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateEntrie(currentEntrie.id, currentEntrie);
  };

  const handleUpdateEntrie = (id, updatedEntrie) => {
    const updatedItem = entries.map((entrie) => {
      return entrie.id === id ? updatedEntrie : entrie;
    });
    setIsEditing(false);
    setEntries(updatedItem);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this entrie?")) {
      const removeEntrie = entries.filter((entrie) => {
        return entrie.id !== id;
      });
      setEntries(removeEntrie);
    }
  };

  return (
    <div className="relative">
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
          setEntrie={setEntrie}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
          mood={mood}
          date={date}
          onHandleMoodChange={handleMoodChange}
          onHandleDateChange={handleDateChange}
          heading={heading}
          setHeading={setHeading}
          onHeadingChange={handleHeadingChange}
        />
      )}
      <div className="">
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

export default ProfileView;
