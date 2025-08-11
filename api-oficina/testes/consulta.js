const http = require('http');

function consultaVeiculo(placa) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: `/api/veiculos/${encodeURIComponent(placa)}`, // Corrigido
            method: 'GET',
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                // Verifica se a resposta não está vazia antes de analisar
                if (data) {
                    console.log('Consulta realizada com sucesso!', JSON.parse(data));
                } else {
                    console.log('Consulta realizada, mas sem resposta.');
                }
                resolve();
            });
        });

        req.on('error', (error) => {
            console.error('Erro ao consultar veículo:', error.message);
            reject(error);
        });

        req.end();
    });
}

function consultaServico(tipoServico) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: `/api/servicos/${encodeURIComponent(tipoServico)}`, // Corrigido
            method: 'GET',
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                // Verifica se a resposta não está vazia antes de analisar
                if (data) {
                    console.log('Consulta realizada com sucesso!', JSON.parse(data));
                } else {
                    console.log('Consulta realizada, mas sem resposta.');
                }
                resolve();
            });
        });

        req.on('error', (error) => {
            console.error('Erro ao consultar serviço:', error.message);
            reject(error);
        });

        req.end();
    });
}

async function consulta() {
    console.log("Consultando o veículo...");
    await consultaVeiculo("FUA6B76");

    console.log("Consultando o serviço...");
    await consultaServico("Troca da correia dentada");
}

consulta();
