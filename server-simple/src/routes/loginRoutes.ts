import { Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.status(422).send('You must provide an email.');
  }
});

export default router;
