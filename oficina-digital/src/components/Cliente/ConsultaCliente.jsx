import React, {useState} from 'react';
import './../../styles/ConsultaCliente.scss';
import Chave from '../../assets/chaves.svg';
import mecanico from '../../assets/mecanico-cadastro.svg'
import { buscarClientePorNome } from '../../services/clienteApi';

function ConsultaCliente() {
    const [nome, setNome] = useState('');
    const [cliente, setCliente] = useState('');
    const [erro, setErro] = useState('');

    const hundleInputChange = (e) => {
        setNome(e.target.value);
    };

    const hundleBuscarCliente = async () => {
        try {
            const dadosCliente = await buscarClientePorNome(nome);
            setCliente(dadosCliente); // Define os dados do cliente
            setErro(''); // Limpa qualquer erro anterior
        } catch (error) {
            setErro('Cliente não encontrado, ou erro na busca.');
            setCliente(null);//Limpa os dados do cliente caso haja erro
        }
    };

    return (
        <div className='consulta'>
            <section className='default'>
                 <div className='image-consulta'>
                    <img src={Chave} alt='img'/>
                </div>
                <div className='titulo-consulta'>
                    <h3>Consultar Cliente</h3>
                </div>
                
                <input 
                    type="text" 
                    placeholder="Digite o nome do cliente" 
                    className='input-cpf'
                    value={nome}
                    onChange={hundleInputChange}
                />

                <button onClick={hundleBuscarCliente} className='btn-buscar'>Buscar</button> 
            </section>
            <section className='tela-consulta'>
                {
                    cliente ? (
                        <div className="dados-cliente">
                            <h4>Dados do Cliente</h4>
                            <p><strong>Nome:</strong> {cliente.nome}</p>
                            <p><strong>Telefone:</strong> {cliente.telefone}</p>
                            {cliente.veiculoId && (
                                <>
                                    <p><strong>Veículo ID:</strong> {cliente.veiculoId}</p>
                                    <p><strong>Placa:</strong> {cliente.placa}</p>
                                    <p><strong>Modelo:</strong> {cliente.modelo}</p>
                                    <p><strong>Marca:</strong> {cliente.marca}</p>
                                </>
                            )}
                        </div>
                    ) : (
                    <p className='msg'>Nenhum cliente encontrado.<br/>{erro}</p>
                    )
                }
            </section>

            <div className='mecanico'>
                <img src={mecanico} alt='mecanico'/>
            </div>

        </div>
    )
}

export default ConsultaCliente;