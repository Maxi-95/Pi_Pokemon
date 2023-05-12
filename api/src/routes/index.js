const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemones = require('./PokeRout.js');
const getPokeBD = require('./getPokeBd.js');
const namePokemon = require('./getNamePoke.js');
const agregarPokemones = require('./postPoke.js');
const getTipos = require('./getTipos.js');
const idPokemon = require('./getIdPoke.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon', getPokemones)
router.use('/pokemon', getPokeBD)
router.use('/pokemon', namePokemon)
router.use('/crear', agregarPokemones)
router.use('/pokemon', getTipos)
router.use('/pokemon', idPokemon)

module.exports = router;
