import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Disciplina.css';

const Disciplina = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Disciplina</h1>
        <table>
          <thead>
            <tr>
              <th>ID Disciplina</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Português</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Disciplina;
