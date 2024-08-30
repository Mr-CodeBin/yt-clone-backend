
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

// IFFE function demonstration
;( async ()=> {
    try {
        await mongoose.connect (`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()