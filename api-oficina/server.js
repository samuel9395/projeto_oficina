require('dotenv').config();
require('newrelic');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Habilitar CORS para todas as rotas
app.use(cors());

// Middleware para processar dados JSON
app.use(express.json());

// Importando rotas
const clienteRoutes = require('./routes/cliente');
const servicoRoutes = require('./routes/servico');
const veiculoRoutes = require('./routes/veiculo');

// Usando as rotas
app.use('/api/clientes', clienteRoutes);
app.use('/api/servicos', servicoRoutes);
app.use('/api/veiculos', veiculoRoutes);

// Inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
