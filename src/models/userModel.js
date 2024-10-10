import { type } from 'express/lib/response';
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: Number,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    }
})

export default model('User', userSchema)