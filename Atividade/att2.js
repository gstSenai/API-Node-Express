const express = require('express');

const app = express();
const PORT = 3000;

app.get('/greet/:name', async (req, res) => {
    const nome = req.params.name; 

    try {
        res.status(200).json({ message: `Olá, ${nome}!` });
    } catch (error) {
        res.status(500).json({ error: "Erro Inesperado" });
    }
});


app.listen(PORT, () => {
    console.log("PORTA: " + PORT);
})
