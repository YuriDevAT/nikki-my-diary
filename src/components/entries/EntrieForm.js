import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import AddEntrie from "./AddEntrie";
import EditEntrie from "./EditEntrie";
import Entrie from "./Entrie";

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
          id: new Date(),
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
    const removeEntrie = entries.filter((entrie) => {
      return entrie.id !== id;
    });
    setEntries(removeEntrie);
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
        />
      )}
      <div className="mx-auto w-full h-full bg-yellow-200">
        <ul className="bg-green-300 grid grid-cols-3 gap-8 mt-4 mb-12">
          {entries.map(
            (entrie) =>
              (
                <Entrie
                  entrie={entrie}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              ) || <Skeleton />
          )}
        </ul>
        {!entries ||
          (entries.length === 0 && (
            <p>No entries available. Please add some entries.</p>
          ))}
      </div>
    </div>
  );
};

export default EntrieForm;
