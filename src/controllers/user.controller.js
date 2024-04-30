import {asyncHandler} from "../utils/asyncHandelers.js"

const registerUser = asyncHandler(async (req, res) => {
    res.json({
        message: "routes is doing file"
    })
})

export {registerUser}