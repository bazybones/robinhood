import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body"></div>
      {/* Body */}
    </div>
  );
}

export default App;
