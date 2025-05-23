import express from "express"
import cors from "cors"
import { createServer } from "http"
import dotenv from "dotenv"
import { initWs } from "./ws"
import { initHttp } from "./http"

dotenv.config();

const app = express();
app.use(cors());
const httpServer = createServer(app);

initWs(httpServer);
initHttp(app);

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`Listening on PORT: ${port}`)
})