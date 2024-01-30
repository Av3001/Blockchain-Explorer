import express from "express"
import connectDB from "./db/index.js";
import Moralis from 'moralis';
import transactionRouter from "./routes/transaction.routes.js";
import cors from "cors"
import dotenv from "dotenv"
import { EvmChain } from "@moralisweb3/common-evm-utils";
dotenv.config({
    path: './.env'
})

const port=8000
const app=express();
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cors({origin:"*"}))



app.use("/api/v1",transactionRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: `${process.env.MORALIS_API}`,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

// Call startServer()
startServer();
connectDB()
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




