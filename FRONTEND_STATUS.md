# 📱 Oficina Digital - Frontend Status

**Última Atualização**: 01/02/2026  
**Status**: ✅ RODANDO E INTEGRADO

O frontend React está compilado, rodando na **porta 3000** e integrado com o backend Spring Boot na **porta 8080**.

## 🌐 Acessar a Aplicação

Abra o navegador em: **http://localhost:3000**

---

## 📋 Documentação

- **README.md** - Documentação completa (instalação, estrutura, API)
- **FRONTEND_STATUS.md** - Este arquivo (status e testes)

---

## 🔄 Fluxo de Compatibilidade Frontend → Backend

O frontend foi atualizado para ser **compatível** com o backend (officinabackend). Aqui está o mapeamento:

### ✅ Funcionalidades Disponíveis

| Página | Funcionalidade | Endpoint Backend | Status |
|--------|---|---|---|
| **Consultar Cliente** | Buscar por nome | `GET /api/clientes?nome=...` | ✅ Funcionando |
| **Consultar Veículo** | Buscar por placa | `GET /api/veiculos/{placa}` | ⏳ Aguarda endpoint |
| **Consultar Serviço** | Buscar por placa | `GET /api/servicos/placa/{placa}` | ⏳ Aguarda endpoint |

### ⏳ Em Desenvolvimento no Backend

| Página | Funcionalidade | Endpoint Backend | Status |
|--------|---|---|---|
| **Cadastrar Cliente** | Criar novo cliente | `POST /api/clientes` | ❌ Não existe |
| **Cadastrar Veículo** | Criar novo veículo | `POST /api/veiculos` | ❌ Não existe |
| **Cadastrar Serviço** | Criar novo serviço | `POST /api/servicos` | ❌ Não existe |

**Nota**: As páginas de cadastro estão desabilitadas no menu até o backend implementar os endpoints POST.

---

## 🧪 Como Testar

### 1. Certifique-se que o Backend está rodando
```bash
# No projeto officinabackend
mvn spring-boot:run
# ou
./mvnw spring-boot:run
```

Verifique se está na porta **8080**:
```bash
curl http://localhost:8080/api/clientes
```

### 2. Frontend já está rodando em http://localhost:3000

### 3. Teste as funcionalidades

#### Testando Consulta de Cliente
1. Vá para **"Cliente" → "Consultar Cliente"**
2. Digite o nome de um cliente (ex: "João")
3. Clique em "Buscar"

**Resposta esperada**: Dados do cliente com nome e telefone + informações de veículos (se tiver)

#### Testar Consulta de Veículo  
1. Vá para **"Veículo" → "Consultar Veículo"**
2. Digite a placa (ex: "ABC-1234")
3. Clique em "Buscar"

**Resposta esperada**: Dados do veículo (placa, marca, modelo, ano, cor, quilometragem)

#### Testar Consulta de Serviço
1. Vá para **"Serviço" → "Consultar Serviço"**
2. Digite a placa do veículo (ex: "ABC-1234")
3. Clique em "Buscar"

**Resposta esperada**: Lista de serviços (descrição e valor)

---

## 📋 Alterações no Frontend

### Arquivos Modificados:
- `src/services/clienteApi.jsx` - Removido busca por CPF, adicionado busca por nome
- `src/services/veiculoApi.jsx` - Adicionadas operações CRUD
- `src/services/servicoApi.jsx` - Simplificado para apenas descricao e valorServico  
- `src/components/Cliente/ConsultaCliente.jsx` - Atualizado para busca por nome
- `src/components/Veiculo/ConsultaVeiculo.jsx` - Ajustado aos campos do backend
- `src/components/Servico/RelatorioServicos.jsx` - Simplificado para campos disponíveis
- `src/components/Cliente/CadastroCliente.jsx` - Desabilitado (aguarda backend)
- `src/components/Veiculo/CadastroVeiculo.jsx` - Desabilitado (aguarda backend)
- `src/components/Servico/CadastroServico.jsx` - Simplificado (aguarda endpoints completos)

