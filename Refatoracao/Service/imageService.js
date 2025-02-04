const imageModels = require("../Models/imageModels");

const createImage = async(referencia, data_criacao, titulo) => {
    const dataCriacao = data_criacao || new Date().toISOString();

    return await imageModels.create({
        referencia, data_criacao: dataCriacao, titulo
    });
}

const findImageByTitle = async(titulo) => {
    return await imageModels.findOne({ where: { titulo } });
}

const findAllImage = async() => {
    return await imageModels.findAll();
}

const updateImageById = async(id, referencia, data_criacao, titulo) => {
    const imagem = await imageModels.findByPk(id);

    if(!imagem) throw new Error('Imagem não encontrada')

    return await imageModels.update({
        referencia: referencia || imagem.referencia, 
        data_criacao: data_criacao || imagem.data_criacao, 
        titulo: titulo || imagem.data_criacao
    })
}

const deleteImageById = async(titulo) => {
    const imagem = await imageModels.findOne({ where: { titulo } });
    
    if(!imagem) throw new Error('Imagem não Encontrada')

    await imagem.destroy();
    return imagem;
}

module.exports = {
    createImage,
    findImageByTitle,
    findAllImage,
    updateImageById,
    deleteImageById
}