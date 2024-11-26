import { Router } from "express";
import { shortenUrl, getOriginalUrl,getUrlStats,deleteShortUrl,generateNewUrl } from "../controllers/url.controllers.js";

const router = Router()

router.get("/ping" , (req,res) => {
    res.send("Pong")
})
router.post("/shorten", shortenUrl)
router.get("/get-original/:shortCode" , getOriginalUrl)
router.get("/get-stats/:shortCode", getUrlStats)
router.delete("/delete-url", deleteShortUrl)
router.post("/update-url", generateNewUrl)

export default router