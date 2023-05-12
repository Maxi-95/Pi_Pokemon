const { Pokemon, Tipos } = require('../db.js');
const axios = require("axios");

const getPokemones = async() => {
    const infoApi = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=45")
    const laInfoApi = infoApi.data.results;

    let array = []
    for(let i = 0 ; i < laInfoApi.length ; i++){
        const result = await axios.get(laInfoApi[i].url);
        
        const poke = result.data
        array.push({
            id:poke.id,
            nombre:poke.name,
            imagen: poke.sprites.other.dream_world.front_default,  // url imagen
            vida: poke.stats[0].base_stat,
            ataque: poke.stats[1].base_stat,
            defensa: poke.stats[2].base_stat,
            velocidad: poke.stats[3].base_stat,
            altura: poke.height,
            peso: poke.weight,
            tipo: poke.types.map((t) => t.type.name )
        })
     }
    return array
}

const getDbInfo = async () => {
	const data = await Pokemon.findAll();
  return data
}

const getAllPokemons = async () => {
    const apiInfo = await getPokemones();
    const dbInfo = await getDbInfo();
    const infoTotal = [...apiInfo, ...dbInfo]; 
    // console.log(infoTotal)

    return infoTotal;
}

module.exports = {
    getAllPokemons
}