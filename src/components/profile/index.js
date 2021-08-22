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
  const [title, setTitle] = useState("");
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");
    if (savedEntries) {
      return JSON.parse(savedEntries);
    } else {
      return [];
    }
  });

  const entrieCount = entries.length;

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
          title: title,
          mood: mood,
          date: date,
          text: entrie.trim(),
          active: false,
        },
      ]);
    }
    setEntrie("");
    setTitle("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
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
    <div className="container p-8 text-lg relative">
      <h2 className="float-right">
        You have {entrieCount} {entrieCount === 1 ? `entrie` : `entries`} so
        far.
      </h2>
      <EntrieList
        entries={entries}
        setEntries={setEntries}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      {!entries ||
        (entries.length === 0 && (
          <p>No entries available. Please add some entries.</p>
        ))}
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
          title={title}
          setTitle={setTitle}
          onTitleChange={handleTitleChange}
        />
      )}
    </div>
  );
};

export default ProfileView;
