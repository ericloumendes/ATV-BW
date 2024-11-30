import { Request, Response } from 'express';
import { Cliente } from '../models/cliente';
import { ServicoConsumo } from '../models/servico-consumo';
import { ProdutoConsumo } from '../models/produto-consumo';
import { Produto } from '../models/produto';
import { Servico } from '../models/servico';

export const relatoriosController = {
    ClientesMaisConsumoProdutos: async (req: Request, res: Response) => {
       const clientes = await Cliente.findAll();

       const produtoConsumo = await ProdutoConsumo.findAll();

       let data = []

       clientes.forEach(c => {
        let d = {
            cli_cod: c.cli_cod,
            cli_nome: c.cli_nome,
            cli_consumo: 0
        }
        data.push(d)
       })

       produtoConsumo.forEach(p => {
        data.forEach(d => {
            if (d.cli_cod == p.cli_cod){
                d.cli_consumo += p.consumo_quantidade
            }
        })
       })

       data.sort((a, b) => b.cli_consumo - a.cli_consumo)

       let finalData = []

       for (let i = 0; i <= 9; i++){
        finalData.push(data[i])
       }

       return res.status(200).json(finalData);

    },

    ClientesMaisConsumoServicos: async (req: Request, res: Response) => {
        const clientes = await Cliente.findAll();
 
        const servicoConsumo = await ServicoConsumo.findAll();
 
        let data = []
 
        clientes.forEach(c => {
         let d = {
             cli_cod: c.cli_cod,
             cli_nome: c.cli_nome,
             cli_consumo: 0
         }
         data.push(d)
        })
 
        servicoConsumo.forEach(p => {
         data.forEach(d => {
             if (d.cli_cod == p.cli_cod){
                 d.cli_consumo += p.consumo_quantidade
             }
         })
        })
 
        data.sort((a, b) => b.cli_consumo - a.cli_consumo)
 
        let finalData = []

        for (let i = 0; i <= 9; i++){
         finalData.push(data[i])
        }
 
        return res.status(200).json(finalData);
 
     },

     ClientesMenosConsumoProdutos: async (req: Request, res: Response) => {
        const clientes = await Cliente.findAll();
 
        const produtoConsumo = await ProdutoConsumo.findAll();
 
        let data = []
 
        clientes.forEach(c => {
         let d = {
             cli_cod: c.cli_cod,
             cli_nome: c.cli_nome,
             cli_consumo: 0
         }
         data.push(d)
        })
 
        produtoConsumo.forEach(p => {
         data.forEach(d => {
             if (d.cli_cod == p.cli_cod){
                 d.cli_consumo += p.consumo_quantidade
             }
         })
        })
 
        data.sort((a, b) => a.cli_consumo - b.cli_consumo)
 
        let finalData = []
 
        for (let i = 0; i <= 9; i++){
         finalData.push(data[i])
        }
 
        return res.status(200).json(finalData);
 
     },

     ClientesMenosConsumoServicos: async (req: Request, res: Response) => {
        const clientes = await Cliente.findAll();
 
        const servicoConsumo = await ServicoConsumo.findAll();
 
        let data = []
 
        clientes.forEach(c => {
         let d = {
             cli_cod: c.cli_cod,
             cli_nome: c.cli_nome,
             cli_consumo: 0
         }
         data.push(d)
        })
 
        servicoConsumo.forEach(p => {
         data.forEach(d => {
             if (d.cli_cod == p.cli_cod){
                 d.cli_consumo += p.consumo_quantidade
             }
         })
        })
 
        data.sort((a, b) => a.cli_consumo - b.cli_consumo)
 
        let finalData = []

        for (let i = 0; i <= 9; i++){
         finalData.push(data[i])
        }
 
        return res.status(200).json(finalData);
 
     },

     ClientesMaisConsumoValor: async (req: Request, res: Response) => {
        const clientes = await Cliente.findAll();
        const consumoProduto = await ProdutoConsumo.findAll();
        const consumoServico = await ServicoConsumo.findAll();
    
        let data = [];
    
        // Step 1: Initialize the data array with client information
        for (const c of clientes) {
            let form = {
                cli_cod: c.cli_cod,
                cli_nome: c.cli_nome,
                cli_consumoValor: 0
            };
            data.push(form);
        }
    
        // Step 2: Handle ProdutoConsumo
        for (const p of consumoProduto) {
            const pv = await Produto.findOne({ where: { prod_cod: p.prod_cod } });
    
            // Increment consumption value for the respective cliente
            if (pv) {
                for (const d of data) {
                    if (d.cli_cod === p.cli_cod) {
                        d.cli_consumoValor += parseFloat(pv.prod_valor) * p.consumo_quantidade;
                    }
                }
            }
        }
    
        // Step 3: Handle ServicoConsumo
        for (const p of consumoServico) {
            const pv = await Servico.findOne({ where: { serv_cod: p.serv_cod } });
    
            // Increment consumption value for the respective cliente
            if (pv) {
                for (const d of data) {
                    if (d.cli_cod === p.cli_cod) {
                        d.cli_consumoValor += parseFloat(pv.serv_valor) * p.consumo_quantidade;
                    }
                }
            }
        }
    
        // Step 4: Sort the data array by consumo value (in descending order)
        data.sort((a, b) => b.cli_consumoValor - a.cli_consumoValor);
    
        // Step 5: Select the top 5 clients based on consumo value
        const finalData = data.slice(0, 5);
    
        return res.status(200).json(finalData);
    },

    ClienteGenero: async (req: Request, res: Response) => {
       const clientes = await Cliente.findAll();

       let data = {masculino: [], feminino: []}

       clientes.forEach(c => {
        if (c.cli_sexo.toLocaleLowerCase() == 'masculino'){
            data.masculino.push(c)
        }
        else{
            data.feminino.push(c)
        }
       })

       return res.status(200).json(data)
    },

    ProdutoMaisConsumoGenero: async (req: Request, res: Response) => {
        const { genero } = req.params;

        const produtos = await Produto.findAll({where: {prod_genero: genero.toString()}})

        const consumoProduto = await ProdutoConsumo.findAll()

        let data = []

        produtos.forEach(p => {
            let form = {
                prod_cod: p.prod_cod,
                prod_nome: p.prod_nome,
                prod_consumo: 0
            }
            data.push(form)
        })

        consumoProduto.forEach(c => {
            data.forEach(d => {
                if (d.prod_cod == c.prod_cod){
                    d.prod_consumo += c.consumo_quantidade
                }
            })
        })

        data.sort((a, b) => b.prod_consumo - a.prod_consumo)

        return res.status(200).json(data)
    },

    ServicoMaisConsumoGenero: async (req: Request, res: Response) => {
        const { genero } = req.params;

        const produtos = await Servico.findAll({where: {serv_genero: genero.toString()}})

        const consumoProduto = await ServicoConsumo.findAll()

        let data = []

        produtos.forEach(p => {
            let form = {
                serv_cod: p.serv_cod,
                serv_nome: p.serv_nome,
                serv_consumo: 0
            }
            data.push(form)
        })

        consumoProduto.forEach(c => {
            data.forEach(d => {
                if (d.serv_cod == c.serv_cod){
                    d.serv_consumo += c.consumo_quantidade
                }
            })
        })

        data.sort((a, b) => b.serv_consumo - a.serv_consumo)

        return res.status(200).json(data)
    },

    ProdutoMaisConsumoGeral: async (req: Request, res: Response) => {
        const produtos = await Produto.findAll();
        const consumoProduto = await ProdutoConsumo.findAll();

        let data = []

        produtos.forEach(p => {
            let form = {
                prod_cod: p.prod_cod,
                prod_nome: p.prod_nome,
                prod_consumo: 0
            }
            data.push(form)
        })

        consumoProduto.forEach(c => {
            data.forEach(d => {
                if (d.prod_cod == c.prod_cod){
                    d.prod_consumo += c.consumo_quantidade
                }
            })
        })

        data.sort((a, b) => b.prod_consumo - a.prod_consumo);

        return res.status(200).json(data)

    },

    ServicoMaisConsumoGeral: async (req: Request, res: Response) => {
        const produtos = await Servico.findAll();
        const consumoProduto = await ServicoConsumo.findAll();

        let data = []

        produtos.forEach(p => {
            let form = {
                serv_cod: p.serv_cod,
                serv_nome: p.serv_nome,
                serv_consumo: 0
            }
            data.push(form)
        })

        consumoProduto.forEach(c => {
            data.forEach(d => {
                if (d.serv_cod == c.serv_cod){
                    d.serv_consumo += c.consumo_quantidade
                }
            })
        })

        data.sort((a, b) => b.serv_consumo - a.serv_consumo);

        return res.status(200).json(data)

    },
    
}