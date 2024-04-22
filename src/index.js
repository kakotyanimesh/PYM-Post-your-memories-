// require('dotenv').config() this line makes code unconsistant => line 2 and 5 to 7

import dotenv from "dotenv"
import connectDB from "./db/dbindex.js"

dotenv.config({
    path: './.env'
})


connectDB()