import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hello there!</h1>
    </div>
  `);
});

export default router;
