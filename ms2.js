
quantity = {
    item1 :  476,
    item2 : 276,
    item3 : 770
};
// Require Express to run server and routes
const express = require("express");
// Start up an instance of app2
const app2 = express() ;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app2.set(bodyParser.urlencoded({ extended: false }));
app2.use(bodyParser.json());
// Cors for cross origin allowance
const Cors = require("cors")
app2.use(Cors());
// Setup Server

const port = 10000;
const server = app2.listen(port,()=>{console.log(`running on http://localhost:${port}/`)})

app2.post('/manageorder', async (req,res) => {
    
        order = await req.body
        if (order.item1<=quantity.item1 && order.item2<=quantity.item2 && order.item2<=quantity.item2)
            {
            quantity.item1-=order.item1
            quantity.item2-=order.item2 
            quantity.item3-=order.item3
            order.orderStatus = "Available"
            console.log("Storage: "+JSON.stringify(quantity)) 
            res.send(order);
        }
    else{
        order.orderStatus = "Not available"
        res.send(order);
    }

    
    }
)