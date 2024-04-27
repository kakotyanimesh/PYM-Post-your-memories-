import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_API_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:'auto'
        })
        // uploading the file to cloudinary

        console.log(`file uploaded succesfully at url: `, response.url);
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath) 
        // to delete the temporay file if there is an occurance of error while uploading to cloudinary -> to maintain the cleanliness of our file system
        
        return null
    }
}

export {uploadToCloudinary}