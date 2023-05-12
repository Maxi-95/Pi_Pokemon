const { Router } = require("express");
const router = Router();
//const { getByTipos } = require("../Controllers/tiposControllers.js");
const { Tipos } = require('../db.js')

router.get("/tipos", async (req, res) => {
    try {
        const results = await Tipos.findAll()
        //const results = await getByTipos()
        
        res.status(200).json({results});
        
   } catch (error) {
        res.status(404).json({Error: error.message })
   }
    
});



module.exports = router;