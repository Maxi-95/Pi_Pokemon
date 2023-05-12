const { Router } = require("express");
const router = Router();
const { getById } = require("../Controllers/idControllers");


router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await getById(id)
        
        res.status(200).send(result);
        
    } catch (error) {
        res.status(404).send({error: error.menssage});
    }
    
});



module.exports = router;