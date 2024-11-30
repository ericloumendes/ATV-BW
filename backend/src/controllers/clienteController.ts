import { Request, Response } from 'express';
import { Cliente } from '../models/cliente';
import { Telefones } from '../models/telefones';
import { Rgs } from '../models/rgs';

export const clienteController = {
    show: async (req: Request, res: Response) => {
        try{
            const clientes = await Cliente.findAll({include: [Telefones, Rgs]});
            return res.status(200).json(clientes)
        } catch (error){
            return res.status(400).json({error: 'Error fetching clientes!', details: error.message})
        }
    },

    save: async (req: Request, res: Response) => {
        try{
            const cliente = await Cliente.create(req.body);
            return res.status(200).json({message: 'Cliente criado com sucesso!', object: cliente});
        } catch (error){
            return res.status(400).json({error: 'Error while creating cliente!', details: error.message})
        }
    },

    edit: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const [updated] = await Cliente.update(req.body, {
              where: { cli_cod: id }
            });
            if (updated) {
              const updatedCliente = await Cliente.findOne({ where: { cli_cod: id } });
              return res.status(200).json(updatedCliente);
            }
            return res.status(404).json({ error: 'Cliente not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error updating Cliente', details: error.message });
          }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const deleted = await Cliente.destroy({
              where: { cli_cod: id }
            });
            if (deleted) {
              return res.status(200).json(deleted);
            }
            return res.status(404).json({ error: 'Cliente not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error deleting Cliente', details: error.message });
          }
    }
}