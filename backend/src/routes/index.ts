import { Router } from 'express';
import clienteRoutes from './clienteRoutes'
import telefoneRoutes from './telefoneRoutes'
import rgRoutes from './rgRoutes'
import servicoRoutes from './servicoRoutes'
import produtoRoutes from './produtoRoutes'
import relatoriosRoutes from './relatoriosRoutes'

const router = Router();

router.use('/cliente', clienteRoutes)

router.use('/telefones', telefoneRoutes)

router.use('/rgs', rgRoutes)

router.use('/servico', servicoRoutes)

router.use('/produto', produtoRoutes)

router.use('/relatorios', relatoriosRoutes)

export default router