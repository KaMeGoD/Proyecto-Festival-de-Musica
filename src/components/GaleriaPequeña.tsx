
interface PropsGaleriaPequeña{
  imagen: string;
  idImg: string;
  altGal: string;
  onClickGal: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export const GaleriaPequeña: React.FC<PropsGaleriaPequeña> = ({imagen, altGal, onClickGal, idImg}) =>{
  return(
    <>
        <img src={imagen} id={idImg} alt={altGal} onClick={onClickGal}/>
    </>
)
}