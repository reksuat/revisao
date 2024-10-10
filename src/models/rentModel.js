import { Schema, model } from 'mongoose';

const rentSchema = new Schema({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    idLivro: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    dataAluguel: {
        type: Date,
        required: true
    },
    dataDevolucao: {
        type: Date,
        required: true
    }
});

export default model('Rent', rentSchema);