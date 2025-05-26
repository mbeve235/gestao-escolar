import React from 'react';
import { Pencil } from 'lucide-react';
import '../AdminDashboard.css';

const AdminDashboard = () => {
  const admins = [
    { nome: 'Alfredo', user: 'mbebe', genero: 'Masculino' },
    { nome: 'Acla', user: 'acla', genero: 'Feminino' },
    { nome: 'Humberto', user: 'adilson', genero: 'Masculino' },
  ];

  const menuItems = ['DASHBORD', 'TURMAS', 'PROFESSOR', 'ESTUDANTE', 'DISCIPLINA', 'SAIR'];

  const cards = [
    { label: 'Estudante', count: 2 },
    { label: 'Professor', count: 1 },
    { label: 'Turmas', count: 1 },
    { label: 'Admin', count: 3 },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">JRS</div>
        <nav className="menu">
          {menuItems.map((item, index) => (
            <button key={index} className="menu-button">{item}</button>
          ))}
        </nav>
        <footer className="sidebar-footer">
          Todos direitos reservados © JRS 2025.
        </footer>
      </aside>

      <main className="main-content">
        <h1 className="title">
          Dashbord Administrador, <span className="admin-name">Alfredo</span>
        </h1>

        <div className="card-grid">
          {cards.map((card, i) => (
            <div key={i} className="card">
              <p className="card-count">{card.count}</p>
              <p className="card-label">{card.label}</p>
            </div>
          ))}
        </div>

        <section className="admin-table-section">
          <h2 className="section-title">Informações dos Administradores</h2>
          <div className="admin-table header">
            <div>Nome</div>
            <div>User</div>
            <div>Gênero</div>
            <div>Alterar Estado</div>
            <div></div>
          </div>
          {admins.map((admin, index) => (
            <div key={index} className="admin-table row">
              <div>{admin.nome}</div>
              <div>{admin.user}</div>
              <div>{admin.genero}</div>
              <div><Pencil className="edit-icon" /></div>
              <div></div>
            </div>
          ))}
          <button className="create-button">Criar Admin</button>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;