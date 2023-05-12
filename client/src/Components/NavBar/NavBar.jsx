//import Home from "../../Views/Home/Home";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <div className={s.barraDeNavegador}>
      <div>
        <SearchBar/>
      </div>
      <div className={s.caja_botones}>
        <div>
          <button className={s.botonInicio}>
            <Link to={"/home"} style={{ textDecoration: 'none', color: "black"}}>Inicio</Link>
          </button>
        </div>
        <div>
          <button className={s.botonForm}>
            <Link to={"/form"} style={{ textDecoration: 'none', color: "black"}}>Crear Pokemon</Link>
          </button>
        </div>
      </div>
      </div>
    );
  }
  
  export default NavBar;