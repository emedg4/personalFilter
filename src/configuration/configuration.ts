export default () => ({
    app : {
        port: process.env.APP_PORT,
        urls: {
            getHeavyFilter: process.env.URL_GETBYHEAVYFILTER
        }
    },
    db: {
        url: process.env.DB_URL,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        database: process.env.DATABASE
    }
})

