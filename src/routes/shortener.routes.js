import { Router } from "express";
import { shortenUrl } from "../controllers/url.controllers.js";

const router = Router()

router.get("/ping" , (req,res) => {
    res.send("Pong")
})
router.post("/shorten", shortenUrl)

export default router