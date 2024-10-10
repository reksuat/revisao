import Book from '../models/bookModel.js';

export const store = async (req,res) => {
    try {
        const book = await Book.create(req.body);
        return res.status(201).json(book)
    } catch {
        return res.status(400).json({ error: 'Erro na criação do Livro'})
    }
};
export const index = async (req,res)  => {
    try {
        const book = await Book.find().exec();
        return res.status(200).json(book);
    } catch {
        return res.status(400).json({ error: 'Erro na procura do Livro'})
    }
}
export const update = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(book);
    } catch (error) {
        return res.status(400).json({ error: 'Erro na atualização do Livro' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Erro na exclusão do Livro' });
    }
};