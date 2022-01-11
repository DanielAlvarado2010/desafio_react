import "./App.css";
import { LeftSidebar } from "./components/LeftSidebar";
import  FiltersNav from "./pages/FiltersNav/index";


function App() {
  return (
    <div className="App">
      <header className="App-header">DevTo</header>
      <FiltersNav/>
      <LeftSidebar/>
    </div>
  );
}

export default App;
