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
      actionCount.appendChild(addItemBtnBag);
      actionCount.appendChild(itemCount);
      actionCount.appendChild(delBtn);
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
