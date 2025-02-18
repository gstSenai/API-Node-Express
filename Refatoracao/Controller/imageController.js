const imageService = require("../Service/imageService");

const addImage = async (req, res) => {
    try {
        const { referencia, data_criacao, titulo, id_usuario } = req.body;
        const novaImagem = await imageService.createImage(referencia, data_criacao, titulo, id_usuario)

        res.status(201).json({
            message: "Imagem Criada com Sucesso",
            dados: novaImagem
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

const getImage = async (req, res) => {
    const { titulo } = req.params;

    try {
        const imagem = await imageService.findImageByTitle(titulo);

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
}

const getAllImage = async (req, res) => {
    try {

        const imagens = await imageService.findAllImage();

        if (!imagens || imagens.length === 0) {
            return res.status(404).json({ error: 'Nenhuma Imagem Encontrada' });
        }

        res.status(200).json({
            message: 'Imagem encontrado com sucesso',
            dados: imagens
        });

    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro inesperado' });
    }
}

const putImage = async (req, res) => {
    try {
        const { referencia, data_criacao, titulo } = req.body;
        const { id } = req.params;

        const updatedImagem = await imageService.updateImageById(id,referencia,data_criacao,titulo);

        if (!updatedImagem) {
            return res.status(404).json({ error: 'Imagem não encontrado' });
        }

        res.status(200).json({
            message: "Imagem Atualizada com Sucesso",
            dados: updatedImagem
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

const deleteImage = async (req, res) => {
    try {
        const { titulo } = req.params;
        
        const imagemDelete = await imageService.deleteImageById(titulo);

        if (!imagemDelete) {
            return res.status(404).json({ error: 'Imagem não encontrado' });
        }

        res.status(200).json({
            message: "Imagem Deletada com Sucesso",
            dados: imagemDelete
        });
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

module.exports = {
    addImage,
    getImage,
    getAllImage,
    putImage,
    deleteImage
}