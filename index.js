import express from "express";
import cors from "cors";

import {getData,addData, deleteData} from "./src/functions.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req,res)=>{
         res.send('I am root.');
    console.log('I am root.')
 });

app.get("/get",getData);
app.post("/post",addData);
app.delete("/delete/:docId",deleteData)





app.listen(3018,() => console.log('running on port 3018') )
