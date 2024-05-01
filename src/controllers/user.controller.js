import {asyncHandler} from "../utils/asyncHandelers.js"

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "okay"
    })
})

export {registerUser}