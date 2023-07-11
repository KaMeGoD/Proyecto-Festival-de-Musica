
export const Header = () => {

  const scrollNav = (e: React.MouseEvent)=>{
    e.preventDefault();
    const seccionScroll:string | null = e.currentTarget.getAttribute("href");
    const seccion = document.querySelector(seccionScroll);
    seccion?.scrollIntoView({behavior: "smooth"});
  }
  
  return (
    <>
      <header className="header">
        <div className="contenedor contenido-header">
          <h1>Rock & EDM Fest</h1>
          <nav className="navegacion-principal">
            <a href="#lineup" onClick={scrollNav}>Line Up</a>
            <a href="#galeria" onClick={scrollNav} >Galeria</a>
            <a href="#boletos" onClick={scrollNav} >Boletos</a>
          </nav>
        </div>
      </header>
    </>
  );
}