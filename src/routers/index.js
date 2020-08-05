var express = require('express');
var router = express.Router();
const pool = require('../database');

const {libre,femenil,mixta,sub23,sub20,Historica,Mayores,inferiores,global,Jugadores,Equipos,actual,inicio} = require('../controllers/index')
const {buscarid,id,idequipo,buscarequipo}  = require('../controllers/equipos')

router.route('/')
  .get(inicio)
  
  router.route('/libre')
  .get(libre)
  
router.route('/femenil')
  .get(femenil)


router.route('/mixta')
  .get(mixta)
  
router.route('/sub23')
  .get(sub23)
  
router.route('/sub20')
  .get(sub20)

  router.route('/Historica')
  .get(Historica)

  router.route('/Jugadores')
  .get(Jugadores)

  router.route('/Equipos')
  .get(Equipos)

  router.route('/2020')
  .get(actual)

  router.route('/Mayores')
  .get(Mayores)

  router.route('/inferiores')
  .get(inferiores)

  router.route('/global')
  .get(global)
  

//// buscar jugador

router.route('/id')
  .get(id)

  router.route('/buscarid')
  .get(buscarid)

//// buscar equipo

  router.route('/equipo')
  .get(idequipo)

  router.route('/buscarequipo')
  .get(buscarequipo)


module.exports = router;