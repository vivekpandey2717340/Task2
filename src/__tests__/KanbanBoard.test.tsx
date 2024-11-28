import React from 'react';
import { render, screen } from '@testing-library/react';
import KanbanBoard from '../components/KanbanBoard';

test('renders the Kanban board', () => {
  render(<KanbanBoard />);
  expect(screen.getByText('To Do')).toBeInTheDocument();
  expect(screen.getByText('In Progress')).toBeInTheDocument();
  expect(screen.getByText('Done')).toBeInTheDocument();
});
