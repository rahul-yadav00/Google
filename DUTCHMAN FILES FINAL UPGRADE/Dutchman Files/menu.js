$(document).ready(function () {
    menuokl();
  });
  
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
  

    var strong = []
    var percentage = 10% 
  function allStrongBeverage() {

    for (i = 0; i < DB2.spirits.length; i++) {

      if (percent(DB2.spirits[i].alkoholhalt) > percentage) {
        strong.push([DB2.spirits[i].namn, DB2.spirits[i].varugrupp]);
      }
    }
    return strong;
  }
  console.log(strong)