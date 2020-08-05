const pool = require('../database');


const equipos = {};

///
///buscar jugadores
///

equipos.id = async (req, res) => { 
    var id = req.query.id;   
const registro = await pool.query("Select * From `Registro Global Heroes` WHERE ID_FB = ?" , [id])
const individuales = await pool.query("Select * From `Premiaciones_Individuales` WHERE ID = ?" , [id])  
const historicogolesfeme = await pool.query("Select * From `ed_goleohistorico_femenil` WHERE ID = ?" , [id])  
const historicogoleslibre = await pool.query("Select * From `ed_goleohistorico_libre` WHERE ID = ?" , [id])  


console.log(id)
console.log(registro)

    res.render('id/jugadores/id',{registro,individuales,historicogolesfeme,historicogoleslibre});
}

equipos.buscarid = async (req, res) => { 
    var id = req.query.id;   
    var idv = "%"+ id + "%";
 
    const registro = await pool.query("SELECT * FROM `Registro Global Heroes` WHERE `Nombres` LIKE ?",[idv])
    console.log(registro)
res.render('id/jugadores/buscarid',{registro,id})}

//
/// buscar equipos
//

equipos.buscarequipo = async (req, res) => { 
    var id = req.query.id;   
    var idv = "%"+ id + "%";
 
    const registro =  await pool.query("SELECT * FROM `Registros Global Equipo Heroes` WHERE `Nombre_Equipo` LIKE ?" , [idv])
console.log(registro)
res.render('id/equipos/buscarequipos',{registro,id})}

//
///fin buscar equipos
//

equipos.idequipo = async (req, res) => { 
    var id = req.query.id; 
    const registro = await pool.query("Select * From `Registros Global Equipo Heroes` WHERE Id_plantel = ?" , [id])  
    const campeones = await pool.query("Select * From `Historial_Campeones` WHERE id_Equipo = ?" , [id])
    const Globales = await pool.query("Select * From `ed_puntoshistoricos` WHERE ID = ?" , [id])
    const Globales23 = await pool.query("Select * From `ed_s23_historica_20` WHERE ID = ?" , [id])
    const Globales20 = await pool.query("Select * From `ED_S20_HISTORICA_2020` WHERE ID = ?" , [id])
    const Femenil = await pool.query("Select * From `ed_general_historico_femenil_20` WHERE ID = ?" , [id])
    const Libre = await pool.query("Select * From `ed_libre_tabla_historica_2020` WHERE ID = ?" , [id])
    const Mixto = await pool.query("Select * From `ed_general_historico_mixto` WHERE ID = ?" , [id])
console.log(id)
console.log(registro)


res.render('id/equipos/equipo',{registro,id,campeones,Globales,Globales23,Globales20,Femenil,Libre,Mixto})}


module.exports = equipos;