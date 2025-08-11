const baseUrl = 'http://localhost:8080/api/servicos';

// RORA PARA CADASTRAR O SERVIÇO
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
            throw new Error('Erro ao cadastrar serviço: ');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Erro ao cadastrar serviço: ', error);
        throw Error;
    }
};

// RORA PARA CONSULTAR O SERVIÇO
export const consultaServico = async (placa) => {
    try {
        const response = await fetch(`${baseUrl}/placa/${placa}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar serviço');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao consultar serviço:', error);
        throw error;
    }
};
