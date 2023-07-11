
export const Header = () => {

  const scrollNav = (e: React.MouseEvent)=>{
    e.preventDefault();
    const seccionScroll:string | null = e.currentTarget.getAttribute("href");
    const seccion = document.querySelector(seccionScroll);
    seccion?.scrollIntoView({behavior: "smooth"});
  }

  function navegacionFija(){
    const barra = document.querySelector('header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');
    window.addEventListener('scroll', function(){
      // console.log(sobreFestival?.getBoundingClientRect());
      if(sobreFestival?.getBoundingClientRect().bottom < 0){
        barra?.classList.add('fijo');
        body?.classList.add('body-scroll');
      }else{
        barra?.classList.remove('fijo');
        body?.classList.remove('body-scroll');
      }
      }
    )}
    navegacionFija();


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