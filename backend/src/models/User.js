import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true 
    },
    Pno: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        requried: true
    }

}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User