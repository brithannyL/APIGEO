import {config}from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || b7bz2rajta7mx1fbmq8x-mysql.services.clever-cloud.com
export const BD_DATABASE=process.env.BD_DATABASE|| b7bz2rajta7mx1fbmq8x
export const DB_USER=process.env.DB_USER|| uojrmb0avr5a7qdz
export const DB_PASSWORD=process.env.DB_PASSWORD||S6GrIa1HbRTQongMGvcX
export const DB_PORT=process.env.DB_PORT|| 3306
export const PORT= process.env.PORT|| 3000