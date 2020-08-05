const pool = require('../database');

const historico = {};

historico.mixglobal = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_historico_mixto`");
    const categoria = 'Mixto Tabla Historica'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}

    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

historico.mixc19 = async (req, res) => {
        const vistas = await pool.query("SELECT * FROM `ed_general_mixto_c19`");
        const categoria = 'Mixto Clausura 2019'
        const goleo = {}
        const jornadas = {}
        const Equipos = {}
    
        res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
    
historico.mixc18 = async (req, res) => {
            const vistas = await pool.query("SELECT * FROM `ed_general_mixto_c18`");
            const categoria = 'Mixto Clausura 2018'
            const goleo = {}
            const jornadas = {}
            const Equipos = {}
        
            res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
        
 historico.mixa18 = async (req, res) => {
                const vistas = await pool.query("SELECT * FROM `ed_general_mixto_a18`");
                const categoria = 'Mixto Apertura 2018'
                const goleo = {}
                const jornadas = {}
                const Equipos = {}
            
                res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
      
historico.mix17 = async (req, res) => {
                const vistas = await pool.query("SELECT * FROM `ed_general_mixto_17`");
                const categoria = 'Mixto 2017'
                const goleo = {}
                const jornadas = {}
                const Equipos = {}
            
                res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}
          


module.exports = historico;