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
            setServicos(dados.servicos);
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
                    servicos ? (
                        <div className="dados-servico">
                            <h4>Serviços encontrados</h4>
                            <hr/>
                            {servicos.map((s, index) => (
                                <div key={index} className="servico-item">
                                    <p><strong>Placa:</strong> {s.placa}</p>
                                    <p><strong>Serviço:</strong> {s.tipo_servico}</p>
                                    <p><strong>Descrição:</strong> 
                                    <br/>{s.descricao}
                                    </p>
                                    <p><strong>Garantia:</strong> {s.garantia}</p>
                                    <p><strong>Status:</strong> {s.status}</p>
                                    <p><strong>Data:</strong> {s.data_servico}</p>
                                    <p><strong>Valor:</strong> R$ {s.valor_total}</p>
                                    <p><strong>Peças:</strong> {s.pecas_utilizadas}</p>
                                    <p><strong>Observações:</strong> {s.obs}</p>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="msg-servico"><br /> {erro}</p>
                    )
                }
            </section>
        </div>
    )
}

export default ConsultaServico;
