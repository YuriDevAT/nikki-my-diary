import React from 'react';
import Entries from './Entries';
import { Text } from '../../context/Language';

const EntrieList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => (
  <div>
    {!entries || (entries.length === 0 && <Text tid="entrieWarning" />)}
    <div
      className="mt-4 p-2 w-full relative flex justify-around shadow-inner bg-white-pure
    flex-wrap rounded"
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
