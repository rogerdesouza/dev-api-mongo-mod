import mongoose from 'mongoose'
import config from './config'
import env from 'dotenv'

env.config()
const nodeEnv = process.env.NODE_ENV || 'development'
const configuration = config[nodeEnv]
mongoose.connect(
    `mongodb://${configuration.host}:${configuration.port}/${configuration.database}`,
    configuration.options,
    error => {
        if (!error) {
            if (process.env.NODE_ENV !== 'test') {
                console.log('Connection with data base ok')
            }
        } else {
            console.log(error)
        }
    })

export default mongoose