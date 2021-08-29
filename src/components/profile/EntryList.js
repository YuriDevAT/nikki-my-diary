import React from 'react';
import Entries from './Entries';
import { Text } from '../../context/Language';

const EntryList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => (
  <div>
    {!entries || (entries.length === 0 && <Text tid="entryWarning" />)}
    <div
      className="mt-4 p-2 w-full relative flex justify-around shadow-inner bg-white-pure
    flex-wrap rounded"
    >
      {entries.map((entry) => (
        <Entries
          key={entry.id}
          entry={entry}
          entries={entries}
          setEntries={setEntries}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  </div>
);

export default EntryList;
