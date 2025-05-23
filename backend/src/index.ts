import express from "express"
import cors from "cors"
import { createServer } from "http"
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(cors());
const httpServer = createServer(app);

const port = process.env.PORT;

app.listen(port , () => {
    console.log(`Listening on PORT: ${port}`)
})