const { Pokemon, Tipos } = require('../db.js')

const crearPoke = async(nombre, vida, imagen, ataque, defensa, velocidad, altura, peso, tipos) =>{
    //console.log(nombre, vida, imagen, ataque, defensa, velocidad, altura, peso, tipos)
    try {
        const pokeExiste = await Pokemon.findOne({
            where: {
              nombre: nombre,
            }
          });
        if(pokeExiste){
            return "El pokemon ya existe"
        }
        
            let pokemonCreated = await Pokemon.create({
                nombre: nombre,
                imagen: imagen,
                vida: vida,
                ataque: ataque,
                defensa: defensa,
                velocidad: velocidad,
                altura: altura,
                peso: peso,
            })

            tipos.map(async(e) =>{
                let result = await Tipos.findAll({
                where: { nombre: e }
                })
                pokemonCreated.addTipos(result)
            });
            //await Promise.all(promisesTypes);
              
            // const pokemonTypes = await Type.findAll({
            //     where: { name: types }
            //   })
            
            //   pokemonCreated.addType(pokemonTypes)
            //   return res.send('Pokemon created successfuly')
            // })

            
            let resultPokemon = await Pokemon.findAll({
                where:{ 
                    nombre: nombre
                 },
                
                include: [{
                        model: Tipos,
                        attributes: ['id', 'nombre']
                    }]
                });

                
                return resultPokemon
            
    } catch (error) {
        return error;
    }
}

module.exports = {
    crearPoke
};