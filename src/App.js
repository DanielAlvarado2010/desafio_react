import react from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <CreatePost />
      </header>
    </div>
  );
}

export default App;
