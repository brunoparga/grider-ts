import { Request, Response, Router } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email
          <input name="email" />
        </label>
      </div>
      <div>
        <label>Password
          <input name="password" type="password" />
        </label>
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(email + password);
});

export default router;
