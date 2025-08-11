const baseUrl = 'http://localhost:8080/api/veiculos';

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
            throw new Error('Erro ao cadastrar veículo: ');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Erro ao cadastrar veículo: ', error);
        throw Error;
    }
};

export const consultaVeiculo = async (placa) => {
    try {
        const response = await fetch(`${baseUrl}/${placa}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao consultar veículo: ');
        }

        const data = await response.json();
        return data.veiculo;
        
    } catch (error) {
        console.log('Erro ao buscar veículo', error);
        throw error;
    }
}
