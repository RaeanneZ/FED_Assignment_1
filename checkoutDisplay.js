// Create the UI for the list

const orderList = document.getElementById("orderList");
const subTotalDisplay = document.getElementById("subTotalDisplay");

let subTotal = document.createElement("div");
subTotal.className = "subTotal";

function prodListRender() {
  for (let product = 0; product < selectedProdList.length; product++) {
    const prodObj = selectedProdList[product][0];
    let prodQtySelected = selectedProdList[product][2];

    let itemRow = document.createElement("li");
    itemRow.className = "itemRow";

    //Second container for itemImg
    let bItemImageContainer = document.createElement("div");
    bItemImageContainer.className = "bItemImageContainer";

    //Second container for itemTitle and itemCount
    let bItemDetailContainer = document.createElement("div");
    bItemDetailContainer.className = "bItemDetailContainer";

    let bItemTitlePrice = document.createElement("div");
    bItemTitlePrice.className = "bItemTitlePrice";

    let totalPrice = document.createElement("div");
    totalPrice.className = "totalPrice";

    //These are the child containers
    let bItemImg = document.createElement("img");
    bItemImg.className = "bItemImg";

    let bItemTitle = document.createElement("div");
    bItemTitle.className = "bItemTitle";

    let bItemPrice = document.createElement("div");
    bItemPrice.className = "bItemPrice";

    // Store the itemCount + delBtn
    let bItemActionCount = document.createElement("div");
    bItemActionCount.className = "bItemActionCount";

    let bItemCountContainer = document.createElement("div");
    bItemCountContainer.className = "bItemCount";

    let addItemBtnBag = document.createElement("div");
    addItemBtnBag.className = "addItemBtnBag";

    let delBtn = document.createElement("div");
    delBtn.className = "delBtn";

    addItemBtnBag.addEventListener("click", () => {
      prodQtySelected += 1;
      bItemCountContainer.innerHTML = prodQtySelected;
      totalPrice.innerHTML = getTotalPrice(prodObj, prodQtySelected); //update price display

      updateLocalStorage(prodObj, prodQtySelected);
      RefreshCheckoutBag();
      RefreshCart();
    });

    delBtn.addEventListener("click", () => {
      //Index of selectedProdList
      prodQtySelected -= 1;

      if (prodQtySelected == 0) {
        removeProd(prodObj);
      } else {
        bItemCountContainer.innerHTML = prodQtySelected;
        totalPrice.innerHTML = getTotalPrice(prodObj, prodQtySelected); //update price display
      }

      updateLocalStorage(prodObj, prodQtySelected); //Update cart
      RefreshCheckoutBag();
      RefreshCart();
    });

    //Append the child to the parent itemCard
    bItemImageContainer.appendChild(bItemImg);
    bItemTitlePrice.appendChild(bItemTitle);
    bItemTitlePrice.appendChild(bItemPrice);

    bItemActionCount.appendChild(delBtn);
    bItemActionCount.appendChild(bItemCountContainer);
    bItemActionCount.appendChild(addItemBtnBag);

    bItemDetailContainer.appendChild(bItemTitlePrice);
    bItemDetailContainer.appendChild(bItemActionCount);
    bItemDetailContainer.appendChild(totalPrice);

    itemRow.appendChild(bItemImageContainer);
    itemRow.appendChild(bItemDetailContainer);
    // itemRow.appendChild(totalPrice);

    orderList.appendChild(itemRow);

    bItemImg.src = prodObj.imgSource;
    bItemTitle.innerHTML = prodObj.title;
    bItemPrice.innerHTML = `$${prodObj.price} (USD)`;
    bItemCountContainer.innerHTML = prodQtySelected;
    delBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    addItemBtnBag.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    totalPrice.innerHTML = `$${getTotalPrice(prodObj, prodQtySelected)} (USD)`; //update price display
    subTotal.innerHTML = `Total: $${getSubTotal()}`;
  }
}

function subTotalRender() {
  subTotalDisplay.appendChild(subTotal);
  subTotal.innerHTML = `Total: $${getSubTotal()}`;
}

function getTotalPrice(prodObj, prodQtySelected) {
  return prodObj.price * prodQtySelected;
}

function getSubTotal() {
  let subTotal = 0;
  for (let product of selectedProdList) {
    subTotal += product[0].price * product[2];
  }
  return subTotal;
}

function removeProd(prodObj) {
  selectedProdList.splice(selectedProdList.indexOf(prodObj), 1);
}

function updateLocalStorage(prodData, qty) {
  for (let product of selectedProdList) {
    //If there is a match
    if (product[productName] == prodData.title) {
      product[quantityCount] = qty;
    }
    // End of IF Loop
  }

  localStorage.setItem("data", JSON.stringify(selectedProdList));
}

function RefreshCheckoutBag() {
  orderList.innerHTML = "";
  subTotalDisplay.removeChild(subTotalDisplay.firstChild);
  prodListRender();
  getSubTotal();
}

subTotalRender();
prodListRender();
