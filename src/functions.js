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


