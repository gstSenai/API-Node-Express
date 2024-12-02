// Importa as dependencias
const express = require('express');
const axios = require('axios');

const app = express()
app.use(express.json());
const PORT = 3000;

app.get('/pessoa', async(req, res) => {
    const {nome,senha} = req.query;
    
    try{
        res.status(200).json({ message: 'Sucesso', dados: { nome, senha } });
        
    }catch(error){
        res.status(500).json({error: 'Erro Inesperado'})
    }
});

app.post('/', async(req, res) => {
    const { nome, senha } = req.body;

    res.status(200).json({ message: 'Sucesso', dados: { nome, senha } });
})

app.listen(PORT, ()=> {
    console.log(`PORTA : ${PORT}`);
})