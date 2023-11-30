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

  //Creating Child2 (Parent is Child1)

  // For titleSect
  let prodName = document.createElement("h1");
  let price = document.createElement("h2");

  // For ingredient
  let ingredientHeader = document.createElement("h2");
  let ingredientDetail = document.createElement("p");

  // For quantity
  let quantityHeader = document.createElement("h2");

  let itemCount = document.createElement("div");
  itemCount.className = "itemCount";

  let addItemBtnBag = document.createElement("div");
  addItemBtnBag.className = "addItemBtnBag";

  let delBtn = document.createElement("div");
  delBtn.className = "delBtn";

  // Append containers into parent
  titleSect.appendChild(prodName);
  titleSect.appendChild(price);
  ingredient.appendChild(ingredientHeader);
  ingredient.appendChild(ingredientDetail);
  quantity.appendChild(quantityHeader);
  quantity.appendChild(delBtn);
  quantity.appendChild(itemCount);
  quantity.appendChild(addItemBtnBag);

  prodDetail.appendChild(titleSect);
  prodDetail.appendChild(seperator);
  prodDetail.appendChild(ingredient);
  prodDetail.appendChild(quantity);

  // productDetailContainer.append(prodDetail);

  // Write data into containers
  prodImg.innerHTML = `<img src = "${prodData.imgSource}">`;
  prodName.innerHTML = prodData.title;
  price.innerHTML = `${prodData.price} (USD)`;
  ingredientHeader.innerHTML = "Bonbon flavors:";
  ingredientDetail.innerHTML = prodData.ingredient;
  quantityHeader.innerHTML = "Quantity: ";
  delBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
  addItemBtnBag.innerHTML = `<i class="fa-solid fa-plus"></i>`;
}

makeProdDetailPage(prodData);
productDetailContainer.insertAdjacentElement("afterbegin", prodDetail);
productDetailContainer.insertAdjacentElement("afterbegin", prodImg);
