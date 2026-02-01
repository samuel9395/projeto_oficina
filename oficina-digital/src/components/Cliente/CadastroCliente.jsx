import { React, useState } from 'react';
import '../../styles/CadastroCliente.scss';
import Chave from '../../assets/chaves.svg';
import Mecanico from '../../assets/mecanico.svg';

function CadastroCliente() {
    const [mensagem, setMensagem] = useState("");

    return (
        <section>
            <div className='image-cadastro'>
                <img src={Chave} alt='img'/>
            </div>

            <div className='titulo-cadastro'>
                <h3>Cadastrar Cliente</h3>
            </div>

            <div style={{ padding: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '18px', color: '#666' }}>
                    O backend ainda não possui o endpoint de cadastro de clientes.<br/>
                    Use a função de <strong>Consultar Cliente</strong> para buscar clientes existentes.
                </p>
            </div>

            <div className='mecanico'>
                <img src={Mecanico} alt='mecanico' />
            </div>
        </section>
    );
}

export default CadastroCliente;