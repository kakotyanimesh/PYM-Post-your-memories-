// require('dotenv').config() this line makes code unconsistant => line 2 and 5 to 7

import dotenv from "dotenv"  // loads environment variable from dotenv file
import connectDB from "./db/dbindex.js"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})        // initiating dotenv file


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`SERVER IS RUNNING IN THE PORT: ${process.env.PORT}`);
    })
})
.catch((ERROR) => {
    console.log(`MONGODB CONNECTION FAILS !!!`, ERROR);
})