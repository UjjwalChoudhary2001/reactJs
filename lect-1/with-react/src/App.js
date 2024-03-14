import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//This is the App component being shown on homepage
function App() {
  //Creating a new state named value which can be changed using setValue function.
  //A variable which can be changed is called state in react.
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText="Code with Harry CWH" />
      <div className="value">{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
      <Footer />
    </div>
  );
}

export default App;
