import React from 'react';
import '../App.css';
import AddTodo from './AddTodo'
import Todos from './Todos'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Todos />
        <Footer />
      </header>
    </div>
  );
}

export default App;
