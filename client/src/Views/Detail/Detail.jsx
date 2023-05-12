import s from './Detail.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../Redux/Actions/actions";


function Detail() {
  const estado = useSelector((state) => state.detail);
  const {imagen, nombre,vida,ataque,defensa,velocidad,altura,peso,tipo} = estado;


  const dispatch = useDispatch();
  let { id } = useParams();
  
  useEffect(() => {
    dispatch(getById(id));
  }, []);

    return (
      <div className={s.fondo}>
          <div className={s.pagina}>
        <div className={s.detalles}>
        <div className={s.caja_imagen}>
          <img src={imagen} alt="" className={s.imagen} />
        </div>
        <div>

        <div className={s.dato}>
          <h3>Nombre:</h3>
          <p>{nombre}</p>
        </div>
        <div className={s.dato}>
          <h3>Vida:</h3>
          <p>{vida}</p>
        </div>
        <div className={s.dato}>
          <h3>Ataque:</h3>
          <p>{ataque}</p>
        </div>
        <div className={s.dato}>
          <h3>Defensa:</h3>
          <p>{defensa}</p>
        </div>
        <div className={s.dato}>
          <h3>Velocidad:</h3>
          <p>{velocidad}</p>
        </div>
        <div className={s.dato}>
          <h3>Altura:</h3>
          <p>{altura}</p>
        </div>
        <div className={s.dato}>
          <h3>Peso:</h3>
          <p>{peso}</p>
        </div>


        <div className={s.dato}>
          <h3>Tipo:</h3>
          {console.log(tipo)}
          {
          tipo?.map((t, index) => {
                return( 
                    <div>
                    <span key={index}>{t.nombre}</span>
                    </div>
                    )
              })
         }
          
          
        </div>
        </div>

        </div>

        </div>
      </div>
    );
  }
  
export default Detail;