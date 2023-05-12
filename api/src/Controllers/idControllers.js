const { Pokemon, Tipos } = require('../db.js')
const axios = require('axios')


const getById = async(id) =>{
    try {
        // const idApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        // if(idApi){
        //     const idApi2 = idApi.data;
        //     const pokeIdApi = {
        //         id: idApi2.id,
        //         nombre: idApi2.name,
        //         imagen: idApi2.sprites.other.dream_world.front_default,  // url imagen
        //         vida: idApi2.stats[0].base_stat,
        //         ataque: idApi2.stats[1].base_stat,
        //         defensa: idApi2.stats[2].base_stat,
        //         velocidad: idApi2.stats[3].base_stat,
        //         altura: idApi2.height,
        //         peso: idApi2.weight,
        //         tipo: idApi2.types.map((t) => {
        //             return {
        //                 nombre: t.type.name
        //             }
        //         })
        //   }
        //   console.log();
        //   return pokeIdApi

        // }
      
    } catch (error) {}
    try {
        const db = await Pokemon.findByPk(id, { include: Tipos })

            const pokeId = {
                id: db.id,
                nombre: db.nombre,
                img: db.imagen,
                vida: db.vida,
                ataque: db.ataque,
                defensa: db.defensa,
                velocidad: db.velocidad,
                altura: db.altura,
                peso: db.peso,
                tipo: db.Tipos.map((t) => t.nombre),
            }
            console.log(pokeId);
            return pokeId;
    } catch (error) {
        return error
    }
}

module.exports = {
    getById
};