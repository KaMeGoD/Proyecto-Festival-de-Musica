import React, { useEffect } from 'react';

const Header: React.FC = () => {
  const scrollNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const seccionScroll = e.currentTarget.getAttribute("href");
    const seccion = document.querySelector(seccionScroll!);
    seccion?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const navegacionFija = () => {
      const barra = document.querySelector('header');
      const sobreFestival = document.querySelector('.sobre-festival');
      const body = document.querySelector('body');

      const handleScroll = () => {
        if (sobreFestival) {
          const boundingRect = sobreFestival.getBoundingClientRect();
          if (boundingRect.bottom < 0) {
            barra?.classList.add('fijo');
            body?.classList.add('body-scroll');
          } else {
            barra?.classList.remove('fijo');
            body?.classList.remove('body-scroll');
          }
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    navegacionFija();
  }, []);

  return (
    <header className="header">
      <div className="contenedor contenido-header">
        <h1>Rock & EDM Fest</h1>
        <nav className="navegacion-principal">
          <a href="#lineup" onClick={scrollNav}>Line Up</a>
          <a href="#galeria" onClick={scrollNav}>Galeria</a>
          <a href="#boletos" onClick={scrollNav}>Boletos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
