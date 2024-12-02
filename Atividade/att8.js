const express = require('express');

const app = express();
const PORT = 3000;

app.get('/full-name', async(req,res) => {
    const first_name = req.query.first_name;
    const last_name = req.query.last_name;

    try{
        res.status(200).json({full_name : first_name + last_name})
    }catch(error){
        res.status(500).json({error: "Erro Inesperado"})
    }
})

app.listen(PORT, () => {
    console.log("PORTA: " + PORT);
})