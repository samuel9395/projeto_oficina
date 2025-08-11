const http = require('http');

function cadastrarVeiculo() {
    return new Promise((resolve, reject) => {
        const novoVeiculo = JSON.stringify({
            placa: "FUA6B76",
            cpf: "422.919.028-06", // Removido caracteres especiais
            modelo: "Palio",
            marca: "Fiat",
            ano: "2015",
            cor: "Prata", // Corrigido
            km: "120,000" // Alterado para remover a vírgula
        });

        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/api/veiculos',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(novoVeiculo),
            },
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (data) {
                    console.log('Veículo cadastrado:', JSON.parse(data));
                } else {
                    console.log('Veículo não cadastrado, mas sem resposta.');
                }
                resolve();
            });
        });

        req.on('error', (error) => {
            console.error('Erro ao cadastrar veículo:', error.message);
            reject(error);
        });

        req.write(novoVeiculo);
        req.end();
    });
}

async function testarVeiculo() {
    console.log("Cadastrando veículo...");
    await cadastrarVeiculo();
}

testarVeiculo();
