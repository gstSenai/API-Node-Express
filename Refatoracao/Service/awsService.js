const S3Repository = require('../Repository/awsRepository');

const uploadFile = async(filePath, bucketName, keyName) => {
    try{
        const result = await S3Repository.uploadFile(filePath, bucketName, keyName);
        return result.Location;
    }catch(error){
        throw new error("Não foi possivel fazer upload")
    }
}

const downloadFile = async(bucketName, keyName, downloadPath) => {
    try{
        const result = await S3Repository.downloadFile(bucketName, keyName, downloadPath);
        return result;
    }catch(error){
        throw new error("Não foi possivel fazer download")
    }
}

module.exports = {
    uploadFile,
    downloadFile
}