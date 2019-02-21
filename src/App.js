import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

//useSate hook for managing state in function components
const app = props => {
  //**************** Method 2 *********************************
  const [initialPersonsState, updatePersonsState] = useState({
    persons: [
      { name: "vijay", age: 37 },
      { name: "arvind", age: 28 },
      { name: "chris", age: 56 }
    ]
  });

  const [initialOtherState, updateOtherState] = useState("some other text");

  const switchNameHandler = () => {
    updatePersonsState({
      persons: [
        { name: "vijayanand", age: 37 }, //updating
        { name: "arvind", age: 28 },
        { name: "chris", age: 57 } //updating
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, Am I a React App?</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={initialPersonsState.persons[0].name}
        age={initialPersonsState.persons[0].age}
      />
      <Person
        name={initialPersonsState.persons[1].name}
        age={initialPersonsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={initialPersonsState.persons[2].name}
        age={initialPersonsState.persons[2].age}
      />
    </div>
  );
};

export default app;
