const express = require('express');

const app = express();
const PORT = 3000;


app.get('/convert-temperature', async(req,res) => {
    const celcius = req.query.celcius;

    try{
        res.status(200).json({fahrenheit: (celcius * 9/5) + 32})
    }catch(error){
        res.status(500).json({error: "Erro Inesperado"});
    }
})

app.listen(PORT, () => {
    console.log("PORTA: " + PORT);
})