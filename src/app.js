import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser)

// importing router 
import useRouter from "./routes/user.routes.js";


//declaring routers
app.get("/api/v1/users", useRouter)


// http://localhost:7000/api/v1/users/register
export {app}

