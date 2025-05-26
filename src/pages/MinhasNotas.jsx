import React from 'react';
import '../styles/App.css';
import Sidebar from '../components/Sidebar';

function MinhasNotas() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Bem-Vindo, Mirson</h1>
        <h2>Minhas Notas</h2>
        <p>[Tabela com notas]</p>
      </div>
    </div>
  );
}

export default MinhasNotas;
