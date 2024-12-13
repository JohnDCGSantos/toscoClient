import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../navBar.css';
import logoImg from '/toscoLogo.jpg';

const Navbar = () => {

  const [position, setPosition] = useState(60);
  const navigate = useNavigate(); // Hook para navegar entre rotas
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    // Alterna entre rodar e parar
    const toggleSpin = () => {
      setIsSpinning(true); // Adiciona a classe spinning
      setTimeout(() => {
        setIsSpinning(false); // Remove a classe spinning após 5 segundos
      }, 5000); // Dura 5 segundos
    };

    toggleSpin(); // Inicia a rotação na carga
    const interval = setInterval(toggleSpin, 10000); // Recomeça a cada 10 segundos (5 rodando + 5 parado)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

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
    
    backgroundColor: position > 50 ? 'rgba(208, 100, 33 , 0.8)' : 'rgba(238, 169, 49,0.8)', // Muda cor ao rolar
    transition: 'background-color 0.3s ease', // Transição suave
  };

  return (
    <div className="header" style={navbarStyle}>
      <div className="logoImg">
      <img
          className={`intrImg ${isSpinning ? 'spinning' : ''}`} // Aplica a classe spinning quando está rodando
          src={logoImg}
          alt="introImg"
        />
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
