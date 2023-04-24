import './App.scss'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter step={1} />
      </header>
    </div>
  )
}

export default App
