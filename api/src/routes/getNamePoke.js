const { Router } = require("express");
const router = Router();
const { getByName } = require("../Controllers/nameControllers.js");
const { getAllPokemons } = require("../Controllers/pokeController.js");

router.get("/", async (req, res) => {
  try {
    const { nombre } = req.query;
   if(nombre){
     const result = await getByName(nombre);
     res.status(200).json(result);
    }else{
      //res.status(404).json({error:"No se encontro el pokemon"});
      const pokemones = await getAllPokemons() 
      res.status(200).send(pokemones)
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
