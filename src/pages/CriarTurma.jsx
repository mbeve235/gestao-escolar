import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/CriarTurma.css';

const CriarTurma = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Criar Turma</h1>
        <p>Digite os dados da turma</p>
        <form>
          <input type="text" placeholder="Nome da turma" />
          <input type="text" placeholder="Ano" />
          <input type="text" placeholder="Período" />
          <input type="text" placeholder="Classe" />
          <div className="buttons">
            <button type="button" className="voltar">Voltar</button>
            <button type="submit" className="criar">Criar Turma</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CriarTurma;
