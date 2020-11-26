import env from 'dotenv'
env.config()

const config = {
    development: {
        host: process.env.DB_HOST || '0.0.0.0',
        port: process.env.DB_PORT || '27017',
        database: process.env.DB_NAME || 'mod',
        options: { useNewUrlParser: true, useUnifiedTopology: true }
    },
    test: {
        host: process.env.DB_HOST || '0.0.0.0',
        port: process.env.DB_PORT || '27017',
        database: process.env.DB_NAME || 'mod_test',
        options: { useNewUrlParser: true, useUnifiedTopology: true }
    },
    production: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        options: { useNewUrlParser: true, useUnifiedTopology: true }
    }
}

export default config
