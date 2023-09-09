const e = require('cors');
const Usuario = require('../models/Usuarios');

const router = require('express').Router()

//Esto es para obtener todos lo usarios
router.get('/', async (req,res)=>{
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

//un solo usuario
router.get("/:id", async(req, res) =>{
    const { id } = req.params;
    const usario = await Usuario.findByPk(id);
    res.json(usario);
});

//crear un usario
router.post("/", async(req, res) =>{
    const { nombre, email } = req.body;

    //aqui validamos si no existe un dat del usuario
    if (!nombre || !email) {
        
        return res.status(400).json({
        error:"Uno o más campos vacios"
    
        });
    }
    const usuario = await Usuario.create({nombre, email})
    res.json(usuario);
});

module.exports = router;