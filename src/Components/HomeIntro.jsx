import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeImg from '../assets/headerImg.jpg';
import '../Home.css';
import CarouselHome from './CarouselHome';
import Contactos from './Contactos';

const HomeIntro = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica se há um estado indicando que deve rolar para "contactos"
    if (location.state?.scrollToContactos) {
      const element = document.getElementById('contactos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se não for para contactos, rola para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);
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
