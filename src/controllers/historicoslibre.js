const pool = require('../database');

const historico = {};

historico.libre2019 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_c19`");
    const categoria = 'Apertura Libre 2019'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

    historico.librec2018 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_libre_c18`");
        const categoria = 'Clausura Libre 2018'
        const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_c18`");
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
    
historico.librea2018 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_libre_a18`");
        const categoria = 'Apertura Libre 2018'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

 historico.librec2017 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_libre_c17`");
        const categoria = 'Clausura Libre 2017'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
           
historico.librea2017 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_libre_a17`");
        const categoria = 'Apertura Libre 2017'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}


historico.librec2016 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_libre_c16`");
        const categoria = 'Clausura Libre 2016'
        const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_libre_a16`");
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
           
 historico.librec2015 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_libre_c15`");
        const categoria = 'Clausura Libre 2015'
        const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_librec15`");
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
           
 historico.librea2015 = async (req, res) => {
            const vistas = await pool.query("SELECT * FROM `librea2015`");
            const categoria = 'Apertura Libre 2015'
            const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_libre_a15`");
            const jornadas = {}
            const Equipos = {}
        
            res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
               
historico.libre2014 = async (req, res) => {
            const vistas = await pool.query("SELECT * FROM `ed_general_libre_14`");
            const categoria = 'Libre torneo 2014'
            const goleo = await pool.query("SELECT * FROM `ed_tablagoleo_libre_14`");
            const jornadas = {}
            const Equipos = {}
        
            res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
               
 historico.global = async (req, res) => {
            const vistas = await pool.query("SELECT * FROM `ed_libre_tabla_historica_2020`");
            const categoria = 'Libre tabla Historica'
            const goleo = await pool.query("SELECT * FROM `ed_goleohistorico_libre`");
            const jornadas = {}
            const Equipos = {}
        
            res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
               

historico.libre20 = async (req, res) => {
            const vistas = await pool.query("SELECT * FROM `ed_general_libre_14`");
            const categoria = 'Apertura Libre'
            const goleo = {}
            const jornadas = {}
            const Equipos = {}
        
            res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
               


    module.exports = historico;