// Update Cart immediately anytime
// selectedProdList will have nested list with [[productVarName, productName, quantityCount]]
let selectedProdList = JSON.parse(localStorage.getItem("data")) || [];
DisplayCart(selectedProdList);

// Open bag
const popUp = document.querySelector(".pop-up"),
  bagIcon = document.querySelector("#shoppingBagIcon");

bagIcon.addEventListener("click", () => {
  popUp.classList.toggle("active");
});

function DisplayCart(selectedProdList) {
  const bagNotifier = document.getElementById("bagNotifier");
  const popUp = document.querySelector(".pop-up");
  const popUpList = document.querySelector(".popUpList");

  for (let product = 0; product < selectedProdList.length; product++) {
    let prodVarName = selectedProdList[product][0];

    if (product < 3) {
      //Create a new card
      //Create UI Card
      //First container (parent of itemImg, itemTitle, itemCount)
      let itemCard = document.createElement("li");
      itemCard.className = "itemCard";

      //Second container for itemImg
      let itemImageContainer = document.createElement("div");
      itemImageContainer.className = "itemImageContainer";

      //Second container for itemTitle and itemCount
      let itemDetailContainer = document.createElement("div");
      itemDetailContainer.className = "itemDetailContainer";

      //These are the child containers
      let itemImg = document.createElement("img");
      itemImg.className = "itemImg";

      let itemTitle = document.createElement("div");
      itemTitle.className = "itemTitle";

      // Store the itemCount + delBtn
      let actionCount = document.createElement("div");
      actionCount.className = "actionCount";

      let itemCount = document.createElement("div");
      itemCount.className = "itemCount";

      let addItemBtnBag = document.createElement("div");
      addItemBtnBag.className = "addItemBtnBag";

      let delBtn = document.createElement("div");
      delBtn.className = "delBtn";

      addItemBtnBag.addEventListener("click", () => {
        addFromCart(selectedProdList[product][1]);
      });

      delBtn.addEventListener("click", () => {
        //Index of selectedProdList
        delCart(selectedProdList[product]);
      });

      //Append the child to the parent itemCard
      itemImageContainer.appendChild(itemImg);
      itemDetailContainer.appendChild(itemTitle);
      actionCount.appendChild(delBtn);
      actionCount.appendChild(itemCount);
      actionCount.appendChild(addItemBtnBag);
      itemDetailContainer.appendChild(actionCount);

      itemCard.appendChild(itemImageContainer);
      itemCard.appendChild(itemDetailContainer);

      popUpList.appendChild(itemCard);

      itemImg.src = prodVarName.imgSource;
      itemTitle.innerHTML = prodVarName.title;
      itemCount.innerHTML = selectedProdList[product][2];
      delBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
      addItemBtnBag.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    } else {
      //if there are more than 3 cards, just write how many more unique items added
      let moreItemDetail = document.querySelector(".moreItemDetail");
      //if moreItemDetails dont exist in HTML, create card
      if (!moreItemDetail) {
        let moreItemDetail = document.createElement("p");
        moreItemDetail.className = "moreItemDetail";
        popUp.appendChild(moreItemDetail);
      }
      //then add
      document.querySelector(".moreItemDetail").innerHTML =
        "" + (selectedProdList.length - 3) + " more items added";
    }
  }

  // Update Notifier
  if (selectedProdList.length > 0) {
    bagNotifier.classList.add("active");
  } else {
    bagNotifier.classList.remove("active");
  }
}

// ######################################################################################################################################################################

function addCart(prodData) {
  // Update the list
  clearContent();
  CartTracker("add", prodData);
  DisplayCart(selectedProdList);
}

// ######################################################################################################################################################################

function addFromCart(prodData) {
  // Update the list
  clearContent();
  CartTracker("addFromCart", prodData);

  DisplayCart(selectedProdList);
}

// ######################################################################################################################################################################

// Delete from cart function
// SelectedProdList will have nested list with [[productName, quantityCount]]

function delCart(prodData) {
  clearContent();
  CartTracker("delete", prodData);
  DisplayCart(selectedProdList);
}

// ######################################################################################################################################################################

// selectedProdList will have nested list with [[productVarName, productName, quantityCount]]
// This is to track the what is in the cart right now and update list
// Whatever selected should be saved, hence save selectedPordList to local storage
// The OR [] part is to make sure if array is empty the code still works (null is returned if localStorage does not contain anything)
const productName = 1;
const quantityCount = 2;

