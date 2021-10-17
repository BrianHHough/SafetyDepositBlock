const aws = require('aws-sdk');
module.exports = new aws.S3({
    endpoint: 'https://s3.filebase.com',
    signatureVersion: 'v4'
});