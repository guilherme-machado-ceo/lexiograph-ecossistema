/**
 * Hubstry Dev++ TradeFlow
 *
 * @description Propriedade intelectual da Hubstry, em favor de Guilherme Gonçalves Machado.
 * @copyright (c) 2024 Hubstry. Todos os direitos reservados.
 */

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mock data
const operations = [
  { id: 1, type: 'Importação', product: 'Equipamentos Eletrônicos', origin: 'Porto de Xangai, China', destination: 'Porto do Rio, Brasil', status: 'Em trânsito' },
  { id: 2, type: 'Exportação', product: 'Café Especial (Grãos)', origin: 'Porto de Santos, Brasil', destination: 'Porto de Hamburgo, Alemanha', status: 'Aguardando embarque' },
  { id: 3, type: 'Importação', product: 'Peças Automotivas', origin: 'Porto de Bremerhaven, Alemanha', destination: 'Porto de Itajaí, Brasil', status: 'Desembaraçado' },
  { id: 4, type: 'Exportação', product: 'Soja (Sacas)', origin: 'Porto de Paranaguá, Brasil', destination: 'Porto de Roterdã, Holanda', status: 'Entregue' },
  { id: 5, type: 'Importação', product: 'Vinhos Finos', origin: 'Porto de Bordeaux, França', destination: 'Porto do Rio, Brasil', status: 'Atrasado' },
  { id: 6, type: 'Exportação', product: 'Frutas Tropicais (Manga)', origin: 'Porto de Suape, Brasil', destination: 'Porto de Lisboa, Portugal', status: 'Em trânsito' },
  { id: 7, type: 'Importação', product: 'Produtos Farmacêuticos', origin: 'Porto de Mumbai, Índia', destination: 'Porto de Santos, Brasil', status: 'Inspeção Alfandegária' },
  { id: 8, type: 'Exportação', product: 'Carne Bovina Congelada', origin: 'Porto de Itajaí, Brasil', destination: 'Porto de Hong Kong', status: 'Aguardando embarque' },
  { id: 9, type: 'Importação', product: 'Têxteis e Vestuário', origin: 'Porto de Chittagong, Bangladesh', destination: 'Porto de Santos, Brasil', status: 'Em trânsito' },
  { id: 10, type: 'Exportação', product: 'Madeira Certificada', origin: 'Porto de Manaus, Brasil', destination: 'Porto de Antuérpia, Bélgica', status: 'Desembaraçado' },
  { id: 11, type: 'Importação', product: 'Painéis Solares', origin: 'Porto de Singapura', destination: 'Porto do Rio, Brasil', status: 'Inspeção Alfandegária' },
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
