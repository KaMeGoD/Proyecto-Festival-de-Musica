import { GaleriaPequeña } from "./GaleriaPequeña"

export const Galeria: React.FC = () =>{

  const handleOnClickGal = (e: React.MouseEvent)=>{
    const imagen = document.createElement('picture');
    imagen.innerHTML = `<img src='../src/assets/img/grande/${parseInt(e.currentTarget.id) + 1}.jpg' loading='lazy' alt='imagengaleria'/>`;
    
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
      body?.classList.remove('fijar-body');
      overlay.remove();
    }
    
    const body: HTMLBodyElement | null = document.querySelector('body');
    body?.appendChild(overlay);

    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function(){
      body?.classList.remove('fijar-body');
      overlay.remove();
    }

    overlay.appendChild(cerrarModal);
    body?.classList.add('fijar-body');
  }


  return(
    <>
      <section id="galeria" className="galeria">
        <h3>Galeria</h3>

        <ul className="galeria-imagenes">
          {Array.from({ length: 12 }, (_, i) => (
            <GaleriaPequeña
              key={i}
              imagen={`../src/assets/img/thumb/${i + 1}.jpg`}
              altGal="Galeria"
              onClickGal={handleOnClickGal}
              idImg={i.toString()}
            />
          ))}
        </ul>
      </section>
    </>
)
}