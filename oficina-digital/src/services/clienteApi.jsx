const baseUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080/api'}/clientes`;

// Buscar todos os clientes com paginação e filtro opcional por nome
export const listarClientes = async (nome = '', page = 0, size = 10) => {
    try {
        const params = new URLSearchParams({
            nome,
            page,
            size
        });

        const response = await fetch(`${baseUrl}?${params}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao listar clientes:', error);
        throw error;
    }
};

// Buscar cliente por nome (busca no backend com paginação)
export const buscarClientePorNome = async (nome) => {
    try {
        const response = await listarClientes(nome, 0, 100);
        
        if (!response.content || response.content.length === 0) {
            throw new Error('Cliente não encontrado');
        }

        return response.content[0]; // Retorna o primeiro cliente encontrado

    } catch (error) {
        console.error('Erro ao buscar cliente por nome:', error);
        throw error;
    }
};
