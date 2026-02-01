const baseUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080/api'}/veiculos`;

// Listar todos os veículos com paginação
export const listarVeiculos = async (page = 0, size = 10) => {
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
            throw new Error('Erro ao buscar veículos');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao listar veículos:', error);
        throw error;
    }
};

// Buscar veículo por placa
export const consultaVeiculo = async (placa) => {
    try {
        const response = await fetch(`${baseUrl}/${placa}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao consultar veículo');
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Erro ao buscar veículo:', error);
        throw error;
    }
};

// Cadastrar novo veículo
export const cadastrarVeiculo = async (veiculoData) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(veiculoData),
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar veículo');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Erro ao cadastrar veículo:', error);
        throw error;
    }
};

// Atualizar veículo
export const atualizarVeiculo = async (id, veiculoData) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(veiculoData),
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar veículo');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao atualizar veículo:', error);
        throw error;
    }
};

// Deletar veículo
export const deletarVeiculo = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar veículo');
        }

        return await response.json();

    } catch (error) {
        console.error('Erro ao deletar veículo:', error);
        throw error;
    }
};
