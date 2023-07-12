import  { useEffect } from 'react';

const Header = () => {
  const navegacionFija = () => {
    useEffect(() => {
      const barra = document.querySelector('.header') as HTMLElement | null;
      const sobreFestival = document.querySelector('.sobre-festival') as HTMLElement | null;
      const body = document.querySelector('body') as HTMLElement | null;

      const handleScroll = () => {
        if (sobreFestival?.getBoundingClientRect().bottom! < 0) {
          barra?.classList.add('fijo');
          body?.classList.add('body-scroll');
        } else {
          barra?.classList.remove('fijo');
          body?.classList.remove('body-scroll');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  };

  const scrollNav = () => {
    const enlaces = document.querySelectorAll('.navegacion-principal');
  
    enlaces.forEach((enlace) => {
      enlace.addEventListener('click', (e) => {
        e.preventDefault();
        const seccionScroll = (e.target as HTMLAnchorElement).getAttribute('href');
        const seccion = document.querySelector(seccionScroll!);
        seccion?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };
  

  navegacionFija();

  return (
    <header className="header">
      <div className="contenedor contenido-header">
        <h1>Rock & EDM Festival</h1>

        <nav onClick={scrollNav} className="navegacion-principal">
          <a href="#lineup">Line Up</a>
          <a href="#galeria">GalerÃ­a</a>
          <a href="#boletos">Boletos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;