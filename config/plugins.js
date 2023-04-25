module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_APIKEY'),
                api_secret: env('CLOUDINARY_SECRETKEY'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    // ...
});