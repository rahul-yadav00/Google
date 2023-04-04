////////////////////////////////////////////        ALL BEVERAGES             //////////////////////////////////////////

function menuokl() {
  var menuContent = "";
  for (i = 0; i < 200; i++) {
    menuContent += `<div class="menu__content">
              <h3 class="menu__article_id">${DB2.spirits[i].artikelid}</h3>
              <h3 class="menu__name">${DB2.spirits[i].namn}</h3>
              <span class="menu__detail">${DB2.spirits[i].alkoholhalt}</span>
              <span class="menu__preci">${DB2.spirits[i].prisinklmoms}</span>
              <a href="#" class="button menu__button" onclick = "orderNow('${DB2.spirits[i].namn}<br>${DB2.spirits[i].prisinklmoms}')">Order<i class='bx bx-cart-alt'></i></a>
      </div>`;
  }
  // console.log(menuContent);
  $("#menu_container").html(menuContent);
}
////////////////////////////////////////////         ORDER           //////////////////////////////////////
var orderList = [];
var itemQuantities = {};

function orderNow(itemName) {
  if (itemQuantities[itemName]) {
    itemQuantities[itemName]++;
  } else {
    itemQuantities[itemName] = 1;
  }
  orderList.push(itemName);
  console.log(orderList, "orderList");
}

function cart() {
  var orderedItems = "";
  for (var itemName in itemQuantities) {
    var quantity = itemQuantities[itemName];
    orderedItems += `<div class="menu__content">
    <h3 class="menu__name">${itemName}</h3>
    <span class="menu__detail quantity">${quantity}</span>
    <button class="menu__button plus" onclick="updateQuantity('${itemName}', 1)">+</button>
    <button class="menu__button2 minus" onclick="updateQuantity('${itemName}', -1)">-</button>
</div>`;
  }
  $("#menu_container").html(orderedItems);
}

function updateQuantity(itemName, amount) {
  itemQuantities[itemName] += amount;
  if (itemQuantities[itemName] < 1) {
    delete itemQuantities[itemName];
    // orderList = orderList.filter((item) => item !== itemName);
  }
  cart();
}  

////////////////////////////////////////////         BEVERAGES TYPES           //////////////////////////////////////////
function beverageTypes() {
  var types = [];

  for (i = 0; i < DB2.spirits.length; i++) {
    addToSet(types, DB2.spirits[i].varugrupp);
  }
  console.log(types, "types");
  var typesOfBeverages = "";
  for (i = 0; i < types.length; i++) {
    typesOfBeverages += `<div class="menu__content"><a href="#" class="categories-list menu__name">${types[i]}</a></div>`;
    // console.log(typesOfBeverages, "typesOfBeverages")
    $("#menu_container").html(typesOfBeverages);
  }
}
/////////////////////////////////////////////////        VODKA             ////////////////////////////////////////////////
function allVodka() {
  var vodka = "Cognac";
  var collectedAllVodka = [];
  for (i = 0; i < DB2.spirits.length; i++) {
    if (DB2.spirits[i].varugrupp == vodka)
      collectedAllVodka.push([
        DB2.spirits[i].namn + "<br>" + DB2.spirits[i].prisinklmoms,
      ]);
  }
  console.log(collectedAllVodka, "collectedAllVodka");
  var printVodka = "";
  for (i = 0; i < collectedAllVodka.length; i++) {
    printVodka += `<div class="menu__content"><a href="#" class="categories-list menu__name">${collectedAllVodka[i]}</a>
    <a href="#" class="button menu__button" onclick = "orderNow('${collectedAllVodka[i]}')">Order<i class='bx bx-cart-alt'></i></a></div>`;
  }
  $("#menu_container").html(printVodka);
}
/////////////////////////////////////////////////        WHISKY             ////////////////////////////////////////////////

function allWhisky() {
  var whisky = "Whisky, Malt";
  var collectedAllWhisky = [];
  for (i = 0; i < DB2.spirits.length; i++) {
    if (DB2.spirits[i].varugrupp == whisky)
      collectedAllWhisky.push([
        DB2.spirits[i].namn + "<br>" + DB2.spirits[i].prisinklmoms,
      ]);
  }
  // console.log(collectedAllWhisky, "collectedAllWhisky")
  var printWhisky = "";
  for (i = 0; i < collectedAllWhisky.length; i++) {
    printWhisky += `<div class="menu__content"><a href="#" class="categories-list menu__name">${collectedAllWhisky[i]}</a>
    <a href="#" class="button menu__button" onclick = "orderNow('${collectedAllWhisky[i]}')">Order<i class='bx bx-cart-alt'></i></a></div>`;
  }
  $("#menu_container").html(printWhisky);
}

