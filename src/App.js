import logo from "./logo.svg";
import "./App.css";
import { ManagedField } from "./components/ManagedField";

function App() {
  return (
    <div className="App">
      <ManagedField words={["apple", "car"]} />
    </div>
  );
}

export default App;
