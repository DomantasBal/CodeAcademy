import React from 'react';
import { Todo } from './Components/Todo';

const App = () => {
  const todos = [
    {
      id: 1,
      title: 'wash dishes',
      completed: false,
    },
    {
      id: 2,
      title: 'wash car',
      completed: true,
    },
  ];

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default App;
