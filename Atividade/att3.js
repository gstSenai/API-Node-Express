const express = require('express');

const app = express();
const PORT = 3000;

app.get('/sum', async(req,res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    try {
        res.status(200).json({ result: a + b });
    } catch (error) {
        res.status(500).json({ error: "Erro Inesperado" });
    }

})

app.listen(PORT, () => {
    console.log("PORTA: " + PORT);
})
