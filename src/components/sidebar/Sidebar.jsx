
import { FaCodeBranch, FaDownload, FaEnvelope, FaGithub, FaGithubAlt, FaGraduationCap, FaHome, FaLinkedin, FaPage4, FaPaperPlane, FaUser, FaWhatsapp } from 'react-icons/fa'
import avatarimg from '../../assets/avatar.png'
import '../../Global.css';

const icons = {
  Home: <FaHome />,
  User: <FaUser />,
  Projects: <FaCodeBranch />,
  Envelope: <FaEnvelope />,
  Graduation: <FaGraduationCap />,
  Download: <FaDownload />,
  Github: <FaGithub size={25}/>,
  Linkedin: <FaLinkedin size={25}/>,
  Whatsapp: <FaWhatsapp size={25}/>,
};


const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="sidebar">
      <div className="container_avatar">
        {/* Usando placeholder simples para o avatar */}
        <div className="avatar">
          <img src={avatarimg} width={100} className='imgavatar' />
        </div>
        <h1 className="name_avatar">Tawan S.B de Matos</h1>
        <p className="version">V1.0.1</p>
      </div>

      <ul className="lista">
        <NavLink
          page="Home"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          icon={icons.Home}
          label="Início"
        />
        <NavLink
          page="SobreMim"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          icon={icons.User}
          label="Sobre Mim"
        />
        <NavLink
          page="Projetos"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          icon={icons.Projects}
          label="Projetos"
        />
        <NavLink
          page="Contato"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          icon={icons.Envelope}
          label="Contato"
        />
        <NavLink
          page="Educacao"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          icon={icons.Graduation}
          label="Educação"
        />
        <NavLink
          page="DownloadCV"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          icon={icons.Download}
          label="Download CV"
          isExternal={true}
        />
      </ul>

      <div className="icons_social">
        <a href="https://github.com/tawansbmatos" target="_blank" rel="noopener noreferrer">{icons.Github}</a>
        <a href="https://www.linkedin.com/in/tawansbmatos/" target="_blank" rel="noopener noreferrer">{icons.Linkedin}</a>
        <a href="https://wa.me/5591980124661?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!!%0ATudo%20bem%20%3F" target="_blank" rel="noopener noreferrer">{icons.Whatsapp}</a>
      </div>
    </nav>
  );
};
// Componente do Link da Barra Lateral
const NavLink = ({ page, currentPage, setCurrentPage, icon, label, isExternal = false }) => {
  // Define classes dinâmicas para o estado ativo
  const isActive = !isExternal && page === currentPage;
  const classes = isActive ? "nav-link active" : "nav-link";

  if (isExternal) {
    // Para links externos (como Download CV), retorna um <a> normal
    return (
      <a
        className="nav-link"
        href="#" // Substituir por URL real do CV
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="nav-icon">{icon}</span>
        {label}
      </a>
    );
  }

  return (
    <a
      className={classes}
      onClick={() => setCurrentPage(page)}
      role="button"
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="nav-icon">{icon}</span>
      {label}
    </a>
  );
};
export default Sidebar;