import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {LoginAndRegisterRouter} from './routes/patients.js'

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);


// you can use await keyword outside function. this is why i commented it
// try {
//   await mongoose.connect(process.env.MONGODB);
//   console.log("Connected to database successfully");
// } catch (error) {
//   console.log(error);
// }

// To handle errors before initial connection
mongoose.connect('mongodb://127.0.0.1:27017/test').catch(error => console.log(error));


// To handle errors after initial connection
mongoose.connection.on('error', (err)=>{
  console.log('Error occur after initial connection on mongoDb db: '+err.message)
})

mongoose.connection.on('connect', ()=>{
console.log('successfully makes its initial connection to the MongoDB server, or when Mongoose reconnects after losing connectivity')
})

app.use(express.json());

app.use("/api/vi/auth", LoginAndRegisterRouter)

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
