const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./db/JF1_DB.db");

// CADASTRAR UM SERVIÇO
router.post('/', (req, res) => {
    const { placa, tipo_servico, descricao, garantia, obs, pecas_utilizadas, status, data_servico, valor_total } = req.body;
    const query = `
        INSERT INTO Servico (
            placa, tipo_servico, descricao, garantia, obs, pecas_utilizadas, status, data_servico, valor_total
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [placa, tipo_servico, descricao, garantia, obs, pecas_utilizadas, status, data_servico, valor_total], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Serviço cadastrado com sucesso!" });
    });
});

// CONSULTAR SERVIÇO PELA PLACA
router.get('/placa/:placa', (req, res) => {
    const { placa } = req.params;    
    const query = `SELECT * FROM Servico WHERE placa = ?`;
    
    db.all(query, [placa], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Nenhum serviço encontrado para essa placa' });
        }
        res.json({ servicos: rows });
    });
});

module.exports = router;
