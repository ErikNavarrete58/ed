const pool = require('../database');

const historico = {};

historico.sub17global = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_historico_17`");
    const categoria = 'Sub-17 Tabla Historica'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.sub172018 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub17_2018`");
    const categoria = 'Sub-17 Torneo 2018'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.sub172017 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub17_17`");
    const categoria = 'Sub-17 Torneo 2017'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.sub172016 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub17_a16`");
    const categoria = 'Sub-17 Torneo 2016'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}



    module.exports = historico;