import React, { useState } from 'react';
import './../../styles/Menu.scss';
import { Link } from 'react-router-dom';
import chave from './../../assets/chaves.svg';
import pneu from './../../assets/pneu.svg';
import motor from './../../assets/motor.svg';
import bau from './../../assets/bau.svg';
import setaBaixo from './../../assets/seta.svg';

function Menu() {
    const [clienteAberto, setClienteAberto] = useState(false);
    const [veiculoAberto, setVeiculoAberto] = useState(false);
    const [servicoAberto, setServicoAberto] = useState(false);
    const [relatorioAberto, setRelatorioAberto] = useState(false);

    return (
        <section className='Menu'>
            <div className='menu-item'>
                <img src={chave} alt="Cliente"/>
                <h5>Cliente
                <img 
                    src={setaBaixo} 
                    alt="Expandir" 
                    className={`seta-baixo ${clienteAberto ? 'rotated' : ''}`}
                    onClick={() => setClienteAberto(!clienteAberto)}
                />
                </h5>
                
                {clienteAberto && (
                    <ul className='submenu'>
                        <li>
                            <Link to="/cadastrar-cliente" className='opcao'>Cadastrar Cliente</Link>
                        </li>
                        <li>
                            <Link to="/consultar-cliente" className='opcao'>Consultar Cliente</Link>
                        </li>
                    </ul>
                )}
            </div>
            <div className='menu-item'>
                <img src={pneu} alt="Veículo" />
                <h5>Veículo 
                <img 
                    src={setaBaixo} 
                    alt="Expandir" 
                    className={`seta-baixo ${veiculoAberto ? 'rotated' : ''}`} 
                    onClick={() => setVeiculoAberto(!veiculoAberto)}
                />
                </h5>
                {veiculoAberto && (
                    <ul className='submenu'>
                        <li><Link to="/cadastrar-veiculo" className='opcao'>
                            Cadastrar Veículo
                        </Link></li>
                        <li><Link to="/consultar-veiculo" className='opcao'>
                            Consultar Veículo
                        </Link></li>
                    </ul>
                )}
            </div>
            <div className='menu-item'>
                <img src={motor} alt="Serviço" />
                <h5>Serviço
                <img 
                    src={setaBaixo} 
                    alt="Expandir" 
                    className={`seta-baixo ${servicoAberto ? 'rotated' : ''}`}
                    onClick={() => setServicoAberto(!servicoAberto)}
                />
                </h5>
                {servicoAberto && (
                    <ul className='submenu'>
                        <li><Link to="/cadastrar-servico" className='opcao'>
                            Registrar Serviço
                        </Link></li>
                    </ul>
                )}
            </div>
            <div className='menu-item'>
                <img src={bau} alt="Relatório" />
                <h5>Relatório
                <img 
                    src={setaBaixo} 
                    alt="Expandir" 
                    className={`seta-baixo ${relatorioAberto ? 'rotated' : ''}`} 
                    onClick={() => setRelatorioAberto(!relatorioAberto)}
                />
                </h5>
                {relatorioAberto && (
                    <ul className='submenu'>
                        <li><Link to="/consultar-servico" className='opcao'>
                            Consultar Serviço
                        </Link></li>
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Menu;
