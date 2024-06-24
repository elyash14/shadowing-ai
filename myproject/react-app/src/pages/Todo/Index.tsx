import { Link } from '@inertiajs/react';
import * as React from 'react';

const Index = ({ todos }): React.ReactNode => {
  return (
    <div>
      <h1>Todo List</h1>
      <Link href="/todos/create">Create</Link>
      {todos.map((todo, index) => (
        <p key={index}>{todo.title}</p>
      ))}
    </div>
  );
};

export default Index;
