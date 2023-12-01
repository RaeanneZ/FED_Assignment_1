{
  /* <section class="prodDetailContainer">
  <img src="Pictures/SunsetBonbonSeries.png" alt="" />

  <div class="prodDetail">
    <div class="title">
      <h1>Series: Sunset Bonbon 3 Pieces</h1>
      <h2>$26</h2>
    </div>

    <div class="seperator"></div>

    <div class="ingredient">
      <h2>Bonbon flavors:</h2>
      <p>Yuzu tart, Peppermint Cookie, Raspberry</p>
    </div>

    <div class="quantity">
      <h2>Quantity:</h2>
    </div>

    <button class="addCart">Add To Cart</button>
  </div>
</section>; */
}

// Re-create the html file
const productDetailContainer = document.getElementById("prodDetailContainer");
const prodData = JSON.parse(localStorage.getItem("selectedDetail"));

let itemCount = getQty(prodData, selectedProdList);

// Creating Parent divs
const prodDetail = document.createElement("div");
prodDetail.className = "prodDetail";
const prodImg = document.createElement("div");
prodImg.className = "image";

function makeProdDetailPage(prodData) {
  // Creating Child1 div
  let titleSect = document.createElement("div");
  titleSect.className = "title";

  let seperator = document.createElement("div");
  seperator.className = "seperator";

  let ingredient = document.createElement("div");
  ingredient.className = "ingredient";

  let quantity = document.createElement("div");
  quantity.className = "quantity";

  let editQty = document.createElement("div");
  editQty.className = "editQty";

  let addCartBtn = document.createElement("button");
  addCartBtn.className = "addCart";

  //Creating Child2 (Parent is Child1)

  // For titleSect
  let prodName = document.createElement("h1");
  let price = document.createElement("h2");

  // For ingredient
  let ingredientHeader = document.createElement("h2");
  let ingredientDetail = document.createElement("p");

  // For quantity
  let quantityHeader = document.createElement("h2");

  let itemCountContainer = document.createElement("div");
  itemCountContainer.className = "itemCount";

  let addItemBtnBag = document.createElement("div");
  addItemBtnBag.className = "addItemBtnBag";

  let delBtn = document.createElement("div");
  delBtn.className = "delBtn";

  addItemBtnBag.addEventListener("click", () => {
    itemCount += 1;
    itemCountContainer.innerHTML = itemCount;
  });

  delBtn.addEventListener("click", () => {
    itemCount -= 1;
    itemCountContainer.innerHTML = itemCount;
  });

  addCartBtn.addEventListener("click", () => {
    setQty(prodData, selectedProdList);
    setCart(prodData, itemCount);

    clearContent();
    DisplayCart(selectedProdList);
  });

  // Append containers into parent
  titleSect.appendChild(prodName);
  titleSect.appendChild(price);
  ingredient.appendChild(ingredientHeader);
  ingredient.appendChild(ingredientDetail);
  editQty.appendChild(delBtn);
  editQty.appendChild(itemCountContainer);
  editQty.appendChild(addItemBtnBag);
  quantity.appendChild(quantityHeader);
  quantity.appendChild(editQty);

  prodDetail.appendChild(titleSect);
  prodDetail.appendChild(seperator);
  prodDetail.appendChild(ingredient);
  prodDetail.appendChild(quantity);
  prodDetail.appendChild(addCartBtn);

  // productDetailContainer.append(prodDetail);

  // Write data into containers
  prodImg.innerHTML = `<img src = "${prodData.imgSource}">`;
  prodName.innerHTML = prodData.title;
  price.innerHTML = `$ ${prodData.price} (USD)`;
  ingredientHeader.innerHTML = "Bonbon flavors:";
  ingredientDetail.innerHTML = prodData.ingredient;
  quantityHeader.innerHTML = "Quantity: ";
  itemCountContainer.innerHTML = itemCount;
  delBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
  addItemBtnBag.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  addCartBtn.innerHTML = "Add To Cart";
}

makeProdDetailPage(prodData);
productDetailContainer.insertAdjacentElement("afterbegin", prodDetail);
productDetailContainer.insertAdjacentElement("afterbegin", prodImg);

// Set Quantity =========================================================================================================================================================
function getQty(prodData, selectedProdList) {
  const objIndex = 0;
  const qtyIndex = 2;

  if (selectedProdList.length == 0) {
    return 0;
  }

  for (let i = 0; i < selectedProdList.length; i++) {
    if (selectedProdList[i][objIndex].id == prodData.id) {
      return selectedProdList[i][qtyIndex];
    }
  }
}

function setQty(prodData, selectedProdList) {
  const objIndex = 0;
  const qtyIndex = 2;

  if (selectedProdList.length == 0) {
    return 0;
  }

  for (let i = 0; i < selectedProdList.length; i++) {
    if (selectedProdList[i][objIndex].id == prodData.id) {
      selectedProdList[i][qtyIndex] = itemCount;
    }
  }
}

function setCart(prodData, qty) {
  for (let product of selectedProdList) {
    //If there is a match
    if (product[productName] == prodData.title) {
      product[quantityCount] = qty;
    }
    // End of IF Loop
  }

  localStorage.setItem("data", JSON.stringify(selectedProdList));
}
