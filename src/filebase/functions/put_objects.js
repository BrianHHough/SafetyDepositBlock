/* Put Object */
const mime = require('mime');
const fs = require('fs/promises');
const client = require('../config/client');
module.exports =
    async ({
        bucketName,
        objectKey,
        sourceFilepath
    }) => {
        const file = await fs.readFile(sourceFilepath);
        return new Promise((resolve, reject) => {
            client.putObject({
                Bucket: bucketName,
                Key: objectKey,
                Body: file,
                ContentType: mime.getType(sourceFilepath)
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }