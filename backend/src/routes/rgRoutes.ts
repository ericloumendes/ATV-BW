import { Router } from 'express'
import { rgController } from '../controllers/rgController';

const router = Router();

// Inserir telefones
router.post('/', rgController.save)

// Excluir telefones
router.delete('/:id', rgController.delete)

export default router;