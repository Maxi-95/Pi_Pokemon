const { Pokemon, Tipos } = require('../db.js');
const axios = require('axios')
const getByName = async(nombre) =>{
    try {
        const name = nombre[0].toUpperCase() + nombre.substring(1)
        
        const db = await Pokemon.findOne({
            where: {
              nombre: name,
            },
            include: Tipos,
          });
         
          if (db) {

            const pokemonDb = [
              {
                id: db.id,
                nombre: db.nombre,
                img: db.imagen,
                vida: db.vida,
                ataque: db.ataque,
                defensa: db.defensa,
                velocidad: db.velocidad,
                altura: db.altura,
                peso: db.peso,
                tipos:  db.tipos.map((t) => t.nombre),
              },
            ];
            return pokemonDb;
        }else{
            const name2 = name.toLowerCase();
            
            const array = [];
    
            const nameApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name2}`)
            
            array.push({
                nombre:nameApi.data.name,
                imagen: nameApi.data.sprites.other.dream_world.front_default,  // url imagen
                vida: nameApi.data.stats[0].base_stat,
                ataque: nameApi.data.stats[1].base_stat,
                defensa: nameApi.data.stats[2].base_stat,
                velocidad: nameApi.data.stats[3].base_stat,
                altura: nameApi.data.height,
                peso: nameApi.data.weight,
                tipo: nameApi.data.types.map((t) => {
                    return {
                        name: t.type.name
                    }
                })
            })           
                return array;
        }       
    } catch (error) {
        return error;
    }
}

module.exports = {
    getByName
};