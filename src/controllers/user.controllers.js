import { asyncHandler } from "../utils/asyncHandelers.js";

const useRegister = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "okk"
    })
})

export {useRegister}

