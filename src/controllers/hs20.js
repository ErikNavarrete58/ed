const pool = require('../database');

const historico = {};

historico.sub20global = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ED_S20_HISTORICA_2020`");
    const categoria = 'Sub-20 Tabla Historica'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

    historico.sub20i19 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_s20_I19`");
        const categoria = 'Sub-20 Torneo de Invierno'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.sub20a19 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub20_c10`");
    const categoria = 'Sub-20 Apertura'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.sub20c19 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub20_c10`");
    const categoria = 'Sub-20 Clausura 2019'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.sub20c18 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_s20_c18`");
    const categoria = 'Sub-20 Clausura 2018'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}



module.exports = historico;