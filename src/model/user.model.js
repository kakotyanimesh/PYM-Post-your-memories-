import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,      // removing whitespace
        index: true      // for searching perpous
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avtar: {
        type: String,  // get from cloudinary service
        required: true
    },
    coverImage: {
        type: String
    },
    password: {
        type: String,
        required: [true, "password is necessary"]
    },
    refreshToken: {
        type: String
    },
    watchedHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ]
},{timestamps: true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(this.password, password)
}

userSchema.method.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }
    )
}

userSchema.method.generateRefressToken = function (){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model("User", userSchema)