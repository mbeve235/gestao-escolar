import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Slidebar.css';

const Slidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">JRS</div>
      <ul className="menu">
        <li><Link to="/">DASHBORD</Link></li>
        <li><Link to="/criar-turma">TURMAS</Link></li>
        <li><Link to="#">PROFESSOR</Link></li>
        <li><Link to="#">ESTUDANTE</Link></li>
        <li><Link to="/disciplina">DISCIPLINA</Link></li>
        <li><Link to="#">SAIR</Link></li>
      </ul>
      <div className="footer">Todos direitos reservados © JRS 2025.</div>
    </div>
  );
};

export default Slidebar;
