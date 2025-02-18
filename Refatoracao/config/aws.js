const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-2', 
  accessKeyId: 'SEU_ACCESS_KEY',
  secretAccessKey: 'SEU_SECRET_KEY'
});

const s3 = new AWS.S3();

module.exports = s3;


