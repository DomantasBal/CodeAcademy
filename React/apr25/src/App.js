import Button from "./components/Button";
import "./App.css";

function App() {
  // const input = "sjkjhkjhdaf";
  // const input = "12312";
  const input = true;

  return (
    <div className="App">
      <Button input={input} />
    </div>
  );
}

export default App;
