
  
  function menuokl() {
    var menuContent = "";
    for (i = 0; i < 200; i++) {
      menuContent += `<div class="menu__content">
              <h3 class="menu__article_id">${DB2.spirits[i].artikelid}</h3>
              <h3 class="menu__name">${DB2.spirits[i].namn}</h3>
              <span class="menu__detail">${DB2.spirits[i].alkoholhalt}</span>
              <span class="menu__preci">${DB2.spirits[i].prisinklmoms}</span>
              <a href="#" class="button menu__button">Order<i class='bx bx-cart-alt'></i></a>
      </div>`;
    }
    // console.log(menuContent);
    $("#menu_container").html(menuContent);
  }

  function beverageTypes() {
    var types = [];
    
    for (i = 0; i < DB2.spirits.length; i++) {
      addToSet(types, DB2.spirits[i].varugrupp);
    }
    console.log(types,"types");
    var typesOfBeverages = ""
    for (i = 0; i < types.length; i++) {
      typesOfBeverages += `<a href="#" class="categories-list">${(types[i])}</a>`;
      // console.log(typesOfBeverages, "typesOfBeverages")
      $("#menu_container").html(typesOfBeverages);
    }
  }