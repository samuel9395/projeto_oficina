const baseUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080/api'}/servicos`;

// Listar todos os serviços com paginação
export const listarServicos = async (page = 0, size = 10) => {
    try {
        const params = new URLSearchParams({
            page,
            size
        });

        const response = await fetch(`${baseUrl}?${params}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar serviços');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao listar serviços:', error);
        throw error;
    }
};

// Buscar serviço por placa do veículo (ordena pela OrdemServico)
export const consultaServico = async (placa) => {
    try {
        const response = await fetch(`${baseUrl}/placa/${placa}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar serviço');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao consultar serviço:', error);
        throw error;
    }
};

// Cadastrar novo serviço
export const cadastrarServico = async (servicoData) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(servicoData),
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar serviço');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao cadastrar serviço:', error);
        throw error;
    }
};

// Atualizar serviço
export const atualizarServico = async (id, servicoData) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(servicoData),
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar serviço');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao atualizar serviço:', error);
        throw error;
    }
};

// Deletar serviço
export const deletarServico = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar serviço');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao deletar serviço:', error);
        throw error;
    }
};
