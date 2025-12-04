import React, { useState } from 'react';
import  './Global.css';

import Educacao from './components/educacao/edu';
import Home from './components/home/Home';
import SobreMim from './components/sobremim/SobreMim';
import Projetos from './components/projetos/Projetos';
import Contato from './components/contato/Contato';
import Sidebar from './components/sidebar/Sidebar';



// --- Componentes das Páginas ---
<>
<Home />
<SobreMim />
<Projetos />
<Contato />
<Educacao />
<Sidebar />
</>

// Função auxiliar para renderizar o conteúdo da página com base no estado
const renderContent = (currentPage) => {
  switch (currentPage) {
    case 'Home':
      return <Home />;
    case 'SobreMim':
      return <SobreMim />;
    case 'Projetos':
      return <Projetos />;
    case 'Contato':
      return <Contato />;
    case 'Educacao':
      return <Educacao />;
    default:
      return <Home />;
  }
};

// Componente Principal do Aplicativo
export default function App() {
  // 1. O estado que controla a navegação
  // Inicializa com 'Home'
  const [currentPage, setCurrentPage] = useState('Home');

  // Estilos CSS Integrados
  const styles = `

    /* --- Sidebar (adaptado da sua estrutura) --- */
    .sidebar {
    left: 0;
        position: absolute;
        top: 0;
        width: 256px; 
        height: 100vh;
        background-color: var(--color-background);
        padding: 20px;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3); /* Sombra mais visível */
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
    }
    .container_avatar {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-hoverb);
        width: 100%;
    }
    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: var(--color-primary);
        margin: 0 auto 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: var(--color-white);
    }
    .avatar img{
        border-radius: 50%;
        }
    .avatar svg {
        width: 40px;
        height: 40px;
    }

    .name_avatar {
        font-size: 18px;
        font-weight: 600;
        color: var(--color-white);
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .version {
        font-size: 12px;
        color: var(--color-text-inactive);
    }

    .lista {
        list-style: none;
        padding: 0;
        width: 100%;
        /* Empurra os ícones sociais para baixo */
    }

    .nav-link {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        border-radius: 8px;
        transition: all 0.2s;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 4px;
        color: var(--color-text-inactive);
        text-decoration: none; /* Garante que links <a> não tenham sublinhado */
    }

    .nav-link:hover {
        background-color: var(--color-hoverb);
        color: var(--color-white);
    }

    .nav-link.active {
        background-color: var(--color-hoverb);
        color: var(--color-white);
        box-shadow: 0 2px 4px rgba(79, 70, 229, 0.4);
    }

    .nav-icon {
        margin-right: 12px;
    }

    .nav-icon svg {
        width: 20px;
        height: 20px;
    }

    /* --- Ícones Sociais --- */
    .icons_social {
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid var(--color-hoverb);
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .icons_social a {
        color: var(--color-text-inactive);
        transition: color 0.2s;
        text-decoration: none;
    }
    .icons_social a:hover {
        color: var(--color-hoverb);
    }
    .icon_social {
        width: 24px;
        height: 24px;
    }

    /* --- Conteúdo Principal --- */
    .main-content {
        flex-grow: 1;
        padding: 32px;
        overflow-y: auto;
    }

   
   

  
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="app-container">

        {/* 2. Barra Lateral (Sidebar) - Agora como componente separado */}
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* 3. Conteúdo Principal */}
        <main className="main-content">
          {/* Renderiza o componente da página baseado no estado 'currentPage' */}
          {renderContent(currentPage)}
        </main>

      </div>
    </>
  );
}