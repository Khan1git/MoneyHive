import mongoose from 'mongoose'

export const connect = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('connectd to the database successfully')
    })

}