import React, { useState } from 'react';
import Bau from '../../assets/bau.svg';
import { cadastrarServico } from '../../services/servicoApi';
import '../../styles/CadastroServico.scss';

function CadastroServico() {
    const [tipo_servico, setTipoServico] = useState('');
    const [descricao, setDescricao] = useState('');
    const [garantia, setGarantia] = useState('');
    const [obs, setObs] = useState('');
    const [pecas_utilizadas, setPecasUtilizadas] = useState('');
    const [status, setStatus] = useState('');
    const [data_servico, setDataServico] = useState('');
    const [valor_total, setValorTotal] = useState('');
    const [placa, setPlacaVeiculo] = useState('');
    const [sucesso, setSucesso] = useState('');
    const [erro, setErro] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const dadosServico = {
            placa,
            tipo_servico,
            descricao,
            garantia,
            obs,
            pecas_utilizadas,
            status,
            data_servico,
            valor_total
        };

        try {
            await cadastrarServico(dadosServico);
            setSucesso('Serviço cadastrado com sucesso!');
            // Limpar campos após o cadastro
            setPlacaVeiculo('');
            setTipoServico('');
            setDescricao('');
            setGarantia('');
            setObs('');
            setPecasUtilizadas('');
            setStatus('');
            setDataServico('');
            setValorTotal('');
        } catch (error) {
            setErro('Erro ao cadastrar o serviço! Verifique os dados e tente novamente.');
        }
    };

    return (
        <div className='box'>
            <div className="imagem-bau">
                <img src={Bau} alt="Imagem-bau" />
            </div>

            <form onSubmit={handleSubmit}>
                <h3>Cadastrar Serviço</h3>

                <div className="form-grid">
                    <label>
                        Placa do veículo:
                        <input
                            className='caixa-input'
                            type="text"
                            placeholder="xxxxxxx"
                            required
                            value={placa}
                            onChange={(e) => setPlacaVeiculo(e.target.value)}
                        />
                    </label>
                    <label>
                        Serviço:
                        <input
                            type="text"
                            placeholder="Troca de correia"
                            required
                            value={tipo_servico}
                            onChange={(e) => setTipoServico(e.target.value)}
                        />
                    </label>
                    <label>
                        Garantia:
                        <input
                            className='caixa-input'
                            type="text"
                            placeholder="6 meses"
                            required
                            value={garantia}
                            onChange={(e) => setGarantia(e.target.value)}
                        />
                    </label>
                    <label>
                        Status:
                        <select
                            className='status-input'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >

                            <option value="Pendente">Pendente</option>
                            <option value="Concluído">Concluído</option>
                        </select>
                    </label>
                    <label>
                        Data do Serviço:
                        <input
                            className='data-input'
                            type="date"
                            value={data_servico}
                            onChange={(e) => setDataServico(e.target.value)}
                        />
                    </label>
                    <label>
                        Valor Total:
                        <input
                            className='caixa-input'
                            type="text"
                            placeholder="0,00"
                            value={valor_total}
                            onChange={(e) => setValorTotal(e.target.value)}
                        />
                    </label>
                    <label>
                        Peças Utilizadas:
                        <textarea
                            type="text"
                            placeholder="Peças trocadas"
                            value={pecas_utilizadas}
                            onChange={(e) => setPecasUtilizadas(e.target.value)}
                        />
                    </label>
                    <label>
                        Descrição:
                        <textarea
                            placeholder="Descrição detalhada"
                            required
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </label>
                    <label>
                        Observações gerais:
                        <textarea
                            className='obs-input'
                            type="text"
                            placeholder="Esse serviço é de prevenção para o carro."
                            value={obs}
                            onChange={(e) => setObs(e.target.value)}
                        />
                    </label>
                </div>
                <div id='btn'>
                    <button type="submit">Cadastrar Serviço</button>
                </div>
            </form>

            <div className="msg">
                {sucesso && <p style={{ color: 'black'}}>{sucesso}</p>}
                {erro && <p style={{ color: 'red' }}>{erro}</p>}
            </div>
        </div>
    );
}

export default CadastroServico;

/**
    {sucesso && <p style={{ color: 'black' }}>{sucesso}</p>}
    {erro && <p style={{ color: 'red' }}>{erro}</p>}
 */