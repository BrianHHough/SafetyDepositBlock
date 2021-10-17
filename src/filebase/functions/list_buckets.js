/* List Buckets */
const client = require('../config/client');
module.exports =
    async () => {
        return new Promise((resolve, reject) => {
            client.listBuckets(
                (err, data) => {
                    err ? reject(err) : resolve(data);
                });
        });
    }