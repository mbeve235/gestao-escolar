import React from 'react';
import '../styles/App.css';
import Sidebar from '../components/Sidebar';

function DashboardAdmin() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Bem-Vindo, Admin</h1>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

export default DashboardAdmin;
