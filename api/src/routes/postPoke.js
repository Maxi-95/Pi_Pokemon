const { Router } = require("express");
const router = Router();
const { crearPoke } = require("../Controllers/postControllers.js");

 
router.post("/agregar", async (req, res) => {
    try {
        const { nombre, vida, imagen, ataque, defensa, velocidad, altura, peso, tipos } = req.body;
        if( 
        !vida ||  
        !ataque || 
        !defensa || 
        !velocidad || 
        !altura || 
        !peso 
         ){
          res.status(404).json({Error: "Los datos tienen que ser numericos"})
        }
        if(!nombre){
          res.status(404).json({Error: "El Nombre es obligatorio"})
        }
        const pokeCreado = await crearPoke(nombre, vida, imagen, ataque, defensa, velocidad, altura, peso, tipos)
        
        res.status(200).send(pokeCreado);
         
   } catch (error) {
        res.status(404).json({Error: error.message })
   }
    
});



module.exports = router;