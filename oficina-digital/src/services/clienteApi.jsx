const baseUrl = 'http://localhost:8080/api/clientes';

export const cadastrarCliente = async (clienteData) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteData),
        });

        if (!response.ok) {
            throw new Error("Erro ao cadastrar cliente: ");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Erro ao cadastrar cliente: ', error);
        throw Error;
    }
};

export const consultaClienteCpf = async (cpf) => {
    try {
        const response = await fetch(`${baseUrl}/${cpf}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar cliente');
        }

        const data = await response.json();
        return data.cliente; // Retorna apenas o cliente, sem o encapsulamento

    } catch (error) {
        console.log('Erro ao buscar cliente: ', error);
        throw error;
    }
};
