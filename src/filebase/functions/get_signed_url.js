/* Get Pre-Signed URL */
const client = require('../config/client');
module.exports =
    async ({
        bucketName,
        objectKey,
        expiresIn
    }) => {
        return new Promise((resolve, reject) => {
            client.getSignedUrl('getObject', {
                Bucket: bucketName,
                Key: objectKey,
                Expires: expiresIn || 60 * 10
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }
