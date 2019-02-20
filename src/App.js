import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <Person name="vijay" age="37" />
        <Person name="arvind" age="28" />
        <Person name="chris" age="56" />
      </div>
    );
  }
}

export default App;
