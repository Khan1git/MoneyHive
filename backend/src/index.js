import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from './db/connect.js'
import route from './routes/user_routes.js'
import finance_route from './routes/finance_routes.js'

const app = express()
// dotenv.config()
dotenv.config({ path: './.env' });
const PORT = process.env.PORT | 3000

app.use(cors())
connect()
app.use(express.json())

app.use('/api/user', route)
app.use('/api/finance', finance_route)

app.listen(PORT, ()=>{
    console.log('Server is running')
})
