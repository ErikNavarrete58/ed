var express = require('express');
var router = express.Router();
const pool = require('../database');

const {libre20,global,libre2019,librec2018,librea2018,librec2017,librea2017,librec2016,librec2015,librea2015,libre2014}  = require('../controllers/historicoslibre')

const {femeglobal,femec19,femea19,femec18,femea17,femec17,femec16}  = require('../controllers/hfemenil')

const {mixglobal,mixc19,mixc18,mixa18,mix17}  = require('../controllers/hmixto')

const {s23global,s23c19}  = require('../controllers/hs23')

const {sub20global,sub20i19,sub20a19,sub20c19,sub20c18}  = require('../controllers/hs20');

const {sub17global,sub172018,sub172017,sub172016}  = require('../controllers/hs17');

//
///Libre
//

router.route('/libreglobal')
.get(global)

router.route('/edlibrea2019')
.get(libre2019)

router.route('/edlibrec2018')
.get(librec2018)

router.route('/edlibrea2018')
.get(librea2018)

router.route('/edlibrec2017')
.get(librec2017)

router.route('/edlibrea2017')
.get(librea2017)

router.route('/edlibrec2016')
.get(librec2016)

router.route('/edlibrec2015')
.get(librec2015)

router.route('/edlibrea2015')
.get(librea2015)

router.route('/edlibre2014')
.get(libre2014)

//
///Fin Libre
//

//
///Femenil
//
router.route('/femeglobal')
.get(femeglobal)

router.route('/edfemenilc19')
.get(femec19)

router.route('/edfemenila19')
.get(femea19)

router.route('/edfemenilc18')
.get(femec18)

router.route('/edfemenila17')
.get(femea17)

router.route('/edfemenilc17')
.get(femec17)

router.route('/edfemenil16')
.get(femec16)

//
///Fin Femenil
//

//
/// Mixto 
//
router.route('/mixtaglobal')
.get(mixglobal)

router.route('/edmixtoc19')
.get(mixc19)

router.route('/edmixtoc18')
.get(mixc18)

router.route('/edmixtoa18')
.get(mixa18)

router.route('/edmixto17')
.get(mix17)

//
/// Fin Mixto 
//

//
/// Sub-23 
//
router.route('/sub23global')
.get(s23global)

router.route('/eds23c19')
.get(s23c19)
//
/// Fin Sub-23 
//

//
/// Sub-20 
//
router.route('/sub20global')
.get(sub20global)

router.route('/eds20i19')
.get(sub20i19)

router.route('/eds20a19')
.get(sub20a19)

router.route('/eds20c19')
.get(sub20c19)

router.route('/eds20c18')
.get(sub20c18)

//
/// Fin Sub-20 
//

//
///  Sub-17
//
router.route('/sub17global')
.get(sub17global)

router.route('/eds1718')
.get(sub172018)


router.route('/eds1717')
.get(sub172017)

router.route('/eds17a16')
.get(sub172016)

//
/// Fin Sub-17 
//


module.exports = router;