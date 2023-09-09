//creando api
const express = require('express');
const cors = require('cors');
const usuraios = require('./routes/usuarios');
const db = require('./db/database');
const app = express();
const port = process.env.PORT || 3030;

(async () =>{

    try {
        await db.authenticate()
        await db.sync();
        console.log("conectandos a la base de datos")
    } catch (error) {
        throw new Error(error)
    }
})()


app.use(express.json());//resivir información
app.use(cors());//habilata que otra app puedan hacer peticiones al esta api
app.use("/usuarios", usuraios);

app.listen(port, () => {
    console.log("servidor ejecutandose en el puerto:", port)
})