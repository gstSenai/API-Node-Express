const express = require('express');
const database = require('./db');  
const Usuario = require('./Usuario'); 

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
        const { nome, data_criacao } = req.body;
        const dataCriacao = data_criacao || new Date().toISOString();

        const novoUsuario = await Usuario.create({
            nome: nome,
            data_criacao: dataCriacao,
        });

        res.status(201).json({
            message: "Usuário Criado com Sucesso",
            dados: novoUsuario
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
});

app.put('/:id', async (req, res) => {
    try {
        const { nome, data_criacao } = req.body;
        const { id } = req.params; 

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const updatedUser = await usuario.update({
            nome: nome || usuario.nome,  
            data_criacao: data_criacao || usuario.data_criacao 
        });

        res.status(200).json({
            message: "Usuário Atualizado com Sucesso",
            dados: updatedUser
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
});

app.delete('/:nome', async (req, res) => {
    try {
        const { nome } = req.params;

        const usuario = await Usuario.findOne({ where: { nome } });

        await usuario.destroy()

        res.status(200).json({
            message: "Usuário Deletado com Sucesso",
            dados: usuario
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
});

app.get('/:nome', async (req, res) => {
    const { nome } = req.params;

    try {
        const usuario = await Usuario.findOne({ where: { nome } });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json({
            message: 'Usuário encontrado com sucesso',
            dados: usuario
        });

    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro inesperado' });
    }
});

app.get('/', async (req, res) => {
    try {
        const usuario = await Usuario.findAll();

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json({
            message: 'Usuário encontrado com sucesso',
            dados: usuario
        });

    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro inesperado' });
    }
});


app.listen(PORT, () => {
    console.log(`Porta: ${PORT}`);
});
