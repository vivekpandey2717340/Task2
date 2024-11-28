import React from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: '0.5rem', width: '100%' }}
    />
  );
};

export default SearchBar;
