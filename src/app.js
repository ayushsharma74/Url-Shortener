import express from "express"
import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import shortenerRouter from "../src/routes/shortener.routes.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use("/api",shortenerRouter)

export {app}