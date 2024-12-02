const express = require('express');
const database = require('./db');  
const Imagem = require('./Imagem'); 

const app = express();
app.use(express.json());
const PORT = 3000;

(async () => {
    try {
        await database.sync({ force: true });  
        console.log('Tabelas sincronizadas com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar com o banco de dados:', error);
    }
})();


app.post('/', async (req, res) => {
    try {
        const { referencia, data_criacao, titulo } = req.body;
        const dataCriacao = data_criacao || new Date().toISOString();

        const novaImagem = await Imagem.create({
            referencia: referencia,
            data_criacao: dataCriacao,
            titulo: titulo,
        });

        res.status(201).json({
            message: "Imagem Criada com Sucesso",
            dados: novaImagem
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
});

app.put('/:id', async (req, res) => {
    try {
        const { referencia, data_criacao, titulo } = req.body;
        const { id } = req.params; 

        const imagem = await Imagem.findByPk(id);

        if (!imagem) {
            return res.status(404).json({ error: 'Imagem não encontrada' });
        }

        const updatedImagem = await imagem.update({
            referencia: referencia || imagem.referencia,  
            data_criacao: data_criacao || imagem.data_criacao,
            titulo: titulo || imagem.titulo,
        });

        res.status(200).json({
            message: "Imagem Atualizada com Sucesso",
            dados: updatedImagem
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
});

app.delete('/:titulo', async (req, res) => {
    try {
        const { titulo } = req.params;

        const imagem = await Imagem.findOne({ where: { titulo } });

        await imagem.destroy()

        res.status(200).json({
            message: "Imagem Deletada com Sucesso",
            dados: imagem
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
});

app.get('/:titulo', async (req, res) => {
    const { titulo } = req.params;

    try {
        const imagem = await Imagem.findOne({ where: { titulo } });

        if (!imagem) {
            return res.status(404).json({ error: 'Imagem não encontrado' });
        }

        res.status(200).json({
            message: 'Imagem encontrada com sucesso',
            dados: imagem
        });

    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro inesperado' });
    }
});

app.get('/', async (req, res) => {
    try {
        const imagem = await Imagem.findAll();

        if (!imagem) {
            return res.status(404).json({ error: 'Imagem não encontrado' });
        }

        res.status(200).json({
            message: 'Imagem encontrado com sucesso',
            dados: imagem
        });

    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro inesperado' });
    }
});


app.listen(PORT, () => {
    console.log(`Porta: ${PORT}`);
});
