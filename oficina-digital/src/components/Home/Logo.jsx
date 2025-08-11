import React from 'react';
import logo from './../../assets/ignicao.svg';
import './../../styles/Logo.scss'

function Logo() {
    return (
        <div className='Logo'>
            {<div className='imagem'>
                <img src={logo} alt='Logo' />
            </div>}
            <div className='titulo'>
                {<h1>Parafuso Solto Digital</h1>}
            </div>
        </div>
    )
}

export default Logo;