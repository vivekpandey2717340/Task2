import React from 'react';

interface Props {
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const UndoRedoButtons: React.FC<Props> = ({ onUndo, onRedo, canUndo, canRedo }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <button onClick={onUndo} disabled={!canUndo} style={{ padding: '0.5rem', marginRight: '0.5rem' }}>
        Undo
      </button>
      <button onClick={onRedo} disabled={!canRedo} style={{ padding: '0.5rem' }}>
        Redo
      </button>
    </div>
  );
};

export default UndoRedoButtons;
