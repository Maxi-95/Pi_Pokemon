const { Router } = require("express");
const router = Router();
//const { getByTipos } = require("../Controllers/tiposControllers.js");
const { Pokemon } = require('../db.js')

router.get("/pokeBd", async (req, res) => {
    try {
        const results = await Pokemon.findAll()
        
        res.status(200).json({results});
        
   } catch (error) {
        res.status(404).json({Error: error.message })
   }
    
});



module.exports = router;