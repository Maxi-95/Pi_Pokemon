import s from './Card.module.css'
import { Link } from "react-router-dom";


function Card({pokes}) {
  const {nombre, imagen, tipo, ataque, id} = pokes;
  return (
    <div className={s.carta}>
      <Link to={`/home/${id}`} style={{ textDecoration: 'none', color: "black"}}>
        <div className={s.fondoImagen}>
          <img src={imagen} alt={"imagen"} className={s.imagen}/>
        </div>
        <div className={s.nombre}>
          <h3>{nombre}</h3>
        </div>


      <div className={s.datos}>
        <div className={s.caja}>
          <div className={s.ataque}>
            <p>Ataque :</p>
          </div>
          <div className={s.ataqueH4}>
            <h4>{ataque}</h4>
          </div>
        </div>


        <div className={s.caja}>
       
          <div className={s.tipo}>
          <p>Tipo :</p>
          </div>
          {tipo &&
              tipo.map((t, index) => {
                return( 
                    <div className={s.tipoH4}>
                    <span key={index}>{t}</span>
                    </div>
                    )
              })
         }
        
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Card;