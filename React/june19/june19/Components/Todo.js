import React from 'react';

export const Todo = ({ todo }) => {
  const { title, id, completed } = todo;

  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;

  return <div key={id}>{text}</div>;
};
