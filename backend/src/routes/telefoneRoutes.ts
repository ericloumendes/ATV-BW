import { Router } from 'express'
import { telefoneController } from '../controllers/telefoneController';

const router = Router();

// Inserir telefones
router.post('/', telefoneController.save)

// Excluir telefones
router.delete('/:id', telefoneController.delete)

export default router;