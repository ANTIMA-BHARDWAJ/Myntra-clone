let bagItems;
onLoad();

function onLoad() {
  let  bagItemsStr = localStorage.getItem('.bagItems');
  bagItems= bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}


function addToBag(itemId) {
 bagItems.push(itemId);
 localStorage.setItem('.bagItems',JSON.stringify(bagItems));
 displayBagIcon();
}

function displayBagIcon() {
    let bagItemscountsElement = document.querySelector('.bag-items-counts');
    if (bagItems.length > 0 ) {
        console.log('I am here');
        bagItemscountsElement.style.visibility = 'visible';
        bagItemscountsElement.innerText = bagItems.length;
    } else {
       bagItemscountsElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
    let itemscontainerElement = document.querySelector('.items-container');
    if (!itemscontainerElement) {
      return;
    }
        let innerHtml ='';
        items.forEach(item => {
           innerHtml +=`
           <div class="item-container">
                <img class="item-image" src="${item.image}" alt="item-image">
                <div class="rating">
                ${item.rating.stars}  ⭐|  ${item.rating.count} 
                </div>
                <div class="company-name"> ${item.company} </div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">     
                <span class="orginal_price">Rs ${item.original_price}</span>
                <span class="current_price">Rs ${item.current_price}</span>
                <span class="discount ">${item.discount_percentage}% OFF</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})"> ADD TO BAG</button>
        </div>`
        });
        itemscontainerElement.innerHTML = innerHtml;
    }  

