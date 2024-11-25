import { nanoid } from "nanoid"
import { Url } from "../models/url.model.js"

const shortenUrl = async (req,res) => {
    try {
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
    } catch (error) {
        console.log(error.message);
    }
}

const getOriginalUrl = async (req,res) => {
    try {
        console.log(req.params);
        
        const {shortCode} = req.params
        console.log(shortCode);
        const urlData = await Url.findOneAndUpdate(
            {shortCode},
            {$inc: {visitedCount: 1}},
            {new: true}
        )
        if (!urlData) {
            return res.status(404).json("Url not found on database")
        }
        return res.json(urlData)
    } catch (error) {
        console.log(error.message);
        return res.json("request failed")
    }
}

const getUrlStats = async (req,res) => {
    const {shortCode} = req.params
    const urlData = await Url.findOne({shortCode})
    if (!urlData) {
        return res.json("error fetching url stats").status(500)
    }
    return res.json({visitedCount: urlData.visitedCount})
}

const deleteShortUrl = async (req,res) => {
    const {shortCode} = req.body
    await Url.findOneAndDelete({shortCode})
    return res.json("Deleted Short Url").status(200)
}


    
export {
    shortenUrl,
    getOriginalUrl,
    getUrlStats,
    deleteShortUrl
}