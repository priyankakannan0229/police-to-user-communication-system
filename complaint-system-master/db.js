// const mongoose = require('mongoose')

// function connect () {
//     mongoose.set('useCreateIndex', true);
//     mongoose.connect('mongodb://localhost/complaintapp',{useNewUrlParser: true})
// }

// module.exports = connect

// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://kmadavan018:maddy018@cluster0.mongodb.net/complaintapp?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// const client = new MongoClient(url);
// async function connect() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }
// module.exports = connect
// run().catch(console.dir);


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://kmadavan018:maddy018@cluster0.bnanchq.mongodb.net/complaintapp?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const mongoose = require('mongoose')

function connect () {
const url = `mongodb+srv://kmadavan018:maddy018@cluster0.bnanchq.mongodb.net/complaintapp?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
}
module.exports = connect