import { nanoid } from "nanoid"
import { Url } from "../models/url.model.js"

const shortenUrl = async (req,res) => {
    const {url} = req.body
    if (!url) {
        return res.status(400).json("Url is required")
    }
    const shortCode = nanoid(6)
    const newUrl = await Url.create({
        originalUrl: url,
        shortCode,
    })
    if (!newUrl) {
        return res.status(500).json("Mongodb saving error")
    }
    res.json(newUrl).status(200)
}
export {
    shortenUrl
}