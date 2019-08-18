import React from "react";
import "./App.css";
import SongForm from "./SongForm";
import List from "./List";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Songs React Redux</h1>
        <SongForm />
        <div className="row">
          <List />
          <Detail />
        </div>
      </div>
    </div>
  );
}

export default App;
