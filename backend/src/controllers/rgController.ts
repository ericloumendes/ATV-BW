import { Request, Response } from 'express';
import { Rgs } from '../models/rgs';



export const rgController = {
    save: async (req: Request, res: Response) => {
        try{
            const rg = await Rgs.create(req.body);
            return res.status(200).json({message: 'rg criado com sucesso!', object: rg});
        } catch (error){
            return res.status(400).json({error: 'Error while creating rg!', details: error.message})
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const deleted = await Rgs.destroy({
              where: { rg_cod: id }
            });
            if (deleted) {
              return res.status(200).json(deleted);
            }
            return res.status(404).json({ error: 'rg not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error deleting rg', details: error.message });
          }
    }
}