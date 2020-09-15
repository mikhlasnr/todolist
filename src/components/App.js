import React from 'react';
import '../App.css';
import AddTodo from './AddTodo'
import Todos from '../containers/Todos'
import FilterLink from '../containers/FilterLink'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Todos />
        <FilterLink />
      </header>
    </div>
  );
}

export default App;
