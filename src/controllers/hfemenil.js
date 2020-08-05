const pool = require('../database');

const historico = {};

historico.femeglobal = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_historico_femenil_20`");
    const categoria = 'Femenil Tabla Historica'
    const goleo = await pool.query("SELECT * FROM `ed_goleohistorico_femenil`");

    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}


historico.femec19 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_c19`");
    const categoria = 'Clausura Femenil 2019'
    const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_fm_c19`");
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.femea19 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_a19`");
    const categoria = 'Apertura Femenil 2019'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.femec18 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_feme_c18`");
        const categoria = 'Clausura Femenil 2018'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.femea17 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_feme_a17`");
        const categoria = 'Apertura Femenil 2017'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.femec17 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_feme_c17`");
        const categoria = 'Clausura Femeil 2017'
        const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_17`");
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}


historico.femec16 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_feme_16`");
        const categoria = 'Femenil 2016'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}


module.exports = historico;