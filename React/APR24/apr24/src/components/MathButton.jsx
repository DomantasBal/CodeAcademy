import React from "react";

function MathButton({ text, action, numbers, onClick }) {
  const handleClick = () => {
    onClick(action(numbers[0], numbers[1]));
  };

  return (
    <div>
      <button onClick={handleClick}>Show {numbers[0]} {text} {numbers[1]} answer</button>
    </div>
  );
}

export default MathButton;
