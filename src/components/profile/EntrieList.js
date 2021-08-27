import React from 'react';
import Entries from './Entries';
import { Text } from '../../context/Language';

const EntrieList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => (
  <div className="container h-full">
    {!entries || (entries.length === 0 && <Text tid="entrieWarning" />)}
    <div
      className="mt-8 p-2 h-full w-full relative flex justify-around 
    flex-wrap"
    >
      {entries.map((entrie) => (
        <Entries
          key={entrie.id}
          entrie={entrie}
          entries={entries}
          setEntries={setEntries}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  </div>
);

export default EntrieList;
