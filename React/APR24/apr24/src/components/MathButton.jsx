import React from "react";

function MathButton(props) {
  const handleClick = () => {
    props.onClick(props.action(props.numbers[0], props.numbers[1]));
  };

  return (
    <div>
      <button onClick={handleClick}>
        Show {props.numbers[0]} {props.text} {props.numbers[1]} answer
      </button>
    </div>
  );
}

export default MathButton;
