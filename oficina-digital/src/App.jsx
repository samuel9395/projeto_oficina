import React from 'react';
import './styles/App.scss';
import Logo from './components/Home/Logo';
import Menu from './components/Home/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CadastroCliente from './components/Cliente/CadastroCliente';
import ConsultaCliente from './components/Cliente/ConsultaCliente';
import {Rodape} from './components/Home/RodaPe'
import CadastroVeiculo from './components/Veiculo/CadastroVeiculo';
import ConsultaVeiculo from './components/Veiculo/ConsultaVeiculo';
import CadastroServico from './components/Servico/CadastroServico';
import ConsultaServico from './components/Servico/RelatorioServicos';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <section className="Navbar">
            <Logo />
            <Menu />
          </section>
          <section className="App-content"> {/* Container para o conteúdo principal */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrar-cliente" element={<CadastroCliente />}/>
              <Route path="/consultar-cliente" element={<ConsultaCliente />}/>
              <Route path="/cadastrar-veiculo" element={<CadastroVeiculo />}/>
              <Route path="/consultar-veiculo" element={<ConsultaVeiculo />}/> 
              <Route path="/cadastrar-servico" element={<CadastroServico />}/>
              <Route path="/consultar-servico" element={<ConsultaServico />}/>
            </Routes>
          </section>
        </header>
        <Rodape /> {/* Rodapé fixo */}
      </div>
    </Router>
  );
}

export default App;
