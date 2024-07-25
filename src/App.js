import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './pages/Chat';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          {/* rendering the chat based on the id */}
          <Route path="/chat/:id" element={<Chat />} />
          {/* rendering the home */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
