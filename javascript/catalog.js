var productsCards = [{
    id: "prod-1",
    image: "aapara chores 3.jpg",
    name: "Para-choques Volkswagen Gold 7 GTIc",
    type: "Para-choques",
    sucata: "Servcarros",
    marca: "Volkswagen",
    price: "700,00 €",
    priceInt: 700,
    searchValues: ['servcarros', 'volkswagen', 'para-choques']
  }, {
    id: "prod-2",
    image: "apara choques 2.jpg",
    name: "Para-choques SEAT Léon Cupra R",
    type: "Para-choques",
    sucata: "Forjães",
    marca: "SEAT",
    price: "500,00 €",
    priceInt: 500,
    searchValues: ['forjães', 'seat', 'para-choques']
  }, {
    id: "prod-3",
    image: "aaparachoques.jpg",
    name: "Para-choques BMW M3 E46",
    type: "Para-choques",
    sucata: "SBL",
    marca: "BMW",
    price: "400,00 €",
    priceInt: 400,
    searchValues: ['sbl', 'bmw', 'para-choques']
  },
  {
    id: "prod-4",
    image: "aaparachoques 4.jpg",
    name: "Para-choques Mercedes A45",
    type: "Para-choques",
    sucata: "SBL",
    marca: "Mercedes",
    price: "800,00 €",
    priceInt: 800,
    searchValues: ['sbl', 'mercedes', 'para-choques']
  }, {
    id: "prod-5",
    image: "aajantes4.jpg",
    name: "Jantes Mercedes C220",
    type: "Jantes",
    sucata: "Servcarros",
    marca: "Mercedes",
    price: "300,00 €",
    priceInt: 300,
    searchValues: ['servcarros', 'mercedes', 'jantes']
  }, {
    id: "prod-6",
    image: "aajantes3.png",
    name: "Jantes GTI Golf 7",
    type: "Jantes",
    sucata: "SBL",
    marca: "Golf",
    price: "350,00 €",
    priceInt: 350,
    searchValues: ['sbl', 'golf', 'jantes']
  }, {
    id: "prod-7",
    image: "aajantes2.jpg",
    name: "Jantes Audi A4",
    type: "Jantes",
    sucata: "Forjães",
    marca: "Audi",
    price: "150,00 €",
    priceInt: 150,
    searchValues: ['forjães', 'audi', 'jantes']
  }, {
    id: "prod-8",
    image: "aajnate1.png",
    name: "Jantes BMW 18",
    type: "Jantes",
    sucata: "SBL",
    marca: "BMW",
    price: "250,00 €",
    priceInt: 250,
    searchValues: ['sbl', 'bmw', 'jantes']
  }, {
    id: "prod-9",
    image: "amotor5.jpg",
    name: "Motor Peugeot 508 1.6",
    type: "Motor",
    sucata: "Servcarros",
    marca: "Peugeot",
    price: "899,00 €",
    priceInt: 899,
    searchValues: ['servcarros', 'peugeot', 'motor']
  }, {
    id: "prod-10",
    image: "amotor3.jpg",
    name: "Motor Volkswagen Amarok TDI 2.0",
    type: "Motor",
    sucata: "SBL",
    marca: "Volkswagen",
    price: "1499,00 €",
    priceInt: 1499,
    searchValues: ['sbl', 'volkswagen', 'motor']
  }, {
    id: "prod-11",
    image: "amotor2.jpg",
    name: "Motor Mercedes C220 CDI",
    type: "Motor",
    sucata: "Forjães",
    marca: "Mercedes",
    price: "999,00 €",
    priceInt: 999,
    searchValues: ['forjães', 'mercedes', 'motor']
  },
  {
    id: "prod-12",
    image: "motor1.jpg",
    name: "Motor BMW 116D",
    type: "Motor",
    sucata: "SBL",
    marca: "BMW",
    price: "899,00 €",
    priceInt: 899,
    searchValues: ['sbl', 'bmw', 'motor']
  }
];

var filtersAppliedSucata = [];
var filtersAppliedType = [];
var filtersAppliedMarca = [];
var filtersApplied = [];

