const express = require('express');

const app = express();
const PORT = 3000;

app.get('/multiply', async(req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    try{
        res.status(200).json({result: a * b});
    }catch(error){
        res.status(500).json({error:"Erro inesperado"});
    }
})


app.listen(PORT, () => {
    console.log("PORTA: " + PORT);
})
