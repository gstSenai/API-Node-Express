const userModels = require("../Models/userModels");

const createUser = async (nome, data_criacao) => {
    const dataCriacao = data_criacao || new Date().toISOString();

    return await userModels.create({
        nome: nome,
        data_criacao: dataCriacao,
    });
}

const findUserByTitle = async (nome) => {
    return await userModels.findOne({ where: { nome } });
}

const findAllUser = async () => {
    return await userModels.findAll();
}

const updateUserById = async (id, referencia, data_criacao, titulo) => {
    const user = await imageModels.findByPk(id);

    if (!user) throw new Error('Usuario não encontrada')

    return await userModels.update({
        referencia: referencia || user.referencia,
        data_criacao: data_criacao || user.data_criacao,
        titulo: titulo || user.data_criacao
    })
}

const deleteUserById = async (nome) => {
    const user = await userModels.findOne({ where: { nome } });

    if (!user) throw new Error('Usuario não Encontrada')

    await user.destroy();
    return user;
}

module.exports = {
    createUser,
    findUserByTitle,
    findAllUser,
    updateUserById,
    deleteUserById
}