// let orderBlocks = document.getElementsByClassName('order-block')
// let cardHeaders = document.getElementsByClassName('card-header')

let parentDiv = document.getElementById("parent-div");

let orderNumber = 0;
// const executeOrder = () => {
//     let orderIdInput = document.getElementById('order-id-input').value
//     cardHeaders[orderNumber].innerText = 'Order-ID: ' + orderIdInput
//     orderBlocks[orderNumber].style.display = 'block'
//     orderNumber++
// }

const executeOrder = () => {
  let orderIdInput = document.getElementById("order-id-input").value;
    


  if (!orderIdInput) {
    let date = new Date();
    orderIdInput =
      date.getFullYear() +
      "/" +
      date.getMonth() +
      "/" +
      date.getDate() +
      "/" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
  }
  createNodes(orderIdInput);

  // CallBack Hell
  chefReceived()
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheezaAdded)
    .then(secondLayerOfCheezeAdded)
    .then(pizzaBaked)
    .then(oreganoAdded)
    .then(packageReceivedAtCounter)
    .then(() =>
      console.log(
        "The order is ready and handed over to the Zomato Guy!"
      )
    )
    .catch((err) => console.log(err));
};

const createNodes = (orderIdInput) => {
  // Creating elelments
  let colDiv = document.createElement("div");
  let cardDiv = document.createElement("div");
  let cardHeadDiv = document.createElement("div");
  let cardBodyDiv = document.createElement("div");
  let cardTittleH5 = document.createElement("H5");
  let cardTextP = document.createElement("p");
  let cardButtonA = document.createElement("Button");
  let cardFooterDiv = document.createElement("div");

  let cardHeadDivText = document.createTextNode("Order ID: " + orderIdInput);
  let cardH5TittleText = document.createTextNode("Bill Amount: ");
  let cardTextPText = document.createTextNode("Items: XYZ, ABC, ASD");
  let cardButtonAText = document.createTextNode("Cancel Order");
  let cardFooterDivText = document.createTextNode(' ');
  // Append child to the parent

  parentDiv.appendChild(colDiv);
  colDiv.appendChild(cardDiv);
  cardDiv.appendChild(cardHeadDiv);
  cardDiv.appendChild(cardBodyDiv);
  cardDiv.appendChild(cardFooterDiv);
  cardBodyDiv.appendChild(cardTittleH5);
  cardBodyDiv.appendChild(cardTextP);
  cardBodyDiv.appendChild(cardButtonA);
  cardTittleH5.appendChild(cardH5TittleText);
  cardFooterDiv.appendChild(cardFooterDivText);

  cardTextP.appendChild(cardTextPText);
  cardButtonA.appendChild(cardButtonAText);
  cardHeadDiv.appendChild(cardHeadDivText);

  // Aadd class name to the tag
  colDiv.classList = "col-md-4 col-xs-12 order-block";
  colDiv.setAttribute("id", "currOrder" + orderNumber);
  cardDiv.classList = "card text-center";
  cardHeadDiv.classList = "card-header";
  cardBodyDiv.classList = "card-body";
  cardFooterDiv.classList = "card-footer";
  cardTittleH5.classList = "card-tittle";
  cardTextP.classList = "card-text";
  cardButtonA.classList = "btn btn-danger";

  orderNumber++;

  // T o cancel the order
  cardButtonA.addEventListener("click", () => {
    colDiv.style.display = "none";
    document.getElementById("deletedOrder").innerText =
      "canceled order ID : " + orderIdInput;
  });

  // when all the function got executed input box is cleared
  if(typeof(orderIdInput) == "number"){
        document.getElementById('order-id-inout').innerText = (Number)(orderIdInput)++
    }
    else{
        document.getElementById("order-id-input").value = ""
    }
};

// <div class="col-md-4 col-xs-12 order-block">

//       <div class="card text-center">
//         <div class="card-header"  id="order-id-6">
//           Order ID: 2022052222
//         </div>
//         <div class="card-body">
//           <h5 class="card-title">Bill Amount: </h5>
//           <p class="card-text">Items: XYZ, ABC, ASD</p>
//           <a href="#" class="btn btn-danger">Cancel Order</a>
//         </div>
//         <div class="card-footer text-muted">
//           Pizaa Baked
//         </div>
//       </div>

//     </div>
