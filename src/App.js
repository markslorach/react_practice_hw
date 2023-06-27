import React from 'react';
import './App.css';

function App() {
  const name = 'Mark';
  const age = 31;

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a paragraph</p>
      <p>My name is {name} and I'm {age} years old.</p>
    </div>
  );
}

export default App;