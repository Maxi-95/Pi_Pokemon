const {Router} = require('express');
const router = Router();
const {getAllPokemons} = require('../Controllers/pokeController.js')

router.get('/poke', async (req,res) => {
     try {
          const results = await getAllPokemons()
     
          res.status(200).json({results});
          
     } catch (error) {
          res.status(404).json({Error: error.message })
     }
});


module.exports = router; 