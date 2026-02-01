import React, { useState } from "react";
import Bau from '../../assets/bau.svg';
import './../../styles/ConsultaServico.scss';
import { consultaServico } from "../../services/servicoApi";

function ConsultaServico() {
    const [placa, setPlaca] = useState('');
    const [servicos, setServicos] = useState(null);
    const [erro, setErro] = useState('');

    const handleInputChange = (e) => {
        setPlaca(e.target.value);
    };

    const handleBuscarServico = async () => {
        try {
            const dados = await consultaServico(placa);
            // O backend retorna um array ou um objeto com array de serviços
            const servicosArray = Array.isArray(dados) ? dados : (dados.servicos || []);
            setServicos(servicosArray);
            setErro('');
        } catch (error) {
            setErro('Nenhum serviço encontrado para essa placa ou erro na busca!');
            setServicos(null);
        }
    };

    return (
        <div className="consulta-servico">
            <div className="imagem-consulta">
                <img src={Bau} alt="Serviço" />
            </div>

            <section className="busca">
                <h3>Consultar Serviço</h3>
                <input
                    type="text"
                    placeholder="Placa do Veículo"
                    className="input-placa"
                    value={placa}
                    onChange={handleInputChange}
                />
                <button onClick={handleBuscarServico} className='btn-buscar'>Buscar</button>
            </section>

            <section className="tela-consulta">
                {
                    servicos && servicos.length > 0 ? (
                        <div className="dados-servico">
                            <h4>Serviços encontrados</h4>
                            <hr/>
                            {servicos.map((s, index) => (
                                <div key={index} className="servico-item">
                                    <p><strong>Serviço ID:</strong> {s.id}</p>
                                    <p><strong>Descrição:</strong> 
                                    <br/>{s.descricao}
                                    </p>
                                    <p><strong>Valor:</strong> R$ {s.valorServico}</p>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="msg-servico"><br /> {erro || 'Nenhum serviço encontrado'}</p>                    )
                }
            </section>
        </div>
    )
}

export default ConsultaServico;