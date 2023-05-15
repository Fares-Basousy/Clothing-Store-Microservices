const ms1="http://localhost:8000/"

const makeOrder = async (url, order) => {
  order = await order
  const res = await fetch(ms1 + url, {
  method: 'POST', 
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(order), 

  });
  try {
  const responce = await res.json();
  return responce ;
   }
  catch(error) {
  console.log("Error at app.js "+error);

    }
}



async function myFunction(){
  order = {
    item1:0,
    item2:0,
    item3:0,
    cost: 0,
    orderStatus:null};
    order.item1 = Number(document.getElementById("item1").value);
    order.item2 = Number(document.getElementById("item2").value);
    order.item3 = Number(document.getElementById("item3").value);
    console.log(`1 is ${order.item1} 2 is ${order.item2} 3 is ${order.item3}`);
    
        const output = await makeOrder("makeOrder",order)
        try{
          
          if(output.orderStatus == "Available")
          { 
            document.getElementById("popup").style.display="block";
            document.getElementById("outputMsg").innerHTML=`Operation Succesful! <br>${order.item1} × T-shirt(s): ${order.item1 * 10}<br> ${order.item2} × shirt(s): ${order.item2 * 20} <br> ${order.item3} Dress(es): ${order.item3 * 30}  <br> Total Cost : ${output.cost}`;
            console.log(output)
          }
          else{
            document.getElementById("popup").style.display="block";
            document.getElementById("outputMsg").innerHTML=`Operation Failed!`;
            console.log(output)

          }
        }
        catch(error){
          console.log("Error at app.js" + error)
          

        }

    }
 