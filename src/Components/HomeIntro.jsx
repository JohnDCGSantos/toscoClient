import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeImg from '../assets/headerImg.jpg';
import '../Home.css';
import CarouselHome from './CarouselHome';
import Contactos from './Contactos';

const HomeIntro = () => {
  const location = useLocation();
  const [scrollTriggered, setScrollTriggered] = useState(false); // Controla a rolagem para "contactos"

  useEffect(() => {
    // Verifica se há um estado indicando que deve rolar para "contactos"
    if (location.state?.scrollToContactos && !scrollTriggered) {
      const element = document.getElementById('contactos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setScrollTriggered(true); // Marca como rolado
      }
    } else if (!location.state?.scrollToContactos) {
      // Se não for para contactos, rola para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state, scrollTriggered]);

  useEffect(() => {
    // Reseta o estado ao desmontar o componente ou navegar para outra página
    return () => setScrollTriggered(false);
  }, []);

  return (
    <>
      <div className="heroSection">
        <div className="heroMask">
          <img className="heroImg" src={HomeImg} alt="introImg" />
          <div className="textHome">
            <h1>Aproveita o momento. Comer e beber nunca foi tão simples.</h1>
          </div>
        </div>
      </div>
      <CarouselHome />
      <div id="contactos" style={{ width: '100%' }}>
        <Contactos />
      </div>
    </>
  );
};

export default HomeIntro;
