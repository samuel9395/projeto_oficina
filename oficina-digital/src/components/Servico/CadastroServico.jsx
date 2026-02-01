import React, { useState } from 'react';
import Bau from '../../assets/bau.svg';
import { cadastrarServico } from '../../services/servicoApi';
import '../../styles/CadastroServico.scss';

function CadastroServico() {
    const [descricao, setDescricao] = useState('');
    const [valorServico, setValorServico] = useState('');
    const [sucesso, setSucesso] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Estrutura simplificada conforme o backend espera
        const dadosServico = {
            descricao,
            valorServico: parseFloat(valorServico)
        };

        try {
            await cadastrarServico(dadosServico);
            setSucesso('Serviço cadastrado com sucesso!');
            // Limpar campos após o cadastro
            setDescricao('');
            setValorServico('');
            setErro('');
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
                        Descrição do Serviço:
                        <textarea
                            placeholder="Descrição detalhada do serviço"
                            required
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </label>
                    <label>
                        Valor do Serviço:
                        <input
                            className='caixa-input'
                            type="number"
                            step="0.01"
                            placeholder="0,00"
                            required
                            value={valorServico}
                            onChange={(e) => setValorServico(e.target.value)}
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