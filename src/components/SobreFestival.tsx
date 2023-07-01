import Vocalista from '../assets/img/imagen_vocalista.jpg';

export const SobreFestival: React.FC = () =>{
  return(
    <>
      <section className="contenedor sobre-festival">
        <div className="imagen">
          <img src={Vocalista} alt="vocalista" />
        </div>
        <div className="contenido-festival">
          <h2>Rock & EDM Festival</h2>
          <p className='fecha'>Julio 2022, Guadalajara, México</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur illum vel veniam consequatur, 
            beatae fugit, enim provident sapiente assumenda eaque repellendus explicabo necessitatibus eveniet! Assumenda 
            aperiam nisi velit aspernatur.</p>
        </div>
      </section>
    </>
)
}