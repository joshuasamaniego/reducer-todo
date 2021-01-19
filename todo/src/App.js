import React, { useReducer, useState } from "react";
import './App.css';

import reducer, { initialState } from "./reducer";
import { addItem } from "./actions";

// let currentValue = reducer(initialState, {type: "ADD_ITEM", payload: "New Todo"});
// console.log(currentValue);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  console.log(state);


  const handleChanges = (event) => {
    setInputValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem(inputValue));
    setInputValue('');
    console.log(inputValue);
  }
  
  
  return (
    <div className="App">
      <form>
        <input
          className="new-item-input"
          type="text"
          name="newItem"
          value={state.newItem}
          onChange={handleChanges}
        />
        <button onClick={handleSubmit}>Add To-Do</button>
      </form>
      <div>
        {console.log(state)}
        {state.todo.map(todoItem => (
          <div 
            key={todoItem.id}
            className = {`task${todoItem.completed ? ' completed' : ''}`}
          >
            <h1>{todoItem.item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
