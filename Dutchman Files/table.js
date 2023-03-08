function deleteItem(button) {
    // get the parent element of the button (i.e. the entire menu__content div)
    const item = button.parentNode;
    // get the parent element of the item (i.e. the item-list div)
    const itemList = item.parentNode;
    // remove the item from the item-list
    itemList.removeChild(item);
  }
  