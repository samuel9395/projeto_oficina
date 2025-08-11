const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./db/JF1_DB.db");

// ROTAS DE API 

// INSERIR UM NOVO VEÍCULO
router.post('/', (req, res) => {
    const { placa, cpf, modelo, marca, ano, cor, km } = req.body;
    const query = `INSERT INTO Veiculo (placa, cpf, modelo, marca, ano, cor, km) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [placa, cpf, modelo, marca, ano, cor, km], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Veículo cadastrado com sucesso!" });
    });
});

// Consultar veículo pela placa
router.get('/:placa', (req, res) => {
    const placa = req.params.placa;
    const query = `SELECT * FROM Veiculo WHERE placa = ?`;

    db.get(query, [placa], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Veículo não encontrado' });
        }
        res.json({ veiculo: row });
    });
});

module.exports = router;
