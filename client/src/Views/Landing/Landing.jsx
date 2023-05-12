import s from './Landing.module.css'
import { Link } from "react-router-dom";



function Landing() {
    return (
      <div className={s.fondo}>
        <div className={s.cubo}>
            <div className={s.inicio}>
                <h1>Maximiliano Fonseca</h1>
                <h3>Poyecto Individual</h3>
                <h4>( Pokemon )</h4>
            </div>
            <div className={s.nombre}>
                <button className={s.boton}>
                    <Link to={"/home"} style={{ textDecoration: 'none', color: "white"}}><h3>Inicio</h3></Link>
                </button>
            </div>
        </div>
      </div>
    );
  }
  
export default Landing;