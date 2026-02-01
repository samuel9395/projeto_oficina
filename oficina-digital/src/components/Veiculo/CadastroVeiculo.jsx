import React, { useState } from 'react';
import pneu from '../../assets/pneu.svg';
import carro from '../../assets/carro3.svg';
import { cadastrarVeiculo } from '../../services/veiculoApi';
import './../../styles/Veiculo.scss'

function CadastroVeiculo() {
    const [placa, setPlaca] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [anoFabricacao, setAnoFabricacao] = useState("");
    const [cor, setCor] = useState("");
    const [kilometragem, setKilometragem] = useState("");
    const [clienteId, setClienteId] = useState(""); // ID do cliente associado
    const [error, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dados do veículo a serem enviados conforme o backend espera
        const veiculoData = {
            placa,
            marca,
            modelo,
            anoFabricacao,
            cor,
            kilometragem,
            cliente: {
                id: parseInt(clienteId)
            }
        };

        try {
            const response = await cadastrarVeiculo(veiculoData);
            setSucesso("Veículo cadastrado com sucesso!");
            setErro(""); // Limpa qualquer mensagem de erro anterior
            // Limpa os campos após o cadastro
            setPlaca("");
            setMarca("");
            setModelo("");
            setAnoFabricacao("");
            setCor("");
            setKilometragem("");
            setClienteId("");
        } catch (error) {
            setErro("Erro ao cadastrar o veículo. Verifique os dados e tente novamente.");
        }
    };

    return (
        <div className="container-veiculo">
            <div className='image-pneu'>
                <img src={pneu} alt='img'/>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='titulo'>
                    <h3>Cadastrar Veículo</h3>
                </div>

                <div className='conteudo'>
                    <div className="form-grid">
                        <label>
                            ID do Cliente:
                            <input 
                                type="number" 
                                placeholder="ID do Cliente" 
                                value={clienteId} 
                                onChange={(e) => setClienteId(e.target.value)} 
                                required
                            />
                        </label>
                        <label>
                            Placa:
                            <input 
                                type="text" 
                                placeholder="Placa" 
                                value={placa} 
                                onChange={(e) => setPlaca(e.target.value)} 
                                required
                            />
                        </label>
                        <label>
                            Modelo:
                            <input 
                                type="text" 
                                placeholder="Modelo" 
                                value={modelo} 
                                onChange={(e) => setModelo(e.target.value)} 
                                required
                            />
                        </label>
                        <label>
                            Marca:
                            <input 
                                type="text" 
                                placeholder="Marca" 
                                value={marca} 
                                onChange={(e) => setMarca(e.target.value)} 
                                required
                            />
                        </label>
                        <label>
                            Ano de Fabricação:
                            <input 
                                type="date" 
                                placeholder="Ano de Fabricação" 
                                value={anoFabricacao} 
                                onChange={(e) => setAnoFabricacao(e.target.value)} 
                                required
                            />
                        </label>
                        <label>
                            Cor:
                            <input 
                                type="text" 
                                placeholder="Cor" 
                                value={cor} 
                                onChange={(e) => setCor(e.target.value)} 
                                required
                            />
                        </label>
                        <label>
                            Kilometragem:
                            <input 
                                type="text" 
                                placeholder="Kilometragem" 
                                value={kilometragem} 
                                onChange={(e) => setKilometragem(e.target.value)} 
                                required
                            />
                        </label>
                    </div>
                </div>

                <div id='btn'>
                    <button type="submit">Cadastrar Veículo</button>
                </div>    
            </form>


            <div id='image-carro'>
                <img src={carro} alt='img' />
            </div>

            <p className="sucesso">{sucesso}</p>
            <p className="erro">{error}</p>

        </div>
    );
}

export default CadastroVeiculo;
