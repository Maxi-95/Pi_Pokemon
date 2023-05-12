import axios from 'axios';

import {
    GET_TIPOS,
    GET_POKEMONS,
    FILTER_TIPOS,
    ORDER_ATAQUE,
    ORDER_NOMBRE,
    GET_BY_NOMBRE,
    GET_BY_DETALLE,
    GET_CREADOS,
    CREATE_POKE
    
} from "./constantes.jsx";

export const getPokemones = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/pokemon/poke"); 
        const info = result.data.results;
        //console.log(info);
        return dispatch({ type:GET_POKEMONS, payload:info })
    }
}

export const getCreados = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/pokemon/pokeBd"); 
        const info = result.data.results;
        console.log(info);
        return dispatch({ type:GET_CREADOS, payload:info })
    }
}

export const getById = (id) => {
    return async function(dispatch){
                                           
        const result = await axios(`http://localhost:3001/pokemon/${id}`); 
        const info = result.data;
        console.log(info);
        
        return dispatch({ type:GET_BY_DETALLE, payload:info })
    }
}

export const getTipos = () => {
    return async function(dispatch){
                                           
        const result = await axios("http://localhost:3001/pokemon/tipos"); 
        const info = result.data.results;
        //console.log(result);
        return dispatch({ type:GET_TIPOS, payload:info })
    }
}

export const createPokemon = (input) => {
    return async function(dispatch){  
        const result = await axios.post("http://localhost:3001/crear/agregar", input); 
        const info = result.data.results;
        return dispatch({ type:CREATE_POKE, payload:info })
    }
}

export function getByNombre(name){
    return async function(dispatch){
        try{
            let response = await axios(`http://localhost:3001/pokemon?nombre=${name}`);
            // console.log([response.data[0]] );
            // console.log(response.data[0] );
            
            return dispatch({
                type: GET_BY_NOMBRE,
                payload:[response.data[0]] 
            });
        }catch{
            //console.log('Pokemon Not Found');
            alert('Pokemon Not Found');
        };
    };
};

export const ordenByNombre = (payload) => {
       
    return { type: ORDER_NOMBRE, payload }
}
export const ordenByAtaque = (payload) => {
       
    return { type: ORDER_ATAQUE, payload }
}
export const filtrarTipos = (filtrado) => {
    console.log(filtrado)
    
    return { type: FILTER_TIPOS, payload : filtrado }  
}



