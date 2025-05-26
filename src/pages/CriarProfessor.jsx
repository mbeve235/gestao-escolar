import React from 'react';
import '../styles/App.css';
import Sidebar from '../components/Sidebar';

function CriarProfessor() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Criar Professor</h1>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
          <input type="text" placeholder="Bilhete de Identidade" />
          <input type="text" placeholder="Género" />
          <input type="date" placeholder="Data" />
          <input type="text" placeholder="Localização" />
          <input type="text" placeholder="Código de Autorização" />
          <input type="text" placeholder="Formação" />
          <input type="text" placeholder="Estado do Docente" />
          <button type="submit">Criar Professor</button>
        </form>
      </div>
    </div>
  );
}

export default CriarProfessor;
