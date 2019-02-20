import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "vijay", age: 37 },
      { name: "arvind", age: 28 },
      { name: "chris", age: 56 }
    ],
    someOtherState: "some text"
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "vijayanand", age: 37 },
        { name: "arvind", age: 28 },
        { name: "chris", age: 57 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
