const { Tipos } = require('../db.js')
const axios = require('axios')


const getByTipos = async() =>{
    try {
        const getTipos = await axios.get("https://pokeapi.co/api/v2/type")
        const infoTipos = getTipos.data.results
        //console.log(infoTipos.name);
        
        const arrayName = await infoTipos.map((t) => {
            return { nombre: t.name }
            });
        console.log(arrayName);
        
        await Tipos.bulkCreate(arrayName)
        
    
        // const dataTipos = await Tipos.findAll()
        
        // return dataTipos;

    } catch (error) {
        return error;
    }
}

module.exports = {
    getByTipos
};