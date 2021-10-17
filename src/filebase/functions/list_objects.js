/* List Objects */
const client = require('../config/client');
module.exports =
    async ({
        bucketName
    }) => {
        return new Promise((resolve, reject) => {
            client.listObjects({
                Bucket: bucketName
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }