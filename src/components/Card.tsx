import React from 'react';
import { Task } from '../types';

interface Props {
  task: Task;
}

const Card: React.FC<Props> = ({ task }) => {
  return (
    <div
      style={{
        padding: '1rem',
        marginBottom: '1rem',
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    >
      {task.content}
    </div>
  );
};

export default Card;
