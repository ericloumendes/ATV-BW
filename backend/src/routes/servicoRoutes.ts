import { Router } from 'express'
import { servicoController } from '../controllers/servicoController';

const router = Router();


// Pegar clientes
router.get('/', servicoController.show)

// Inserir clientes
router.post('/', servicoController.save)

// // Editar cliente
router.put('/:id', servicoController.edit)

// // Excluir cliente
router.delete('/:id', servicoController.delete)

router.get('/consumo/:id', servicoController.showConsumo)

router.post('/consumo/', servicoController.saveConsumo)

export default router;