import app from "./app.js";
import cloudinary from "cloudinary";


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINAY_CLOUD_NAME,
  api_key: process.env.CLOUDINAY_API_KEY,
  api_secret: process.env.CLOUDINAY_API_SECRET,
});


app.listen(process.env.PORT, () => {
  console.log(`server listening in port ${process.env.PORT}`);
});


