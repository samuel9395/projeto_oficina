const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Conectando ao banco de dados
const db = new sqlite3.Database("./db/JF1_DB.db", (err) => {
    if (err) {
        console.error('Erro ao se conectar ao JF1_DB: ', err);
    } else {
        console.log('Conectado ao JF1_DB com sucesso!');
    }
});

// ROTAS DE API 

// INSERIR UM NOVO CLIENTE
router.post('/', (req, res) => {
    const { cpf, nome, endereco, telefone } = req.body;
    const query = `INSERT INTO Cliente (cpf, nome, endereco, telefone) VALUES (?, ?, ?, ?)`;

    db.run(query, [cpf, nome, endereco, telefone], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente cadastrado com sucesso!', clienteId: this.lastID });
    });
});

// Consultar todos os clientes
router.get('/', (req, res) => {
    const query = `SELECT * FROM Cliente`;

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ clientes: rows });
    });
});

// Consultar cliente por CPF
router.get('/:cpf', (req, res) => {
    const cpf = req.params.cpf;
    const query = `SELECT * FROM Cliente WHERE cpf = ?`;

    db.get(query, [cpf], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json({ cliente: row });
    });
});

// Atualizar cliente pelo CPF
router.put('/:cpf', (req, res) => {
    const { cpf } = req.params;
    const { nome, endereco, telefone } = req.body;

    const query = `UPDATE Cliente SET nome = ?, endereco = ?, telefone = ? WHERE cpf = ?`;

    db.run(query, [nome, endereco, telefone, cpf], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        res.json({ message: 'Cliente atualizado com sucesso!' });
    });
});

// Deletar cliente pelo CPF
router.delete('/:cpf', (req, res) => {
    const { cpf } = req.params;

    const query = `DELETE FROM Cliente WHERE cpf = ?`;

    db.run(query, cpf, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        res.json({ message: 'Cliente deletado com sucesso!' });
    });
});

module.exports = router;
