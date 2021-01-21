import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import { loginRoutes } from './routes/login';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["test@123"] }));

app.get("/", (req: Request, res: Response) => {
  if(req.session!.loggedIn == true) {
    res.send(`
      <div>
        <h1>You are logged in</>
      </div>
  `)
  }
  res.send(`
    <div>
      <h1>Express server</>
    </div>
  `)
})

app.use("/login", loginRoutes);

app.listen(5000, () => {
  console.log("Started at 5000")
})