### Arquivo Novo:
- `.env` - Configuração de URL da API

---

## 🛠️ Próximos Passos

Para ativar as funcionalidades de cadastro, o backend precisa implementar:

1. **ClienteController**
   - `POST /api/clientes` - Criar cliente
   - `GET /api/clientes/{id}` - Buscar por ID

2. **VeiculoController** (novo)
   - `GET /api/veiculos` - Listar com paginação
   - `POST /api/veiculos` - Criar veículo
   - `PUT /api/veiculos/{id}` - Atualizar veículo
   - `DELETE /api/veiculos/{id}` - Deletar veículo

3. **ServicoController** (novo)
   - `GET /api/servicos` - Listar com paginação
   - `POST /api/servicos` - Criar serviço
   - `PUT /api/servicos/{id}` - Atualizar serviço
   - `DELETE /api/servicos/{id}` - Deletar serviço

---

## 📊 Estrutura de Dados Esperada

### Cliente (GET /api/clientes)
```json
{
  "content": [
    {
      "nome": "João Silva",
      "telefone": "(11) 99999-9999",
      "veiculoId": 1,
      "placa": "ABC-1234",
      "modelo": "Civic",
      "marca": "Honda"
    }
  ]
}
```

### Veículo (GET /api/veiculos/{placa})
```json
{
  "id": 1,
  "placa": "ABC-1234",
  "marca": "Honda",
  "modelo": "Civic",
  "anoFabricacao": "2020-01-01",
  "cor": "Preto",
  "kilometragem": "15000"
}
```

### Serviço (GET /api/servicos/placa/{placa})
```json
[
  {
    "id": 1,
    "descricao": "Troca de óleo",
    "valorServico": 150.00
  }
]
```

---

---

## 🏗️ Arquitetura

### Camadas Frontend

```
┌─────────────────────────────────┐
│     Componentes React            │
│  (Páginas, Forms, Consultas)   │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│    Services (API Layer)          │
│  clienteApi, veiculoApi, etc    │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│   Fetch API (com CORS)           │
│  http://localhost:8080/api      │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│   Spring Boot Backend            │
│  CorsConfig + Controllers       │
└─────────────────────────────────┘
```

### Fluxo de Requisição

1. **Componente** chama função do Service
2. **Service** faz fetch para backend com CORS
3. **Backend** retorna dados JSON
4. **Componente** atualiza state e renderiza

---

## 🔧 Integração CORS

### Backend (CorsConfig.java)
```java
registry.addMapping("/api/**")
    .allowedOrigins("http://localhost:3000", "http://127.0.0.1:3000")
    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH")
    .allowedHeaders("*")
    .allowCredentials(true)
    .maxAge(3600);
```

### Frontend (clienteApi.jsx)
```javascript
const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Accept': 'application/json' }
});
```

---

## 📊 Status de Implementação

| Componente | Serviço | Endpoint | Componente Funcional |
|---|---|---|---|
| Cliente | `clienteApi` | GET /api/clientes | ✅ Sim |
| Veículo | `veiculoApi` | GET /api/veiculos | ⏳ Estrutura pronta |
| Serviço | `servicoApi` | GET /api/servicos | ⏳ Estrutura pronta |

---

## 🔗 Links Úteis

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api
- **Backend Swagger** (se configurado): http://localhost:8080/swagger-ui.html
- **Documentação Completa**: [README.md](./oficina-digital/README.md)

---

## 📝 Próximas Etapas

### Backend
1. Implementar POST endpoints para Cliente, Veículo, Serviço
2. Implementar GET endpoints para Veículo e Serviço
3. Implementar UPDATE/DELETE endpoints

### Frontend
1. Habilitar componentes de cadastro
2. Adicionar validação de formulários
3. Implementar loading states
4. Melhorar tratativa de erros

---

## 📝 Notas

- O frontend não usa mais o api-oficina (Node.js)
- Todas as requisições vão para o officinabackend (Java Spring)
- CORS está configurado no backend em `CorsConfig.java`
- A variável de ambiente `REACT_APP_API_URL` pode ser alterada no arquivo `.env`

