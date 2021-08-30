import React, { useContext } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../context/Language';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    <label htmlFor="language">
      <select
        onChange={handleLanguageChange}
        value={userLanguage}
        className="rounded-md py-2 my-2 w-24"
        id="language"
        title="language"
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}
