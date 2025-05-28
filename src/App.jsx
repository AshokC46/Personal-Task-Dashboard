import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './pages/TaskList';
import Timer from './pages/Timer';
import Header from './components/Header';
import Stats from './pages/Stats';
function App() {
  return (
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>

  );
}

export default App;
