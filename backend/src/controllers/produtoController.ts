import { Request, Response } from 'express';
import { Produto } from '../models/produto';
import { ProdutoConsumo } from '../models/produto-consumo';

export const produtoController = {
    show: async (req: Request, res: Response) => {
        try{
            const produtos = await Produto.findAll();
            return res.status(200).json(produtos)
        } catch (error){
            return res.status(400).json({error: 'Error fetching produtos!', details: error.message})
        }
    },

    save: async (req: Request, res: Response) => {
        try{
            const produto = await Produto.create(req.body);
            return res.status(200).json({message: 'produto criado com sucesso!', object: produto});
        } catch (error){
            return res.status(400).json({error: 'Error while creating produto!', details: error.message})
        }
    },

    edit: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const [updated] = await Produto.update(req.body, {
              where: { prod_cod: id }
            });
            if (updated) {
              const updatedproduto = await Produto.findOne({ where: { prod_cod: id } });
              return res.status(200).json(updatedproduto);
            }
            return res.status(404).json({ error: 'produto not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error updating produto', details: error.message });
          }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const deleted = await Produto.destroy({
              where: { prod_cod: id }
            });
            if (deleted) {
              return res.status(200).json(deleted);
            }
            return res.status(404).json({ error: 'produto not found' });
          } catch (error) {
            return res.status(400).json({ error: 'Error deleting produto', details: error.message });
          }
    },

    showConsumo: async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            if (!id) {
              return res.status(400).json({ error: 'Invalid ID parameter' });
            }
            const produtosConsumo = await ProdutoConsumo.findAll({ where: { prod_cod: id } })

            let consumo = 0

            produtosConsumo.forEach(sv => {
                consumo += sv.consumo_quantidade
            });

            return res.status(200).json(consumo)
        } catch (error){
            return res.status(400).json({ error: 'Error calculating consumo', details: error.message });
        }
    },

    saveConsumo: async (req: Request, res: Response) => {
        try{
            const produtoConsumo = await ProdutoConsumo.create(req.body);
            return res.status(200).json({message: 'produto criado com sucesso!', object: produtoConsumo});
        } catch (error){
            return res.status(400).json({error: 'Error while creating produto!', details: error.message})
        }
    }

}