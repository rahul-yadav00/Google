// fetch('./loade').then(res => res.json())
// .then(data => console.log(data))

// $(document).ready(function () {
//     menuokl();
//     allUserName();
//   });
  
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
  //jquarry uses 

  // function allUserName() {
  //   var nameCollect = [];
  //   for (i = 0; i < db2.spirits[i].length; i++) {
  //     nameCollect = nameCollect.push(db2.spirits[i].namn);
  //   }
  //   console.log(nameCollect);
  //   return nameCollect;
  // }