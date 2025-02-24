const { v4: uuidv4 } = require('uuid');
const S3Repository = require('../Repository/awsRepository');
const path = require('path');

const uploadFile = async(filePath, bucketName) => {

    const fileExtension = path.extname(filePath);
    const keyName = `${uuidv4()}${fileExtension}`;

    try{
        const result = await S3Repository.uploadFile(filePath, bucketName, keyName);
        return {
            url : result.Location,
            keyName : keyName
        }

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