var container = document.getElementById('catalog');
var modal = document.getElementById("modal-product");
var localStorageKey = 'WheelDeal-Project-ShoppingCart';

// Create the catalog on init of the Page
createCards(productsCards);

function createCards(arrayProds) {

  container.innerHTML = '';

  arrayProds.forEach((result, idx) => {
    // Create card element
    var card = document.createElement('div');
    card.classList = 'card-body';

    // Construct card content
    var content = `<div class="card column is-3" id="${result.id}" click>
                      <div class="card-header" id="heading-${idx}">
                        <img src="../imagens/${result.image}" width="100%"/>
                      <span class="tag sucata">${result.sucata}</span>
                      </div>
                      <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
                      <div class="card-body">
                      
                      <h5 class="title is-5">${result.name}</h5>
                      <hr class="hr-minor">
                      <p>${result.price}</p>
                      </div>
                        <p class="object-result" style="display:none">${JSON.stringify(result)}</p>
                        </div>
                    </div>
                      `;

    // Append newyly created card element to the container
    container.innerHTML += content;
  });

}


// Add Event Listener to Click on Card
var el = document.querySelectorAll('.card');
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener('click', function (event) {
    var iterationProductId = event.currentTarget.id;
    var valueOfProd = productsCards.filter(x => x.id === iterationProductId);
    createModalContent(valueOfProd[0]);
    openProductModal();
  });
}

// Create the modal based on product selected
function createModalContent(value) {
  // Clean the modal 
  var productModal = document.getElementById("modal-content-product");

  var productName = productModal.querySelector('.product-name');
  var productPrice = productModal.querySelector('.product-price');
  var productImage = productModal.querySelector('.product-img');
  var productId = productModal.querySelector('.modal-product-id');

  // Set the values with current product
  productName.innerHTML = value.name;
  productPrice.innerHTML = value.price;
  productImage.src = '../imagens/' + value.image;
  productId.innerHTML = value.id;

}

// MODAL FUNCTIONS
function openProductModal() {
  modal.classList.toggle('is-active');
}

function closeModal() {
  modal.classList.remove('is-active');
}


// Add the product to ShoppingCart
function addToShoppingCart() {

  var productId = document.querySelector(".modal-product-id").innerHTML;

  var valuesOnLS = localStorage.getItem(localStorageKey);
  var valuesOnLSJSON = valuesOnLS == null ? [] : JSON.parse(valuesOnLS);

  var indexOnLS = valuesOnLSJSON.findIndex(v => v.prod.id === productId);

  if (indexOnLS === -1) {
    product = {
      prod: productsCards.find(x => x.id === productId),
      qty: 1
    };
    valuesOnLSJSON.push(product);
  } else {
    valuesOnLSJSON[indexOnLS].qty += 1;
  }

  localStorage.setItem(localStorageKey, JSON.stringify(valuesOnLSJSON));
  closeModal();
}


function filterProduct(type, name, event) {

  // validar se é checked ou nao
  var isCheck = event.target.checked;

  if (!isCheck) {
    filtersApplied = filtersApplied.filter(x => x !== name);
  } else {
    filtersApplied.push(name);
  }

  var prods = [];

  // Validar se esta presente no  search fields
  for (var x = 0; x < productsCards.length; x++) {
    var valuesToSearch = productsCards[x].searchValues;
    var isValidToShow = false;
    for (var i = 0; i < filtersApplied.length; i++) {
      if (valuesToSearch.indexOf(filtersApplied[i]) !== -1) {
        isValidToShow = true;
      }
    }

    if (!isValidToShow && filtersApplied.length > 0) {
      document.querySelector(".card#" + productsCards[x].id).style.display = "none";
    } else {
      document.querySelector(".card#" + productsCards[x].id).style.display = "block";
    }
  }


  var findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

  console.log(findDuplicates(prods)) // All duplicates
  console.log([...new Set(findDuplicates(prods))]) // Unique duplicates





  console.log(prods);
}




// w3schools accordion example
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}