////////////////////////////////////////////        STRONG BEVERAGES             //////////////////////////////////////////

function allStrongBeverages() {
  // Using a local variable to collect the items.
  //
  var collectedNameByPercentage = [];
  var strength = 20;
  // The DB is stored in the variable DB2, with "spirits" as key element. If you need to select only certain
  // items, you may introduce filter functions in the loop... see the template within comments.
  //
  for (i = 0; i < DB2.spirits.length; i++) {
    // We check if the percentage alcohol strength stored in the data base is lower than the
    // given limit strength. If the limit is set to 14, also liqueuers are listed.
    //
    if (percentToNumber(DB2.spirits[i].alkoholhalt) > strength) {
      // The key for the beverage name is "namn", and beverage type is "varugrupp".
      collectedNameByPercentage.push([
        DB2.spirits[i].namn + "<br>" + DB2.spirits[i].prisinklmoms,
      ]);
    }
  }
  console.log(collectedNameByPercentage, "collectedNameByPercentage");
  var strengthOfBeverages = "";
  for (i = 0; i < collectedNameByPercentage.length; i++) {
    strengthOfBeverages += `<div class="menu__content"><a href="#" class="categories-list menu__name">${collectedNameByPercentage[i]}</a>
                            <a href="#" class="button menu__button" onclick = "orderNow('${collectedNameByPercentage[i]}')" >Order<i class='bx bx-cart-alt'></i></a></div>`;
    // console.log(strengthOfBeverages, "strengthOfBeverages");
  }
  $("#menu_container").html(strengthOfBeverages);
}

////////////////////////////////////////////        SOFT BEVERAGES             //////////////////////////////////////////

function allSoftBeverages() {
  // Using a local variable to collect the items.
  //
  var collectedNameByPercentageSoft = [];
  var strength2 = 10;
  // The DB is stored in the variable DB2, with "spirits" as key element. If you need to select only certain
  // items, you may introduce filter functions in the loop... see the template within comments.
  //
  for (i = 0; i < DB2.spirits.length; i++) {
    // We check if the percentage alcohol strength stored in the data base is lower than the
    // given limit strength. If the limit is set to 14, also liqueuers are listed.
    //
    if (percentToNumber(DB2.spirits[i].alkoholhalt) < strength2) {
      // The key for the beverage name is "namn", and beverage type is "varugrupp".
      collectedNameByPercentageSoft.push([
        DB2.spirits[i].namn + "<br>" + DB2.spirits[i].prisinklmoms,
      ]);
    }
  }
  console.log(collectedNameByPercentageSoft, "collectedNameByPercentageSoft");
  var strengthOfSoftBeverages = "";
  for (i = 0; i < collectedNameByPercentageSoft.length; i++) {
    strengthOfSoftBeverages += `<div class="menu__content"><a href="#" class="categories-list menu__name">${collectedNameByPercentageSoft[i]}</a>
                                 <a href="#" class="button menu__button" onclick = "orderNow('${collectedNameByPercentageSoft[i]}')">Order<i class='bx bx-cart-alt'></i></a></div>`;
    // console.log(strengthOfSoftBeverages, "strengthOfSoftBeverages");
  }
  $("#menu_container").html(strengthOfSoftBeverages);
}

///////////////////////////////////////           SEARCH BOX          ////////////////////////////////////////

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", search);

function search() {
  searchValue = searchInput.value;
  collectedSearchValue = [];

  for (i = 0; i < DB2.spirits.length; i++) {
    if (DB2.spirits[i].namn.includes(searchValue)) {
      collectedSearchValue.push([DB2.spirits[i].namn]);
    }
  }
  var searchData = "";
  for (i = 0; i < collectedSearchValue.length; i++) {
    searchData += `<div class="menu__content"><a href="#" class="categories-list">${collectedSearchValue[i]}</a>
                   <a href="#" class="button menu__button">Order<i class='bx bx-cart-alt'></i></a></div>`;
  }
  console.log(searchData, "searchData");
  $("#menu_container").html(searchData);
}

// function table(event) {
//   // event.preventDefault();
//   tableData = `
//     <div class="table" id="table">
//       <a href="#"><img src="assets/img/coffee-table.png" alt="" /></a>
//     </div>;`
//   $("#menu_container").html(tableData);
// }
//testinggit 