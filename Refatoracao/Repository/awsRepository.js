const s3 = require('../config/aws')

const fs = require('fs');

const uploadFile = async(filePath, bucketName, keyName) => {
    const fileContent = fs.readFileSync(filePath);
    
    const params = {
        Bucket: bucketName,
        Key: keyName,
        Body: fileContent
    };

    return s3.upload(params).promise();
}

const downloadFile = async(bucketName, keyName, downloadPath) => {
    const params = {
        Bucket: bucketName,
        Key: keyName
    };
    
    const file = fs.createWriteStream(downloadPath);
        return new Promise((resolve, reject) => {
            s3.getObject(params).createReadStream()
                .pipe(file)
                .on('close', () => resolve(downloadPath))
                .on('error', (err) => reject(err));
        });
}

module.exports = {
    uploadFile,
    downloadFile
}