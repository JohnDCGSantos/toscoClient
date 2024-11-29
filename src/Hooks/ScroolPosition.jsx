import { useState, useEffect } from 'react';

// Hook para pegar a posição do scroll
const ScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Atualiza a posição de rolagem
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpa o evento ao desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array vazio para rodar uma vez ao iniciar

  return scrollPosition;
};

export default ScrollPosition;
