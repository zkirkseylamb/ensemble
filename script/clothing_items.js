

  const valuesCards = [
    {
      itemId:1,
      itemName:"Buffalo Platforms",
      itemType:"Shoe",
      itemDescription:"Pink platform tennis shoe",
      itemColor:"Pink",
      itemMaterial:"Leather",
      itemSeason:"Summer",
      itemBrand:"Buffalo",
      image: "img/buffalo_platforms.png"
    },
    {
      itemId:2,
      itemName:"Demonia-518",
      itemType:"shoe",
      itemDescription:"Tall buckled platform boots",
      itemColor:"Black",
      itemMaterial:"Patent leather",
      itemSeason:"Fall",
      itemBrand:"Demonia",
      image: "img/demonia_boots.png"
    },
    {
      itemId:3,
      itemName:"Albarosa Blanket Coat",
      itemType:"Outerwear",
      itemDescription: "Blanket coat with checkered pattern and flowers",
      itemColor:"Multicolor",
      itemMaterial:"Wool",
      itemSeason:"Winter",
      itemBrand:"Albarosa",
      image: "img/coat.png"
    },
    {
      itemId:4,
      itemName:"Pink Leopard Coat",
      itemType:"Outerwear",
      itemDescription:"Hot pink faux fur jacket with leopard print",
      itemColor:"pink",
      itemMaterial:"Faux fur",
      itemSeason:"Winter",
      itemBrand:"RaveWonderland",
      image: "img/coat.png"
    },
    {
      itemId:5,
      itemName:"Hello Kitty Halter Top",
      itemType:"Top",
      itemDescription:"Pink bedazzled halter top",
      itemColor:"Pink",
      itemMaterial:"Polycotton blend",
      itemSeason:"Summer",
      itemBrand:"Sanrio",
      image: "img/shirt.png"
    },
    {
      itemId:6,
      itemName:"Rainbow Shirt",
      itemType:"Top",
      itemDescription:"Baby tee with rainbow stripes",
      itemColor:"Multicolor",
      itemMaterial:"Polycotton blend",
      itemSeason:"Summer",
      itemBrand:"Target",
      image: "img/shirt.png"
    },
    {
      itemId:7,
      itemName:"Denim Mini Skirt",
      itemType:"Bottom",
      itemDescription:"Blue denim mini skirt",
      itemColor:"Blue",
      itemMaterial:"Denim",
      itemSeason:"Summer",
      itemBrand:"Unkown",
      image: "img/pants.png"
    },
    {
      itemId:8,
      itemName:"Loose Fit Cargo Pants",
      itemType:"Bottom",
      itemDescription:"Purple pink and yellow  loose fit cargo pants with straps",
      itemColor:"Multicolor",
      itemMaterial:"Canvas",
      itemSeason:"Fall",
      itemBrand:"Unkown",
      image: "img/pants.png"
    },
  
  ];


  cardsContainer = document.getElementById('products-cards-container');

  for (let value of Object.values(valuesCards)) {
    console.log(value.itemId);
    let newCard = document.createElement('DIV');
    newCard.classList.add('products-cards');
   newCard.innerHTML = `
       <img src="${value.image}"/>
       <div class="container">
         <h4>${value.itemName}</h4>
         <button onclick="theFunction()" class="dropbtn">Info</button>
         <div class="info-dropdown">
         <div id="myDropdown" class="dropdown-content">
             <h4>${value.itemName}</h4>
             <h4>${value.itemType}</h4>
             <h4>${value.itemDescription}</h4>
             <h4>${value.itemColor}</h4>
             <h4>${value.itemMaterial}</h4>
             <h4>${value.itemSeason}</h4>
             <h4>${value.itemBrand}</h4>
           </div>
         </div>
        </div> 
    `;
 
    cardsContainer.appendChild(newCard);
  }

  
  function theFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }





