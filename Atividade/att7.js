const express = require('express');

const app = express();
const PORT = 3000;

app.get('/check-parity/:number', async(req,res) => {
    const number = Number(req.params.number);
    let parImpar = "";

    if(number %2 == 0){
        parImpar = "Par";
    }else{
        parImpar = "Ímpar"
    }

    try{
        res.status(200).json({parity: parImpar})
    }catch(error){
        res.status(500).json({error: "Erro inesperado"})
    }
})


app.listen(PORT, () => {
    console.log("PORTA: " + PORT);
})



