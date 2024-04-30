import {asyncHandler} from "../utils/asyncHandelers.js"

const registerUser = asyncHandler(async (req, res) => {
    //get user details from frontend
    // validation - not empty
    //check if user already exists - username/email
    //check for images and avtar
    // upload them to cloudinary, avtar
    // create userObject- create  entry in db
    // remove password and refresh token field from response
    // check user creation 
    // return res


   const {fullName, email, username, password} = req.body
   console.log("email:", email);
})

export {registerUser}