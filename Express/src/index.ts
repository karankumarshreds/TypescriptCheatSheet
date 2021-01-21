import express, { Request, Response } from 'express';
import { loginRoutes } from './routes/login';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
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
