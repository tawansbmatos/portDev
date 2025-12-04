import { FaInternetExplorer, FaPaperPlane, FaPooStorm } from 'react-icons/fa';
import './Home.css';
const Home = () => (
  <div className=" home-content">
    <h2>Visão Geral</h2>
    <p className="text-home">Um pequeno resumo das minhas áreas e Conquistas recentes.</p>
    
    <div className="home-box">
      <div className="home-container-cards">
        <h3 className="home-title-card">Projetos Recentes</h3>
        <p>Desenvolvimento de uma réplica do linkedIn, usando React.Js e trabalhando responsividade. Hospedado pela plataforma Vercel</p>
        <a href="#"><FaInternetExplorer /> Acessar Projeto</a>
      </div>

      <div className="home-container-cards">
        <h3 className="home-title-card">Foco Atual</h3>
        <p>Estou me aprofundando em React.Js, estou iniciando os estudos em C#, com o objetivo de elevar meus conhecimento para o desenvolvimento de software robusto e escalávei, utilizando o visual studio, procurando aplicar também para API Rest. Outro Foco atual está em aprender um banco de dados, como o PostgreeSQL, ampliando meu "campo de visão" tecnolólico que conversem entre si e não fiquem muito distintos. </p>
        <span className="home-ferramentas-iconsCards">Ferramentas: <FaPaperPlane /></span>
      </div>
      <div className="home-container-cards">
        <h3 className="home-title-card">Foco Atual</h3>
        <p>Estou me aprofundando em React.Js, estou iniciando os estudos em C#, com o objetivo de elevar meus conhecimento para o desenvolvimento de software robusto e escalávei, utilizando o visual studio, procurando aplicar também para API Rest. Outro Foco atual está em aprender um banco de dados, como o PostgreeSQL, ampliando meu "campo de visão" tecnolólico que conversem entre si e não fiquem muito distintos. </p>
        <span className="home-ferramentas-iconsCards">Ferramentas: <FaPaperPlane /></span>
      </div>

    </div>
  </div>
  
);
export default Home;