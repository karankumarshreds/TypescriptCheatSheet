import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <input placeholder="Email" type="email"/>
      <input placeholder="Password" type="password"/>
      <button type="submit">Login</button>
    </form>
  `);
});


export { router as loginRoutes };