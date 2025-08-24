const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mock data
const operations = [
  { id: 1, type: 'Importação', product: 'Equipamento Eletrônico', origin: 'China', destination: 'Porto do Rio', status: 'Em trânsito' },
  { id: 2, type: 'Exportação', product: 'Café', origin: 'Porto de Santos', destination: 'Porto de Le Havre', status: 'Aguardando embarque' },
  { id: 3, type: 'Importação', product: 'Peças Automotivas', origin: 'Alemanha', destination: 'Porto de Itajaí', status: 'Desembaraçado' },
];

// API Endpoints
app.get('/api/operations', (req, res) => {
  res.json(operations);
});

app.get('/api/operations/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const operation = operations.find(op => op.id === id);
  if (operation) {
    res.json(operation);
  } else {
    res.status(404).send('Operation not found');
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
