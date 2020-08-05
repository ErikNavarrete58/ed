const pool = require('../database');

const historico = {};

historico.s23global = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_s23_historica_20`");
    const categoria = 'Sub-23 Tabla Historica'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.s23c19 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_s23_c19`");
    const categoria = 'Sub-23 Clausura 2019'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}





module.exports = historico;