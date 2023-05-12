import { useEffect, useState } from "react";
import s from "./Form.module.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTipos } from "../../Redux/Actions/actions";


const regexImg = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
const regexNum =  /^[0-9]*(\.?)[ 0-9]+$/;


function Form() {
  const losTipos = useSelector((state)=>state.tipos)
  //const pokemon = useSelector((state)=>state.pokemons)
  //console.log(losTipos)
  //console.log(pokemon)
  const dispatch = useDispatch()
  const history = useHistory()
  
  useEffect(()=>{
    dispatch( getTipos() )
},[dispatch])

  const [input, setInput] = useState({
    nombre: "",
    imagen: "",
    vida: "",
    ataque: "",
    defensa:"",
    velocidad:"",
    altura:"",
    peso:"",
    tipos:[]
  })
  const [error, setError] = useState({
    nombre: "Llenar el campo",
    imagen: "Llenar el campo",
    vida: "Llenar el campo",
    ataque: "Llenar el campo",
    defensa:"Llenar el campo",
    velocidad:"Llenar el campo",
    altura:"Llenar el campo",
    peso:"Llenar el campo",
    tipos:"Elije"
  })

  const validate = (input) => {
    if(!input.nombre){
          setError({...error, nombre:"debe tener nombre"})
          return ;
    }
    else if(!input.imagen){
        setError({...error, imagen:"debe tener imagen"})
        return ;     
    }
    else if(!regexImg.test(input.imagen)){
        setError({...error, imagen:"debe tener una url de img valida"})
        return ;     
    }
    else if(!input.vida){
        setError({...error, vida:"debe tener vida"})
        return ;     
    }
    else if(input.vida.length > 2){
        setError({...error, vida:"deben tener 2 caracteres"})
        return ;     
    }
    else if(!regexNum.test(input.vida)){
        setError({...error, vida:"deben ser de caracter numerico"})
        return ;     
    }
    else if(!input.ataque){
        setError({...error, ataque:"debe tener ataque"})
        return ;     
    }
    else if(input.ataque.length > 2){
        setError({...error, ataque:"deben tener 2 caracteres"})
        return ;     
    }
    else if(!regexNum.test(input.ataque)){
        setError({...error, ataque:"deben ser de caracter numerico"})
        return ;     
    }
    else if(!input.defensa){
        setError({...error, defensa:"debe tener defensa"})
        return ;     
    }
    else if(input.defensa.length > 2){
        setError({...error, defensa:"deben tener 2 caracteres"})
        return ;     
    }
    else if(!regexNum.test(input.defensa)){
        setError({...error, defensa:"deben ser de caracter numerico"})
        return ;     
    }
    else if(!input.velocidad){
        setError({...error, velocidad:"debe tener velocidad"})
        return ;     
    }
    else if(input.velocidad.length > 2){
        setError({...error, velocidad:"deben tener 2 caracteres"})
        return ;     
    }
    else if(!regexNum.test(input.velocidad)){
        setError({...error, velocidad:"deben ser de caracter numerico"})
        return ;     
    }
    else if(!input.altura){
        setError({...error, altura:"debe tener altura"})
        return ;     
    }
    else if(input.altura.length > 2){
        setError({...error, altura:"deben tener 2 caracteres"})
        return ;     
    }
    else if(!regexNum.test(input.altura)){
        setError({...error, altura:"deben ser de caracter numerico"})
        return ;     
    }
    else if(!input.peso){
        setError({...error, peso:"debe tener peso"})
        return ;     
    }
    else if(input.peso.length > 2){
        setError({...error, peso:"deben tener 2 caracteres"})
        return ;     
    }
    else if(!regexNum.test(input.peso)){
        setError({...error, peso:"deben ser de caracter numerico"})
        return ;     
    }
    else if(!input.tipos){
        setError({...error, tipos:"debe ser de algun/os tipo/s"})
        return ;     
    }
    else if(input.tipos.length > 2){
        setError({...error, tipos:"hasta maximo 2 tipos"})
        return ;     
    }
    
    
    else {
        setError({
          ...error,
          nombre: null,
          imagen: null,
          vida: null,
          ataque: null,
          defensa: null,
          velocidad: null,
          altura: null,
          peso: null,
          tipos: null
        });
    }
  }

  // function handleTipos(e){
  //   e.preventDefault();
  //   setInput(input.tipos.push(e.target.value));
  // }

  function handleChecked(e){
    if (e.target.checked) {
        setInput({
        ...input,
        tipos: [...input.tipos, e.target.value]
        })
        validate({
          ...input,
          tipos: [...input.tipos, e.target.value]
        })
        // setError(validate({
        //     ...input,
        //     tipos: [...input.tipos , e.target.value]
        // }))
        
    } else if (!e.target.checked) {
        setInput({
            ...input,
            tipos: input.tipos.filter(el => el !== e.target.value)
            })
            validate({
              ...input,
              [e.target.name]: e.target.value,
            })
        // setError(validate({
        //     ...input,
        //     tipos: input.tipos.filter(el => el !== e.target.value)
        // }))    
    }
};


  function handleChange(e){
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validate({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  console.log(input)

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPokemon(input));
    alert("pokemon creado")
    history.push("/home")
  }


    return (
      <div className={s.fondo}>
      <div className={s.formulario}>
        <form action="" onSubmit={handleSubmit}>
        <div className={s.enderesar}>
          <label htmlFor="" className={s.labels}>Nombre:</label>
          <input type="text" name="nombre" value={input.value} onChange={handleChange} className={s.input}/>
          <h4 className={s.error}>{error.nombre}</h4>
        </div>
        {/* https://w7.pngwing.com/pngs/248/960/png-transparent-pikachu-pokemon-go-silhouette-drawing-pikachu-dog-like-mammal-fictional-character-black.png */}
        <div className={s.enderesar}> 
          <label htmlFor="" className={s.labels}>Imagen:</label>
          <input type="text" name="imagen" value={input.value} onChange={handleChange} className={s.input}/>
          <h4 className={s.error}>{error.imagen}</h4>
        </div>   

        <div className={s.carateristicasNumericas}>
        {/* <div className={s.enderesar}>  */}
        <div className={s.datosNumericos1}>
          
          <div className={s.caja}>
          <label htmlFor="">Vida:</label>
          <input type="text" name="vida" value={input.value} onChange={handleChange}/>
          </div>

          <h4 className={s.error}>{error.vida}</h4>
        {/* </div>
        <div className={s.enderesar}>  */}
        <div className={s.caja}>
          <label htmlFor="">Ataque:</label>
          <input type="text" name="ataque" value={input.value} onChange={handleChange}/>

        </div>
          <h4 className={s.error}>{error.ataque}</h4>
        {/* </div> */}
        {/* <div className={s.enderesar}>            */}
        <div className={s.caja}>
          <label htmlFor="">Defensa:</label>
          <input type="text" name="defensa" value={input.value} onChange={handleChange}/>
          </div>
          <h4 className={s.error}>{error.defensa}</h4>
          </div>
          <div className={s.datosNumericos2}>
        {/* </div>  */}
        <div className={s.caja}>
          <label htmlFor="">Velocidad:</label>
          <input type="text" name="velocidad" value={input.value} onChange={handleChange}/>
          </div>
          <h4 className={s.error}>{error.velocidad}</h4>
          <div className={s.caja}>
          <label htmlFor="">Altura:</label>
          <input type="text" name="altura" value={input.value} onChange={handleChange}/>
          </div>
          <h4 className={s.error}>{error.altura}</h4>
          <div className={s.caja}>

          <label htmlFor="">Peso:</label>
          <input type="text" name="peso" value={input.value} onChange={handleChange}/>
          </div>

          <h4 className={s.error}>{error.peso}</h4>
          </div>
          </div>

            <p className={s.titulo}>Tipos:</p>
          <div className={s.tipos}>
          {
            losTipos.map((t, index) => (
              <label for={t.nombre} className={s.tipoLabel}>
                <input type="checkbox" name="tipos" id={index} value={t.nombre} onChange={(e) => handleChecked(e)} className={s.tipoInput}/>
                 {t.nombre}
              </label>
          ))
          }

          </div>
          <h4 className={s.error}>{error.tipos}</h4>
          

        {error.nombre ||
        error.imagen ||
        error.vida ||
        error.ataque ||
        error.defensa ||
        error.velocidad ||
        error.altura ||
        error.tipos ||
        error.peso
        ? null : (
          <button type="submit" className={s.boton}>
            <h3>Crear Pokemon</h3>
          </button>
        )}
        </form>
        </div>
      </div>
    );
  }
  
export default Form;