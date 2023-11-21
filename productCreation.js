//Making a card template
//Function to recreate html document

//HTML Document below (To be recreated)

{
  /* <div class="card">
    <div class="image"><img src="imgs/eclairs.jpg" alt=""></div>
    <div class="title">Eclairs by Garuharu</div>
    <div class="price">$50 (USD)</div>
    <div class="addBtn"><i class="bi bi-bag-plus"></i></div>
</div> */
}

//End of HTML Document (To be recreated)

// The section to contain all the cards
const prodSection = document.createElement("section");
prodSection.className = "prodSection";

function makeProdCard(prodData) {
  // Parent div and anchor tag
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "productDetails.html");
  let prodCard = document.createElement("div");
  prodCard.className = "card";

  // Child divs
  let image = document.createElement("div");
  image.className = "image";

  let title = document.createElement("div");
  title.className = "title";

  let price = document.createElement("div");
  price.className = "price";

  let selectedQty = document.createElement("div");
  selectedQty.className = "selectedQty";

  let addCartBtn = document.createElement("div");
  addCartBtn.className = "addBtn";

  // Add to cart function (This is to get user click)
  addCartBtn.addEventListener("click", () => {
    addCart(prodData);
  });

  // This is to add the child divs into the parent divs
  aTag.appendChild(image);
  aTag.appendChild(title);
  aTag.appendChild(price);
  prodCard.appendChild(aTag);
  prodCard.appendChild(addCartBtn);

  // Add the data into the divs
  image.innerHTML = `<img src = "${prodData.imgSource}">`;
  title.innerHTML = prodData.title;
  price.innerHTML = `$${prodData.price} (USD)`;
  addCartBtn.innerHTML = `<img src = "./Pictures/BagIconPlus.png">`;

  // Append the aTag to prodSection
  prodSection.appendChild(prodCard);
}

// Append the Section into the body (outside func so "Make card" --> "Append to Section" --> "Write Section to HTML")
// document.body.appendChild(prodSection)
const footer = document.getElementsByClassName("footer")[0];
const product = document.getElementById("product");
product.insertAdjacentElement("afterbegin", prodSection);

// Now the data objects
let SunsetBonbonSeries = {
  id: 1,
  imgSource: "Pictures/SunsetBonbonSeries.png",
  title: "Series: Sunset Bonbons 3 Pieces",
  category: "BonBons",
  price: 26,
};

let BerrySwirlBonboSeries = {
  id: 2,
  imgSource: "Pictures/BerrySwirlBonboSeries.png",
  title: "Series: Berry Swirl Bonbons 3 Pieces",
  category: "Bonbons",
  price: 30,
};

let VelvetBonBonSeries = {
  id: 3,
  imgSource: "Pictures/VelvetBonBonSeries.png",
  title: "Series: Velvet Bonbons 3 Pieces",
  category: "Bonbons",
  price: 30,
};

let SaltyGiandujaSeries = {
  id: 4,
  imgSource: "Pictures/SaltyGiandujaSeries.png",
  title: "Series: Salty Gianduja Bonbons 3 Pieces",
  category: "Bonbons",
  price: 25,
};

let OreoBonbons = {
  id: 5,
  imgSource: "Pictures/OreoBonbons.png",
  title: "Single: Oreo Praline Bonbon 1 Piece",
  category: "Bonbons",
  price: 3.8,
};

let PeachCompoteSesameGanacheBonBon = {
  id: 6,
  imgSource: "Pictures/PeachCompoteSesameGanacheBonBon.png",
  title: "Single: Peach Compote Sesame Ganache Bonbon 1 Piece",
  category: "Bonbons",
  price: 3.5,
};

let StrawberryAltoelSolGanache = {
  id: 7,
  imgSource: "Pictures/StrawberryAltoelSolGanache.png",
  title: "Single: Strawberry and Alto el Sol 65% Ganache Bonbon 1 Piece",
  category: "Bonbons",
  price: 4,
};

let PutumayoB = {
  id: 8,
  imgSource: "Pictures/PutumayoB.png",
  title: "Single: PUTUMAYO Bouchée 1 Piece",
  category: "Bonbons",
  price: 3.2,
};

makeProdCard(SunsetBonbonSeries);
makeProdCard(BerrySwirlBonboSeries);
makeProdCard(VelvetBonBonSeries);
makeProdCard(SaltyGiandujaSeries);
makeProdCard(OreoBonbons);
makeProdCard(PeachCompoteSesameGanacheBonBon);
makeProdCard(StrawberryAltoelSolGanache);
makeProdCard(PutumayoB);
// ############################################################################################################################################################################

// Open bag
const popUp = document.querySelector(".pop-up"),
  bagIcon = document.querySelector("#shoppingBagIcon");

bagIcon.addEventListener("click", () => {
  popUp.classList.toggle("active");
});

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
// selectedProdList will have nested list with [[productName, quantityCount]]

function delCart(prodData) {
  clearContent();
  CartTracker("delete", prodData);
  DisplayCart(selectedProdList);
}

// ######################################################################################################################################################################

// selectedProdList will have nested list with [[productVarName, productName, quantityCount]]
// This is to track the what is in the cart right now and update list
let selectedProdList = [];
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
