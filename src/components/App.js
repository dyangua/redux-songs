import React from "react";
import "./App.css";
import SongForm from "./SongForm";
import List from "./List";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Songs React Redux</h1>
        <SongForm />
        <List />
      </div>
    </div>
  );
}

export default App;
