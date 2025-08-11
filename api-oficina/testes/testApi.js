const http = require('http');

// Função para inserir um cliente
function inserirCliente() {
    return new Promise((resolve, reject) => {
        const novoCliente = JSON.stringify({
            cpf: "422.919.028-06",  // Usando o CPF correto
            nome: "Samuel Bitencourt",
            telefone: "(11) 98888-5300",
            endereco: "RUA CAZUZA n° 101"
        });

        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/api/clientes',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(novoCliente), // Usar Buffer.byteLength
            },
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                // Verifica se a resposta não está vazia antes de analisar
                if (data) {
                    console.log('Cliente inserido:', JSON.parse(data));
                } else {
                    console.log('Cliente inserido, mas sem resposta.');
                }
                resolve();
            });
        });

        req.on('error', (error) => {
            console.error('Erro ao inserir cliente:', error.message);
            reject(error);
        });

        req.write(novoCliente);
        req.end();
    });
}
/*-----------------------------------------------------------------------------------------------------------*/ 
// Função para consultar cliente por CPF
function consultarCpf(cpf) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: `/api/clientes/${cpf}`,  // Corrigindo para usar o CPF inserido
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
            console.error('Erro ao consultar CPF:', error.message);
            reject(error);
        });

        req.end();
    });
}
/*-----------------------------------------------------------------------------------------------------------*/
// Função para atualizar um cliente
function atualizarCliente(cpf) {
  return new Promise((resolve, reject) => {
      const clienteAtualizado = JSON.stringify({
          nome: "Janice Barreto",
          telefone: "(11) 99999-5300",
          endereco: "RUA CAZUZA n° 101 atualizado"
      });

      const options = {
          hostname: 'localhost',
          port: 3000,
          path: `/api/clientes/064.346.445-09`,  // Usando o CPF do cliente a ser atualizado
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(clienteAtualizado),
          },
      };

      const req = http.request(options, (res) => {
          let data = '';

          res.on('data', (chunk) => {
              data += chunk;
          });

          res.on('end', () => {
              // Verifica se a resposta não está vazia antes de analisar
              if (data) {
                  console.log('Cliente atualizado:', JSON.parse(data));
              } else {
                  console.log('Cliente atualizado, mas sem resposta.');
              }
              resolve();
          });
      });

      req.on('error', (error) => {
          console.error('Erro ao atualizar cliente:', error.message);
          reject(error);
      });

      req.write(clienteAtualizado);
      req.end();
  });
}
/*-----------------------------------------------------------------------------------------------------------*/
// Função para apagar um cliente
function apagarCliente(cpf) {
  return new Promise((resolve, reject) => {
      const options = {
          hostname: 'localhost',
          port: 3000,
          path: `/api/clientes/42291902808`,  // Usando o CPF do cliente a ser apagado
          method: 'DELETE',
      };

      const req = http.request(options, (res) => {
          let data = '';

          res.on('data', (chunk) => {
              data += chunk;
          });

          res.on('end', () => {
              // Verifica se a resposta não está vazia antes de analisar
              if (data) {
                  console.log('Cliente apagado:', JSON.parse(data));
              } else {
                  console.log('Cliente apagado, mas sem resposta.');
              }
              resolve();
          });
      });

      req.on('error', (error) => {
          console.error('Erro ao apagar cliente:', error.message);
          reject(error);
      });

      req.end();
  });
}


// Executar os testes
async function testarApi() {
    console.log("Inserindo cliente...");
    await inserirCliente();
    
    console.log("Consultando CPF...");
    await consultarCpf("064.346.445-10");  // Usando o CPF que foi inserido

    console.log("Atualizando cliente...");
    await atualizarCliente("064.346.445-09");  // Atualizando o cliente pelo CPF

    console.log("Consultando CPF após atualização...");
    await consultarCpf("064.346.445-09");  // Consultando novamente após a atualização

    console.log("Apagando cliente...");
    await apagarCliente("42291902808");  // Apagando o cliente pelo CPF

    onsole.log("Consultando CPF após apagamento...");
    await consultarCpf("42291902808");  // Tentando consultar o cliente após apagamento
}

testarApi();
