import React from 'react';
import './App.css';
import TimerApp from './components/TimerApp';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TimerApp/>
      <TodoList/>
    </div>
  );
}

export default App;