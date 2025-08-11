import React, {useState} from "react";
import Pneu from '../../assets/pneu.svg';
import './../../styles/ConsultaVeiculo.scss';
import { consultaVeiculo } from "../../services/veiculoApi";

function ConsultaVeiculo() {
    const [placa, setPlaca] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [erro, setErro] = useState('');
    

    const hundleInputChange = (e) => {
        setPlaca(e.target.value);
    };

    const hundleBuscarVeiculo = async () => {
        try {
            const dadosVeiculo = await consultaVeiculo(placa);
            setVeiculo(dadosVeiculo);
            setErro('');
        } catch (error) {
            setErro('Veículo não encontrado, ou erro na busca!');
            setVeiculo(null);
        }
    };

    return (
        <div className="consulta-veiculo">
            <div className="imagem-consulta">
                    <img src={Pneu} alt="Pneu"/>
                </div>
                
            <section className="busca">

                <h3>Consultar Veículo</h3>

                <input
                    type="text"
                    placeholder="Placa do Veículo"
                    className="input-placa"
                    value={placa}
                    onChange={hundleInputChange}
                />

                <button onClick={hundleBuscarVeiculo} className='btn-buscar'>Buscar</button> 
            </section>
            <section className="tela-consulta">
                {
                    veiculo ? (
                        <div className="dados-veiculo">
                            <h4>Dados do veículo</h4>
                            <p><strong>Placa:</strong>{veiculo.placa}</p>
                            <p><strong>Modelo:</strong>{veiculo.modelo}</p>
                            <p><strong>Marca:</strong>{veiculo.marca}</p>
                            <p><strong>Ano:</strong>{veiculo.ano}</p>
                            <p><strong>Cor:</strong>{veiculo.cor}</p>
                            <p><strong>Km:</strong>{veiculo.km}</p>
                            <p><strong>Condutor:</strong>{veiculo.cpf}</p>
                        </div>
                    ) : (
                        <p className="msg-veiculo"><br/> {erro}</p>
                    )
                }
            </section>
        </div>
    )
    
}

export default ConsultaVeiculo;