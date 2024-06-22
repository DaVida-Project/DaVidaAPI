import { Router, Request, Response } from 'express';
import { config } from '@config/config';
import DreamJobRoutes from '@api/davida';

const { port, url } = config;

const router = Router();

router.use('/davida', DreamJobRoutes);

router.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    message: 'Estás en la ruta /api',
    codeStatus: 200,
    DreamJob: `${url}${port}/api/davida`,
  });
});

export default router;
