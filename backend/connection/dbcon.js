import config from "../config.js";
import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const MONGODB_URI = 'mongodb://root:""@mongodb:27017/';
 mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connection Successful...');

  })
  .catch((err) => {
    console.error(err);
  });
export default mongoose