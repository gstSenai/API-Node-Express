const S3Service = require('../Service/awsService');


const uploadFile = async(req, res) => {
    try{
        const {filePath, bucketName, keyName} = req.body;
        const fileUrl = await S3Service.uploadFile(filePath, bucketName, keyName)
        res.status(201).json({
                message : "Arquivo Carregado com Sucesso",
                url : fileUrl})
    }catch(error){
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

const downloadFile = async(req, res) => {
    try{
        const {bucketName, keyName, downloadPath} = req.body;
        const result = await S3Service.downloadFile(bucketName, keyName, downloadPath)
        res.status(201).json({
                message : "Arquivo Baixado com Sucesso",
                path : result})
    }catch(error){
        res.status(500).json({ error: error.message || "Erro inesperado" });
    }
}

module.exports = {
    uploadFile,
    downloadFile
}
