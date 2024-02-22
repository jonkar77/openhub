import { express } from "express";
import { DB_NAME } from "./constants.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();

app.use(core(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true, limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

export default app;
