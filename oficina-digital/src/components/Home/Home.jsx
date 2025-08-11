import React from 'react';
import './../../styles/Home.scss';
import carro1 from './../../assets/carro1.svg';
import carro2 from './../../assets/carro2.svg';


function Home() {
   

    return (
        <div className='Home'>
            

            
            <section className='Body'>
                <div className='Logo-esquerdo'>
                    <img src={carro1} alt="Carro1" />
                    <p>
                    Bem-vindo ao seu espaço de trabalho... <br/>Conte com este sistema para facilitar o seu dia a dia.
                    </p>
                </div>
                <div className='Logo-direito'>
                    <img src={carro2} alt="Carro2" />
                </div>
            </section>
        </div>
    )
}

export default Home;