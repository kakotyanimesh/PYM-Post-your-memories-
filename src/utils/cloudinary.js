import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_API_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uplodaOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:'auto'
        })
        console.log(`file uploded successfully at cloudinary at url`, response.url);
        return null
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}


export {uplodaOnCloudinary}