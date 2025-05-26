import React from 'react';
import '../styles/App.css';
import Sidebar from '../components/Sidebar';

function CriarEstudante() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Criar Estudante</h1>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
          <input type="text" placeholder="Bilhete de Identidade" />
          <input type="text" placeholder="Género" />
          <input type="date" placeholder="Data de Nascimento" />
          <input type="text" placeholder="Local de Residência" />
          <input type="text" placeholder="Código de Autorização" />
          <input type="text" placeholder="Turma" />
          <input type="text" placeholder="Estado do Estudante" />
          <input type="text" placeholder="Contacto do Encarregado" />
          <button type="submit">Criar Estudante</button>
        </form>
      </div>
    </div>
  );
}

export default CriarEstudante;
