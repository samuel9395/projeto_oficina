# Oficina Digital - Frontend

Frontend React da aplicação de gerenciamento de oficina mecânica. Fornece interface para consulta e gestão de clientes, veículos e serviços.

## 📋 Pré-requisitos

- Node.js 24.7.0+ (gerenciado via asdf)
- npm 10.x+
- Backend (Spring Boot) rodando em `http://localhost:8080`

## 🚀 Instalação e Configuração

### 1. Instalar dependências

```bash
cd oficina-digital
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_URL=http://localhost:8080/api
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm start
```

A aplicação será aberta em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Cliente/
│   │   ├── CadastroCliente.jsx      # Desabilitado (sem endpoint POST no backend)
│   │   └── ConsultaCliente.jsx      # Busca cliente por nome
│   ├── Home/
│   ├── Servico/
│   │   ├── CadastroServico.jsx      # Criar novo serviço
│   │   └── RelatorioServicos.jsx    # Listar serviços por placa
│   └── Veiculo/
│       ├── CadastroVeiculo.jsx      # Registrar novo veículo
│       └── ConsultaVeiculo.jsx      # Buscar veículo por placa
├── services/
│   ├── clienteApi.jsx               # API calls para clientes
│   ├── veiculoApi.jsx               # API calls para veículos
│   └── servicoApi.jsx               # API calls para serviços
├── styles/
│   ├── App.scss
│   └── [componentes].scss
├── assets/
│   └── [imagens]
├── App.jsx
└── index.js
```

## 🔌 Camada de Services (APIs)

### clienteApi.jsx

```javascript
listarClientes(nome, page, size)      // GET com filtro e paginação
buscarClientePorNome(nome)            // Busca simples por nome
```

### veiculoApi.jsx

```javascript
listarVeiculos()                      // GET todos os veículos
consultaVeiculo(placa)                // GET by placa
cadastrarVeiculo(veiculo)             // POST novo veículo
atualizarVeiculo(id, veiculo)        // PUT atualizar veículo
deletarVeiculo(id)                    // DELETE veículo
```

### servicoApi.jsx

```javascript
listarServicos()                      // GET todos os serviços
consultaServico(placa)                // GET by placa
cadastrarServico(servico)             // POST novo serviço
atualizarServico(id, servico)        // PUT atualizar serviço
deletarServico(id)                    // DELETE serviço
```

## 🎯 Componentes e Funcionalidades

### Consultar Cliente
- **Rota**: `/consultar-cliente`
- **Função**: Buscar cliente existente pelo nome
- **Endpoint**: `GET /api/clientes?nome={nome}&page=0&size=100`
- **Status**: ✅ Funcionando

### Cadastrar Cliente
- **Rota**: `/cadastro-cliente`
- **Função**: Desabilitado (backend não implementou POST)
- **Status**: ⏳ Aguardando implementação no backend

### Consultar Veículo
- **Rota**: `/consultar-veiculo`
- **Função**: Buscar veículo por placa
- **Endpoint**: `GET /api/veiculos/{placa}`
- **Status**: ⏳ Aguardando implementação no backend

### Cadastrar Veículo
- **Rota**: `/cadastro-veiculo`
- **Função**: Registrar novo veículo
- **Endpoint**: `POST /api/veiculos`
- **Campos**: placa, marca, modelo, anoFabricacao, cor, kilometragem, clienteId
- **Status**: ⏳ Aguardando implementação no backend

### Relatório de Serviços
- **Rota**: `/relatorio-servicos`
- **Função**: Listar serviços por placa do veículo
- **Endpoint**: `GET /api/servicos/placa/{placa}`
- **Status**: ⏳ Aguardando implementação no backend

### Cadastrar Serviço
- **Rota**: `/cadastro-servico`
- **Função**: Criar novo serviço
- **Endpoint**: `POST /api/servicos`
- **Campos**: descricao, valorServico
- **Status**: ⏳ Aguardando implementação no backend

## 🔗 Integração com Backend

### CORS
A aplicação está configurada para fazer requisições CORS com o backend. A configuração CORS no backend está em:
- **Arquivo**: `src/main/java/com/oficina/oficinabackend/config/CorsConfig.java`
- **Origins permitidas**: `http://localhost:3000`, `http://127.0.0.1:3000`

### Requisições
Todas as requisições usam:
- **Method**: GET, POST, PUT, DELETE conforme necessário
- **Mode**: CORS
- **Headers**: Accept: application/json

## 📦 Dependências Principais

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.27.0",
  "sass": "^1.80.3"
}
```

## 🛠️ Scripts Disponíveis

```bash
npm start              # Inicia servidor de desenvolvimento
npm run build          # Cria build de produção
npm run eject          # Ejetar configuração (não recomendado)
npm test               # Executar testes
```

## ⚙️ Configuração Recomendada

### Variáveis de Ambiente

- `REACT_APP_API_URL`: URL base da API (padrão: http://localhost:8080/api)

### Desenvolvimento

1. Ter backend rodando em `http://localhost:8080`
2. Terminal 1: `npm start` (porta 3000)
3. Terminal 2: Backend Java com `mvn spring-boot:run`

## 🐛 Solução de Problemas

### "Failed to fetch" ao buscar cliente
- **Causa**: Backend não tem CORS configurado
- **Solução**: Verifique se a classe `CorsConfig.java` existe no backend

### Dados não aparecem na tela
- **Causa**: Backend retornando dados em estrutura diferente
- **Solução**: Verificar console (F12) para ver resposta da API

### Porta 3000 já está em uso
```bash
kill -9 $(lsof -t -i:3000)  # Linux/Mac
netstat -ano | findstr :3000  # Windows
```

## 📝 Padrões de Código

### Estrutura de Componente
```jsx
import React, { useState } from 'react';
import './Component.scss';
import { apiFunction } from '../../services/api.jsx';

function Component() {
    const [state, setState] = useState('');
    const [error, setError] = useState('');

    const handleAction = async () => {
        try {
            const data = await apiFunction();
            setState(data);
            setError('');
        } catch (err) {
            setError(err.message);
            setState(null);
        }
    };

    return (
        <div>
            {/* JSX */}
        </div>
    );
}

export default Component;
```

### Service API
```jsx
const baseUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080/api'}/endpoint`;

export const functionName = async (params) => {
    try {
        const response = await fetch(`${baseUrl}?...`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Accept': 'application/json' }
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};
```

## 🚢 Deploy

### Build para Produção
```bash
npm run build
```

Criar arquivo `.env.production`:
```env
REACT_APP_API_URL=https://api.exemplo.com/api
```

## 📚 Referências

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [SASS Documentation](https://sass-lang.com)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 👨‍💻 Desenvolvedor

Samuel Bitencourt

## 📄 Licença

MIT Licence
