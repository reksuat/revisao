import User from '../models/userModel.js';

export const store = async (req,res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user)
    } catch {
        return res.status(400).json({ error: 'Erro na criação do Usuario'})
    }
};
export const index = async (req,res)  => {
    try {
        const user = await User.find().exec();
        return res.status(200).json(user);
    } catch {
        return res.status(400).json({ error: 'Erro na procura do Usuario'})
    }
}
export const update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: 'Erro na atualização do Usuario' });
    }
};

export const destroy = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Erro na exclusão do Usuario' });
    }
};