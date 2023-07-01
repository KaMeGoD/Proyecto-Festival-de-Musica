import videoMP4 from '../assets/video/concierto.mp4';
import videoOGG from '../assets/video/concierto.ogg';
import videoWebM from '../assets/video/concierto.webm';

export const Video: React.FC = () => {
  return (
    <>

      <div className="video">
        <div className="overlay">
          <div className="contenedor contenido-video">
            <h2>Rock & EDM Festival</h2>
            <p>Julio 2022, Guadalajara, Mexico</p>
          </div>
        </div>
        <video autoPlay muted loop>
          <source src={videoMP4} typeof='video/mp4' />
          <source src={videoOGG} typeof='video/mp4' />
          <source src={videoWebM} typeof='video/mp4' />
        </video>
      </div>
    </>
  )
}