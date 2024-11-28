import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import { ColumnType } from '../types';

interface Props {
  column: ColumnType;
}

const Column: React.FC<Props> = ({ column }) => {
  return (
    <div style={{ border: '1px solid black', padding: '1rem', width: '250px' }}>
      <h2>{column.title}</h2>
      {column.tasks.map((task, index) => (
        <Draggable draggableId={task.id} index={index} key={task.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <Card task={task} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Column;
