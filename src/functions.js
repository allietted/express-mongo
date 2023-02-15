import {dbConnect} from "./dbConnect.js";
import { mongoCredentials } from "./secrets.js";

export async function getData(req, res){
     const db = dbConnect()
     const collection = await db.collection(mongoCredentials.collection)
     .find({})
     .limit(5)
     .toArray()
     .catch(err=> {
          res.status(500).send(err);
          return
     });

     console.log("Get:Data");
     console.table(collection);
     res.send(collection);

}

export async function addData(req, res){
     const db = dbConnect()
     const data = req.body
     const collection = await db.collection(mongoCredentials.collection)
     .insertOne(data)
     .catch(err=> {
          res.status(500).send(err);
          return
     });

     console.log("Post: Add Data");
     console.table(collection);
     res.send(collection);

}

export async function deleteData(req, res){
     const db = dbConnect()
     const {docId} = req.params
     const collection = await db.collection(mongoCredentials.collection)
     .deleteOne({id:docId})
     .catch(err=> {
          res.status(500).send(err);
          return
     });

     console.log("Delete: Delete Data");
     console.table(collection);
     res.send(collection);

}
     
     



