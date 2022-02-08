import logo from "./logo.svg";
import "./App.css";
import { jsx } from "react/jsx-runtime";
import Contact from "./Contact";
import {useState} from "react";

function App() {
  const [name] = useState('Nam');
  const [country] = useState('VN');
  return (
    <div className="App">
      <Contact myName={name} myCountry={country} />
    </div>
  );
}

export default App;
