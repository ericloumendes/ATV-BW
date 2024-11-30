import { Request, Response } from 'express';
import { Servico } from '../models/servico';
import { ServicoConsumo } from '../models/servico-consumo';

export const servicoController = {
    show: async (req: Request, res: Response) => {
        try{
            const servicos = await Servico.findAll();
            return res.status(200).json(servicos)
        } catch (error){
            return res.status(400).json({error: 'Error fetching servicos!', details: error.message})
        }
    },

    save: async (req: Request, res: Response) => {
        try{
            const servico = await Servico.create(req.body);
            return res.status(200).json({message: 'servico criado com sucesso!', object: servico});
        } catch (error){
            return res.status(400).json({error: 'Error while creating servico!', details: error.message})
        }
    },

    edit: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const [updated] = await Servico.update(req.body, {
              where: { serv_cod: id }
            });
            if (updated) {
              const updatedservico = await Servico.findOne({ where: { serv_cod: id } });
              return res.status(200).json(updatedservico);
            }
            return res.status(404).json({ error: 'servico not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error updating servico', details: error.message });
          }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const deleted = await Servico.destroy({
              where: { serv_cod: id }
            });
            if (deleted) {
              return res.status(200).json(deleted);
            }
            return res.status(404).json({ error: 'servico not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error deleting servico', details: error.message });
          }
    },

    showConsumo: async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const servicosConsumo = await ServicoConsumo.findAll({ where: { serv_cod: id } })

            let consumo = 0

            servicosConsumo.forEach(sv => {
                consumo += sv.consumo_quantidade
            });

            return res.status(200).json(consumo)
        } catch (error){
            return res.status(400).json({ error: 'Error calculating consumo', details: error.message });
        }
    },

    saveConsumo: async (req: Request, res: Response) => {
        try{
            const servicoConsumo = await ServicoConsumo.create(req.body);
            return res.status(200).json({message: 'servico criado com sucesso!', object: servicoConsumo});
        } catch (error){
            return res.status(400).json({error: 'Error while creating servico!', details: error.message})
        }
    }

}