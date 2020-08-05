const pool = require('../database');


const categorias = {};

categorias.inicio = (req, res) => { res.render('index');}


categorias.libre = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_a20`");
    const categoria = 'Apertura Libre'
    const goleo = {}
    const jornadas = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a20` ORDER BY `Jornada` DESC");
    const Equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a20` ORDER BY `Equipo` DESC , `Jornada` DESC ");

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

categorias.femenil = async (req, res) => { 
    const vistas = await pool.query("SELECT * FROM `ed_general_fm_a20`");
    const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_fm_a20`");
    const jornadas = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a20` ORDER BY `Jornada` DESC");
    const Equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a20` ORDER BY `Equipo` DESC , `Jornada` DESC ");

    const categoria = 'Apertura Femenil'
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

categorias.mixta = async (req, res) => { 
        const vistas = await pool.query("SELECT * FROM `tablageneral_mix_ed_20a`");
        const categoria = 'Apertura Mixto'
            const goleo = {}
            const jornadas = await pool.query("SELECT * FROM `futbolce_zon58`.`jor_ed_mix_a20` ORDER BY `Jornada` DESC");
            const Equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`jor_ed_mix_a20` ORDER BY `Equipolc` DESC , `Jornada` DESC ");

        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}  
        
 categorias.sub23 = async (req, res) => { 
            const vistas = await pool.query("SELECT * FROM `ed_general_sub23_a20`");
            const categoria = 'Apertura Sub-23'
            const goleo = await pool.query("SELECT * FROM `ed_goleojor_sub23_a20` ORDER BY `goles` DESC");
            const jornadas = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub23_a20` ORDER BY `Jornada` DESC");
            const Equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub23_a20` ORDER BY `Equipo` DESC , `Jornada` DESC ");

            res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}  

 categorias.sub20 = async (req, res) => { 
                const vistas = await pool.query("SELECT * FROM `ed_general_sub20_a20`");
                const categoria = 'Apertura Sub-20'
                const goleo = await pool.query("SELECT * FROM `ed_goleojor_sub20_a20`");
                const jornadas = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub20_a20` ORDER BY `Jornada` DESC");
                const Equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub20_a20` ORDER BY `Equipo` DESC , `Jornada` DESC ");

                res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}  


categorias.Historica = async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `FB_historica_global_20`");
    const categoria = 'Historica Copa FB'
    res.render('historica/menu',{vistas,categoria});

}

categorias.Mayores = async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `ED_HISTORICOS_MAYORES`");
    const categoria = 'Historica Dominical'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}  



categorias.inferiores = async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `ED_HISTORICO_INFERIORES`");
    const categoria = 'Historica Sabatina'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}  

    categorias.global = async (req, res) => {

        const vistas = await pool.query("SELECT * FROM `ed_puntoshistoricos`");
        const categoria = 'Historica '
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}  
    


categorias.Jugadores = (req, res) =>  {
    const categoria = 'id'
    const buscar = 'buscarid'
    const texto = '(Jugador)'

    res.render('id/forbuscar',{categoria,buscar,texto});

}

categorias.Equipos = (req, res) =>  {
    const categoria = 'equipo'
    const buscar = 'buscarequipo'
    const texto = '(Equipo)'

    res.render('id/forbuscar',{categoria,buscar,texto});

}



categorias.actual = (req, res) => { res.send('Actual   ');}


module.exports = categorias;