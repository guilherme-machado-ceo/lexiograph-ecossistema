/**
 * Hubstry Dev++ TradeFlow
 *
 * @description Propriedade intelectual da Hubstry, em favor de Guilherme Gonçalves Machado.
 * @copyright (c) 2024 Hubstry. Todos os direitos reservados.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import WhitepaperPage from './components/WhitepaperPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
