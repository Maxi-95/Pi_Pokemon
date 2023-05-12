import Card from "../Card/Card";
import s from './CardsContainer.module.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filtrarTipos, getTipos, ordenByNombre, ordenByAtaque, getCreados } from "../../Redux/Actions/actions";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

function CardContainer() {
    const pokemons = useSelector((state)=>state.pokemons)
    const losTipos = useSelector((state)=>state.tipos)
    const [estadoTipos, setEstadoTipos] = useState()
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);
  
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

    const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch( getTipos() )
    },[dispatch])
    

    function handleOrden(e) {
      e.preventDefault();
      dispatch(ordenByNombre(e.target.value));
      setEstadoTipos(e.target.value);
    }
    function handleAtaque(e) {
      e.preventDefault();
      dispatch(ordenByAtaque(e.target.value));
      setEstadoTipos(e.target.value);
    }
    function handleFilterByType(e){
    
      dispatch(filtrarTipos(e.target.value))
    }


    function handleCreados(e){
      e.preventDefault();
      dispatch(getCreados(e.target.value))
      setEstadoTipos(e.target.value)
    }
    return (
       
    <div className={s.divicion}>
      
        <div className={s.acomodar}>
            <div className={s.orden}>
            <h3 >Ordenar por:</h3>
          <select name="Nombre" id="Nombre" onChange={handleOrden}>
            <option value="nombre">Nombre</option>
            <option value="A-Z">Ascendente</option>
            <option value="Z-A">Descendente</option>
          </select>
          <select name="Ataque" id="Ataque" onChange={handleAtaque}>
            <option value="ataque">Ataque</option>
            <option value="Min">Ascendente</option>
            <option value="Max">Descendente</option>
          </select>
            <h3>Filtrar:</h3>

            <select onChange={e => handleFilterByType(e)}>
              <option value="All">Todos los tipos</option>
            {losTipos.map((e) => {
              return (
                
                <option key={e.nombre} value={e.nombre}>{e.nombre}</option>
                )
              })}
            </select>

          <h3>Creados:</h3>
          <select name="" id="" onChange={handleCreados}>
            <option value="All" key="All">Mostrar</option>
            <option value="dataBase" key="dataBase">Creados</option>
          </select>
              </div>
        </div>



      <div className={s.caja}>
          <div className={s.contenedor_cartas}>
            {currentPosts?.map((pokes)=>(
            <Card pokes={pokes}/>
            ))}
        

          </div>
          <div className={s.paginado}>
          <Pagination
            totalPost={pokemons.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
         />
         </div>
      </div>
    </div>
    );
  }
  
  export default CardContainer;