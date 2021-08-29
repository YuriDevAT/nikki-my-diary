import React from 'react';
import Entries from './Entries';
import { Text } from '../../context/Language';

const EntryList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => (
  <>
    {!entries ||
      (entries.length === 0 && (
        <div
          className="mx-auto h-full flex items-center flex-col px-6 relative 
        justify-around"
        >
          <p>
            <Text tid="entryWarning" />
          </p>
          <img src="/img/pics/kawai3.png" alt="" width="75%" />
        </div>
      ))}
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
  </>
);

export default EntryList;
