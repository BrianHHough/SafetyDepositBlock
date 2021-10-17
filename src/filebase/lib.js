module.exports = {
    createBucket: require('./functions/create_bucket'),
    deleteObject: require('./functions/delete_object'),
    getObject: require('./functions/get_object'),
    getPresignedUrl: require('./functions/get_presigned_url'),
    listBuckets: require('./functions/list_buckets'),
    listObjects: require('./functions/list_objects'),
    putObject: require('./functions/put_object')
}