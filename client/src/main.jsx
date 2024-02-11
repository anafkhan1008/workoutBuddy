import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Workout from './Pages/Workout.jsx';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/workout/:id" element={<Workout />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
