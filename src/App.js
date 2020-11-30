import './App.css';
import { Table } from './components/Table';
import React, { useState, useEffect } from 'react';
import { ModalWindow } from './components/ModalWindow';

function App() {

  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  return (
    <div className="App">
      {isModalShown &&
        <ModalWindow
          setIsModalShown={setIsModalShown}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      }
      <Table
        selectedTask={selectedTask}
        setIsModalShown={setIsModalShown}
        setSelectedTask={setSelectedTask}
      />
    </div>
  );
}

export default App;
