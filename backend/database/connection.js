import mongoose from "mongoose";
import colors from "colors"

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUCTION_PLATFORM",
    })
    .then(() => {
      console.log("Connected to database.".bgCyan.italic.bold);
    })
    .catch((err) => {
      console.log(`Some error occured while connection to database: ${err}`);
    });
};
