import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [initialPersonsSate, updatePersonsState] = useState({
    persons: [
      { name: "vijay", age: 37 },
      { name: "arvind", age: 28 },
      { name: "chris", age: 56 }
    ],
    someOtherState: "some text"
  });

  const switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "vijayanand", age: 37 },
        { name: "arvind", age: 28 },
        { name: "chris", age: 57 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a React App.</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={initialPersonsSate.persons[0].name}
        age={initialPersonsSate.persons[0].age}
      />
      <Person
        name={initialPersonsSate.persons[1].name}
        age={initialPersonsSate.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={initialPersonsSate.persons[2].name}
        age={initialPersonsSate.persons[2].age}
      />
    </div>
  );
};

export default app;
