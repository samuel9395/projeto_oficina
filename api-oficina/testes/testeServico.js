const http = require('http');

function cadastrarServico() {
    return new Promise((resolve, reject) => {
        const novoServico = JSON.stringify({
            tipo_servico: "Troca da correia dentada", // Certifique-se de que este tipo de serviço está correto no banco de dados
            placa: "DZI2089",
            descricao: "A troca da correia dentada é um serviço essencial para manter o bom funcionamento do motor do seu veículo. Essa peça, responsável por sincronizar o movimento de vários componentes internos do motor, possui vida útil limitada e, quando desgastada, pode causar danos graves ao motor, como a quebra de válvulas. Agende a troca da correia dentada em uma oficina de confiança para garantir a segurança e durabilidade do seu carro.", 
            garantia: 50000, // Passar como número
            obs: "Esse serviço é de prevenção para o carro.", 
            pecas_utilizadas: "Correia original", // Removido o valor da peça para não confundir com a descrição
            status: "Concluído", 
            data_servico: "2024-10-12", // Formato adequado para SQLite (YYYY-MM-DD)
            valor_total: 350.00 // Passar como número
        });

        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/api/servicos',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(novoServico),
            },
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (data) {
                    console.log('Serviço cadastrado:', JSON.parse(data));
                } else {
                    console.log('Serviço não cadastrado, mas sem resposta.');
                }
                resolve();
            });
        });

        req.on('error', (error) => {
            console.error('Erro ao cadastrar serviço:', error.message);
            reject(error);
        });

        req.write(novoServico);
        req.end();
    });
}

async function testarServico() {
    console.log("Cadastrando serviço...");
    await cadastrarServico();
}

testarServico();
