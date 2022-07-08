import {app} from "./app.js";
import { connectDatabase } from "./config/database.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

dotenv.config({path: "./backend/config/config.env"});

const port = process.env.PORT || 3001;

connectDatabase();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.listen(port, () => {
    console.log(`Server is Running at : ${port}`);
});