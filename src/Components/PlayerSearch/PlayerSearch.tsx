import React, { useState } from 'react';

const PlayerSearch: React.FC<PlayerSearchProps> = ({ onSearch }) => {
  const [searchString, updateSearchString] = useState('');

  const onClickHandler = () => {
    onSearch(searchString);
  };

  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={(event) => updateSearchString(event.target.value)}
        placeholder="search"
      />
      <button type="button" onClick={onClickHandler}>Search</button>
    </div>
  );
};

export interface PlayerSearchProps {
  onSearch: (name: string) => void;
}

export default PlayerSearch;
