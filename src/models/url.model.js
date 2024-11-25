import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    originalUrl: String,
    shortCode: {
        type: String,
        unique: true
    },
    visitedCount: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export const Url = mongoose.model("url", urlSchema)