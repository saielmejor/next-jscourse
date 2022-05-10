import {MongoClient} from 'mongodb'

//api/new-meetup 
// POST request for this API 
async  function handler(req,res){ 
 if(req.method === 'POST'){ 

    const data= req.body; // obtain data from request bodyu
   const client= await  MongoClient.connect('mongodb+srv://saiken:lvOJWcSrCerwOXCo@cluster0.2fgwr.mongodb.net/Meetup?retryWrites=true&w=majority');
   const db=client.db(); 

   const meetupsCollection=db.collection('meetups') 
   const result=await meetupsCollection.insertOne(data); //insert new document 
   console.log(result); 

   client.close();
   res.status(201).json({message:' Meetup Inserted'})
 }
}

export default handler