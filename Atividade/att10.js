const express = require('express');

const app = express();
const PORT = 3000;

app.get('/calculate-age/:birth_year', async(req,res) => {
    const birth_year = req.params.birth_year;
    const current_year = new Date().getFullYear();

    try{
        res.status(200).json({age: current_year - birth_year + " Anos" });
    }catch(error){
        res.status(500).json({error: "Erro inesperado"})
    }
})

app.listen(PORT, () => {
    console.log("PORTA: " + PORT);
})