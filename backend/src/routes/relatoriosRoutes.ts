import { Router } from 'express'
import { relatoriosController } from '../controllers/relatoriosController';

const router = Router();

router.get('/ClienteMaisConsumoProdutos', relatoriosController.ClientesMaisConsumoProdutos)

router.get('/ClientesMaisConsumoServicos', relatoriosController.ClientesMaisConsumoServicos)

router.get('/ClientesMenosConsumoProdutos', relatoriosController.ClientesMenosConsumoProdutos)

router.get('/ClientesMenosConsumoServicos', relatoriosController.ClientesMenosConsumoServicos)

router.get('/ClientesMaisConsumoValor', relatoriosController.ClientesMaisConsumoValor)

router.get('/ClienteGenero', relatoriosController.ClienteGenero)

router.get('/ProdutoMaisConsumoGenero/:genero', relatoriosController.ProdutoMaisConsumoGenero)

router.get('/ServicoMaisConsumoGenero/:genero', relatoriosController.ServicoMaisConsumoGenero)

router.get('/ProdutoMaisConsumoGeral', relatoriosController.ProdutoMaisConsumoGeral)

router.get('/ServicoMaisConsumoGeral', relatoriosController.ServicoMaisConsumoGeral)

export default router;