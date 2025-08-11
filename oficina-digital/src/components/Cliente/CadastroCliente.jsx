import { React, useState } from 'react';
import '../../styles/CadastroCliente.scss';
import Chave from '../../assets/chaves.svg';
import Mecanico from '../../assets/mecanico.svg';
import { cadastrarCliente } from '../../services/clienteApi';



function CadastroCliente() {
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(mensagem);
        
        const clienteData = {
            nome, 
            cpf,
            endereco,
            telefone,
        };
        
        try {
            const  response = await cadastrarCliente(clienteData);
            setMensagem(response.message); // Mensagem de sucesso
            setNome("");
            setCpf("");
            setEndereco("");
            setTelefone("");

        } catch (error) {
            setMensagem("Erro ao cadastrar cliente. Tente novamente.");
        }
    };

    return (
        <section>
            <div className='image-cadastro'>
                <img src={Chave} alt='img'/>
            </div>

            <div className='titulo-cadastro'>
                <h3>Cadastrar Cliente</h3>
            </div>

            <form onSubmit={handleSubmit}>
              
                <label>
                    Nome completo:
                        <input 
                            type="text" 
                            placeholder='João Chaves'
                            required
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)}
                        />
                </label>
                <label>
                    Endereco:
                        <input
                            className='endereco'
                            type='text'
                            placeholder='Rua da manutenção, n100, Jardim Oficina - São Paulo - SP'
                            required
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                </label>
                <label className='text-telefone'>
                    Telefone:
                        <input
                        className='telefone'
                        type='tel'
                        placeholder='(11) 99999-9999'
                        required
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </label>
                <label>
                    CPF: 
                        <input
                            className='input-cpf'
                            type='text'
                            placeholder='xxx.xxx.xxx-xx'
                            required
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                </label>
                <button type="submit">Cadastrar</button>
            </form>

            <div className='mecanico'>
                <img src={Mecanico} alt='mecanico' />
            </div>
        </section>
    )
}

export default CadastroCliente;