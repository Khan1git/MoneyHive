import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from './db/connect.js'
import route from './routes/user_routes.js'

const app = express()
const PORT = process.env.PORT | 3000
dotenv.config()

app.use(cors())
app.use(express.json())
connect()

app.use('/api/user', route)

app.listen(PORT, ()=>{
    console.log('Server is running')
})
