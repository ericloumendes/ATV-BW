import { Request, Response } from 'express';
import { Telefones } from '../models/telefones';


export const telefoneController = {
    save: async (req: Request, res: Response) => {
        try{
            const telefone = await Telefones.create(req.body);
            return res.status(200).json({message: 'Telefone criado com sucesso!', object: telefone});
        } catch (error){
            return res.status(400).json({error: 'Error while creating telefone!', details: error.message})
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const deleted = await Telefones.destroy({
              where: { tel_cod: id }
            });
            if (deleted) {
              return res.status(200).json(deleted);
            }
            return res.status(404).json({ error: 'telefone not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error deleting telefone', details: error.message });
          }
    }
}