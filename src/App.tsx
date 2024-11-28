import React from 'react';
import KanbanBoard from './components/KanbanBoard';

const App: React.FC = () => {
  return (
    <div>
      <h1>Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;
