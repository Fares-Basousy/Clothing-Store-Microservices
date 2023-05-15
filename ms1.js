const ms2 = "http://localhost:10000/";
prices = {
    item1 :  10,
    item2 : 20,
    item3 : 30};
// Require Express to run server and routes
const express = require("express");
// Start up an instance of app1
const app1 = express() ;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app1.set(bodyParser.urlencoded({ extended: false }));
app1.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require("cors")
app1.use(Cors());



//Setup microservice management
const port = 8000;
const server = app1.listen(port,()=>{console.log(`running on local http://localhost:${port}/`)})
//post request route for the storage to manage the order (client side code for ms2)
 const manageOrder = async (url, order) => {
    const res = await fetch(ms2 + url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order), 
  
    });
    try {
      let y = res.body
      y=y.getReader()
      let z = y.read().then(({done,value})=>{
        let string = new TextDecoder().decode(value)
        return string
      })
    z = await z
    
    return z ;
     }
    catch(error) {
    console.log("error", error);

      }
  }
//server side code 
app1.post('/makeOrder', async (req,res) =>{
projectData = await req.body;
const  order = await manageOrder("manageorder",projectData);

try{ 
  let x = JSON.parse(order)
    if (x.orderStatus == "Available"){
      x.cost=prices.item1*projectData.item1 + prices.item2*projectData.item2 + prices.item3*projectData.item3
      res.send(x);}
    else{
      res.send(x)

    }
}
catch(error){
  console.log("error at ms1" + error)
    
}
})
