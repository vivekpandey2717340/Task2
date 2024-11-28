import React, { useState } from 'react';

interface Props {
  onAddColumn: (title: string) => void;
}

const AddColumnButton: React.FC<Props> = ({ onAddColumn }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAddColumn(title.trim());
      setTitle('');
      setIsAdding(false);
    }
  };

  return isAdding ? (
    <div style={{ margin: '1rem 0' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Column title"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleAdd} style={{ padding: '0.5rem' }}>
        Add
      </button>
      <button onClick={() => setIsAdding(false)} style={{ padding: '0.5rem' }}>
        Cancel
      </button>
    </div>
  ) : (
    <button onClick={() => setIsAdding(true)} style={{ padding: '0.5rem' }}>
      Add Column
    </button>
  );
};

export default AddColumnButton;
