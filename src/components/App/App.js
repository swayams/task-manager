import React from 'react';


import './App.css';
import { Task, Priority } from './../../entities/Task'
import TaskList from './../TaskList/TaskList';
import NewTask from './../NewTask/NewTask';

function App() {
  return (
    <div className="App">
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
