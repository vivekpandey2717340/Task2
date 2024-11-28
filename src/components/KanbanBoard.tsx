import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import Column from './Column';
import AddColumnButton from './AddColumnButton';
import UndoRedoButtons from './UndoRedoButtons';
import SearchBar from './SearchBar';
import { useUndoRedo } from '../hooks/useUndoRedo';
import { generateUUID } from '../utils/uuid';
import { ColumnType } from '../types';

const initialData: ColumnType[] = [
  {
    id: generateUUID(),
    title: 'To Do',
    tasks: [{ id: generateUUID(), content: 'Task 1' }, { id: generateUUID(), content: 'Task 2' }],
  },
  {
    id: generateUUID(),
    title: 'In Progress',
    tasks: [{ id: generateUUID(), content: 'Task 3' }],
  },
];

const KanbanBoard: React.FC = () => {
  const { state: columns, setState: setColumns, undo, redo, canUndo, canRedo } = useUndoRedo<ColumnType[]>(initialData);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = columns.find((col) => col.id === source.droppableId)!;
    const destColumn = columns.find((col) => col.id === destination.droppableId)!;

    const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
    destColumn.tasks.splice(destination.index, 0, movedTask);

    setColumns([...columns]);
  };

  const handleAddColumn = (title: string) => {
    const newColumn: ColumnType = {
      id: generateUUID(),
      title,
      tasks: [],
    };
    setColumns([...columns, newColumn]);
  };

  const handleSearch = (query: string) => setSearchQuery(query.toLowerCase());

  const filteredColumns = columns.map((col) => ({
    ...col,
    tasks: col.tasks.filter((task) => task.content.toLowerCase().includes(searchQuery)),
  }));

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UndoRedoButtons onUndo={undo} onRedo={redo} canUndo={canUndo} canRedo={canRedo} />
      <AddColumnButton onAddColumn={handleAddColumn} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {filteredColumns.map((column) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Column column={column} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
