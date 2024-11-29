import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../navBar.css';
import logoImg from '../assets/toscoLogo.jpg';

const Navbar = () => {

  const [position, setPosition] = useState(60);
  const navigate = useNavigate(); // Hook para navegar entre rotas
  const location = useLocation(); // Para verificar a página atual

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setPosition(scrollPosition); // Atualiza o estado com o valor atual do scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path, state = {}) => {
    // Rola para o topo antes de navegar
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path, { state });
  };

  const navbarStyle = {
    fontFamily: 'open sans',
    color: 'rgb(241,241,241)',
    backgroundColor: position > 50 ? 'rgba(208, 100, 33 , 0.8)' : 'rgba(238, 169, 49,0.8)', // Muda cor ao rolar
    transition: 'background-color 0.3s ease', // Transição suave
  };

  return (
    <div className="header" style={navbarStyle}>
      <div className="logoImg">
        <img className="intrImg" src={logoImg} alt="introImg" />
      </div>
      <div className="Hcontent">
      <li onClick={() => handleNavigation('/')}>Início</li>
        <li onClick={() => handleNavigation('/menu')}>Menu</li>
        <li onClick={() => handleNavigation('/', { scrollToContactos: true })}>
          Contactos
        </li>
      </div>
    </div>
  );
};

export default Navbar;
