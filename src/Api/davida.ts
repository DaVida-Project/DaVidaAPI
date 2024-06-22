import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    message: 'Estás en la ruta /davida',
    codeStatus: 200,
  });
});

export default router;
