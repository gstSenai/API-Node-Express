const userService = require("../Service/userService");

const addUser = async(req,res) => {
    try {
        const { nome, data_criacao } = req.body;

        const novoUsuario = await userService.createUser(nome,data_criacao);
        
        res.status(201).json({
            message: "Usuário Criado com Sucesso",
            dados: novoUsuario
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

const getUser = async(req,res) => {
    const { nome } = req.params;

    try {
        const usuario = await userService.findUserByTitle(nome);

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
}

const getAllUsers = async(req,res) => {
    try {
        const usuario = await userService.findAllUser();

        if (!usuario || usuario.length === 0) {
            return res.status(404).json({ error: 'Nenhum Usuário encontrado' });
        }

        res.status(200).json({
            message: 'Usuário encontrado com sucesso',
            dados: usuario
        });

    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro inesperado' });
    }
}

const putUser = async(req,res) => {
    try {
        const { nome, data_criacao } = req.body;
        const { id } = req.params; 

        const updatedUser = await userService.updateUserById(id,nome,data_criacao);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json({
            message: "Usuário Atualizado com Sucesso",
            dados: updatedUser
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

const deleteUser = async(req,res) => {
    try {
        const { nome } = req.params;

        const usuario = await userService.deleteUserById(nome);

        res.status(200).json({
            message: "Usuário Deletado com Sucesso",
            dados: usuario
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

module.exports = {
    addUser,
    getUser,
    getAllUsers,
    putUser,
    deleteUser
};