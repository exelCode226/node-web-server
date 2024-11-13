import { config } from 'dotenv'

config()

export const envs = {
    PORT: process.env.PORT,
    PUBLIC_PATH: process.env.PUBLIC_PATH
}