import { Router } from 'express'
import { produtoController } from '../controllers/produtoController';


const router = Router();


// Pegar clientes
router.get('/', produtoController.show)

// Inserir clientes
router.post('/', produtoController.save)

// // Editar cliente
router.put('/:id', produtoController.edit)

// // Excluir cliente
router.delete('/:id', produtoController.delete)

router.get('/consumo/:id', produtoController.showConsumo)

router.post('/consumo/', produtoController.saveConsumo)

export default router;