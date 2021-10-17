/* Get Object */
const client = require('../config/client');
module.exports =
    async ({
        bucketName,
        objectKey
    }) => {
        return new Promise((resolve, reject) => {
            client.getObject({
                Bucket: bucketName,
                Key: objectKey
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }