import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    originalUrl: String,
    shortCode: String,
    visitedCount: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export const Url = mongoose.model("url", urlSchema)