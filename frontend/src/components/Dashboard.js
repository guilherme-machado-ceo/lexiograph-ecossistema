/**
 * Hubstry Dev++ TradeFlow
 *
 * @description Propriedade intelectual da Hubstry, em favor de Guilherme Gonçalves Machado.
 * @copyright (c) 2024 Hubstry. Todos os direitos reservados.
 */

import React, { useState, useEffect } from 'react';
import '../App.css'; // We can share some styles

const Dashboard = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    // In a real app, this URL would be in an environment variable
    fetch('http://localhost:3001/api/operations')
      .then(response => response.json())
      .then(data => setOperations(data))
      .catch(error => console.error('Error fetching operations:', error));
  }, []);

  return (
    <div>
      <header className="App-header">
        <h1>Hubstry Dev++ TradeFlow</h1>
        <h2>Dashboard de Operações</h2>
      </header>
      <div className="operations-list">
        {operations.map(op => (
          <div key={op.id} className="operation-card">
            <h3>{op.product}</h3>
            <p><strong>Tipo:</strong> {op.type}</p>
            <p><strong>Origem:</strong> {op.origin}</p>
            <p><strong>Destino:</strong> {op.destination}</p>
            <p><strong>Status:</strong> <span className={`status status-${op.status.toLowerCase().replace(/\s+/g, '-')}`}>{op.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
