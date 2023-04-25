import React from "react";
import MathButton from "./components/MathButton";
import "./App.css";

export default function App() {
  const handleAnswer = (answer) => {
    console.log(`Answer is ${answer}`);
  };

  return (
    <div>
      <MathButton
        text="+"
        action={(a, b) => a + b}
        numbers={[5, 6]}
        onClick={handleAnswer}
      />
      <MathButton
        text="-"
        action={(a, b) => a - b}
        numbers={[10, 6]}
        onClick={handleAnswer}
      />
    </div>
  );
}
