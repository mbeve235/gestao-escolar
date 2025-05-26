import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Disciplina from './pages/Disciplina';
import CriarTurma from './pages/CriarTurma';
import AdminDashboard from './pages/AdminDashboard';
import DashboardAdmin from './pages/DashboardAdmin';
import CriarProfessor from './pages/CriarProfessor';
import CriarEstudante from './pages/CriarEstudante';
import MinhasNotas from './pages/MinhasNotas';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/disciplina" element={<Disciplina />} />
        <Route path="/criarturma" element={<CriarTurma />} />
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path="/criarprofessor" element={<CriarProfessor />} />
        <Route path="/criarestudante" element={<CriarEstudante />} />
        <Route path="/disciplina" element={<Disciplina />} />
        <Route path="/minhasnotas" element={<MinhasNotas />} />
      </Routes>
    </Router>
  );
}

export default App;