function CartTracker(action, prodData) {
  let varName = prodData;
  let selectedProd = prodData.title;
  let isMatched = false;

  // If this is from the card in the products page
  if (action == "add") {
    // This is for add function ---------------------------------------------------------------
    // Run through every value in selectedProductList
    for (let product of selectedProdList) {
      //If there is a match
      if (product[productName] == selectedProd) {
        product[quantityCount] += 1;
        isMatched = true;
      }
      // End of IF Loop
    }
    // End of FOR Loop

    // If there isnt a match
    if (!isMatched) {
      selectedProdList.push([varName, selectedProd, 1]);
    }
  } else if (action == "addFromCart") {
    // Run through every value in selectedProductList
    for (let product of selectedProdList) {
      //If there is a match
      if (product[productName] == prodData) {
        product[quantityCount] += 1;
        isMatched = true;
      }
      // End of IF Loop
    }
    // End of FOR Loop

    // If there isnt a match
    if (!isMatched) {
      selectedProdList.push([varName, selectedProd, 1]);
    }
  } else {
    // This is for del function ---------------------------------------------------------------
    // run through all the products in the selectedProdList
    for (let product of selectedProdList) {
      // check for same name
      if (product[productName] == prodData[0].title) {
        // -1 from the bag
        product[quantityCount] -= 1;
        // if value is 0, remove item
        if (product[quantityCount] == 0) {
          selectedProdList.splice(selectedProdList.indexOf(product), 1);
        }
      }
      // End of IF Loop
    }
    // End of FOR Loop
  }
  // End of ELSE Loop

  // Local storage (Store Data into local storage)
  localStorage.setItem("data", JSON.stringify(selectedProdList));

  if (typeof RefreshCheckoutBag === "function") {
    RefreshCheckoutBag();
  }
}

// ######################################################################################################################################################################

// selectedProdList will have nested list with [[productVarName, productName, quantityCount]]
// Displaying cart
function DisplayCart(selectedProdList) {
  const bagNotifier = document.getElementById("bagNotifier");
  const popUp = document.querySelector(".pop-up");
  const popUpList = document.querySelector(".popUpList");

  for (let product = 0; product < selectedProdList.length; product++) {
    let prodVarName = selectedProdList[product][0];

    if (product < 3) {
      //Create a new card
      //Create UI Card
      //First container (parent of itemImg, itemTitle, itemCount)
      let itemCard = document.createElement("li");
      itemCard.className = "itemCard";

      //Second container for itemImg
      let itemImageContainer = document.createElement("div");
      itemImageContainer.className = "itemImageContainer";

      //Second container for itemTitle and itemCount
      let itemDetailContainer = document.createElement("div");
      itemDetailContainer.className = "itemDetailContainer";

      //These are the child containers
      let itemImg = document.createElement("img");
      itemImg.className = "itemImg";

      let itemTitle = document.createElement("div");
      itemTitle.className = "itemTitle";

      // Store the itemCount + delBtn
      let actionCount = document.createElement("div");
      actionCount.className = "actionCount";

      let itemCount = document.createElement("div");
      itemCount.className = "itemCount";

      let addItemBtnBag = document.createElement("div");
      addItemBtnBag.className = "addItemBtnBag";

      let delBtn = document.createElement("div");
      delBtn.className = "delBtn";

      addItemBtnBag.addEventListener("click", () => {
        addFromCart(selectedProdList[product][1]);
      });

      delBtn.addEventListener("click", () => {
        //Index of selectedProdList
        delCart(selectedProdList[product]);
      });

      //Append the child to the parent itemCard
      itemImageContainer.appendChild(itemImg);
      itemDetailContainer.appendChild(itemTitle);
      actionCount.appendChild(delBtn);
      actionCount.appendChild(itemCount);
      actionCount.appendChild(addItemBtnBag);
      itemDetailContainer.appendChild(actionCount);

      itemCard.appendChild(itemImageContainer);
      itemCard.appendChild(itemDetailContainer);

      popUpList.appendChild(itemCard);

      itemImg.src = prodVarName.imgSource;
      itemTitle.innerHTML = prodVarName.title;
      itemCount.innerHTML = selectedProdList[product][2];
      delBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
      addItemBtnBag.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    } else {
      //if there are more than 3 cards, just write how many more unique items added
      let moreItemDetail = document.querySelector(".moreItemDetail");
      //if moreItemDetails dont exist in HTML, create card
      if (!moreItemDetail) {
        let moreItemDetail = document.createElement("p");
        moreItemDetail.className = "moreItemDetail";
        popUp.appendChild(moreItemDetail);
      }
      //then add
      document.querySelector(".moreItemDetail").innerHTML =
        "" + (selectedProdList.length - 3) + " more items added";
    }
  }

  // Update Notifier
  if (selectedProdList.length > 0) {
    bagNotifier.classList.add("active");
  } else {
    bagNotifier.classList.remove("active");
  }
}

// #######################################################################################################################################################################

// This is for the clear the entire list
function clearContent() {
  const popUp = document.querySelector(".pop-up");
  const popUpList = popUp.querySelector(".popUpList");
  const moreItemDetail = popUp.querySelector(".moreItemDetail");

  popUpList.innerHTML = "";

  if (moreItemDetail != null) {
    moreItemDetail.innerHTML = "";
  }
}

// #######################################################################################################################################################################

function RefreshCart() {
  clearContent();
  DisplayCart(selectedProdList);
}
