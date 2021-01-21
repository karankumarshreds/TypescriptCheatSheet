import express, { Request, Response } from 'express';

// making a type def for request object and 
// defining the keys to be either string or 
// undefined
/* example: 
 * const { email: string | undefined } = req.body;
 * Hence, we will have to undefined case as well
 */
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}
/**
 * // if you want to use more specific type def 
 * 
 * interface LoginRequest extends Request {
 *   body: { email: string | undefined }
 * }
 * 
 */

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <input placeholder="Email" type="email" name="email"/>
      <input placeholder="Password" type="password" name="password"/>
      <button type="submit">Login</button>
    </form>
  `);
});

router.post("/", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password 
    && email === "test@test.com" 
    && password == "password"
    ) {
    req.session!.loggedIn = true;
    return res.redirect("/");
  }
  res.send(`<h1>Login failed</h1>`);
});


export { router as loginRoutes };