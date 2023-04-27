import React, { useState } from "react";

function MoodChecker() {
  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("Kaip jaučiatės?");

  function handleClick(mood) {
    switch (mood) {
      case "prastai":
        setMessage("Nieko tokio, viskas bus gerai");
        break;
      case "normaliai":
        setMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai");
        break;
      case "puikiai":
        setMessage("Smagu girdėti, taip ir toliau");
        break;
      default:
        setMessage("Kaip jaučiatės?");
    }
    setMood(mood);
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => handleClick("prastai")}>Jaučiuosi prastai :(</button>
      <button onClick={() => handleClick("normaliai")}>Jaučiuosi normaliai :|</button>
      <button onClick={() => handleClick("puikiai")}>Jaučiuosi puikiai :)</button>
      {mood && <p>Jūsų nuotaika yra {mood}.</p>}
    </div>
  );
}

export default MoodChecker;
