// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-movie" element={<AddMovieForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
