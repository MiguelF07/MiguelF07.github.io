// Get Value Of LocalStorage
var localStorageKey = 'WheelDeal-Project-ShoppingCart';
var valuesOnLS = localStorage.getItem(localStorageKey);
var valuesOnLSJSON = JSON.parse(valuesOnLS);
var container = document.getElementById('shopping-cart-items');
var priceTotal = document.getElementById('total-price');

// Create the catalog on init of the Page
if (valuesOnLSJSON && valuesOnLSJSON.length > 0) {
    createItems(valuesOnLSJSON);
} else {
    createNoProdsMessage();
}

function createNoProdsMessage() {
    container.innerHTML = '<p>Não tens produtos no Carrinho!</p>';
}

function createItems(arrayProds) {

    container.innerHTML = '';
    var _priceTotal = 0;
    arrayProds.forEach((result, idx) => {

        _priceTotal += result.qty * result.prod.priceInt;

        // Create card element
        var card = document.createElement('div');
        card.classList = 'card-body';

        // Construct card content
        var content = `<div class="item" id="${result.prod.id}">
        <button class="button remove-button" id="${result.prod.id}">Remove</button>
        
        <div class="image" style="width:85px">
            <img src="../imagens/${result.prod.image}" alt="" width="100%" />
        </div>

        <div class="quantity" >
            <button class="minus-btn${result.qty === 1 ? ' block-button' : ''}" id="${result.prod.id}" type="button" name="button">
                <img src="../imagens/minus.svg" alt="" />
            </button>
            <input id="${result.prod.id}" type="text" name="name" value="${result.qty}">
            <button class="plus-btn" id="${result.prod.id}" type="button" name="button">
                <img src="../imagens/plus.svg" alt="" /> 
            </button>
        </div>
        
        <div class="description">
            <span>${result.prod.name}</span>
            <span>${result.prod.sucata}</span>
        </div>
                
        <div class="total-price">${result.prod.priceInt * result.qty}</div>
      </div>`;

        // Append newyly created card element to the container
        container.innerHTML += content;
        priceTotal.innerHTML = _priceTotal;
    });
}

function calculateTotalPrice(prods) {

    if(prods == null || prods.length === 0) {
        priceTotal.innerHTML = 0;

    } else {
        var _priceTotal = 0;
        prods.forEach((result, idx) => {
            _priceTotal += result.qty * result.prod.priceInt;
            priceTotal.innerHTML = _priceTotal;
        });
    }
}

// Add Event Listener to plus button
var elPlus = document.querySelectorAll('#shopping-cart-items .item .quantity .plus-btn');
for (var i = 0; i < elPlus.length; i++) {
    elPlus[i].addEventListener('click', function (event) {
        var iterationProductId = event.currentTarget.id;
        addRemoveQty(true, iterationProductId, event.currentTarget);
    });
}

// Add Event Listener to minus button
var elMinus = document.querySelectorAll('#shopping-cart-items .item .quantity .minus-btn');
for (var i = 0; i < elMinus.length; i++) {
    elMinus[i].addEventListener('click', function (event) {
        var iterationProductId = event.currentTarget.id;
        addRemoveQty(false, iterationProductId, event.currentTarget);
    });
}

// Add Event Listener to remove button
var elRemove = document.querySelectorAll('#shopping-cart-items .item .remove-button');
for (var i = 0; i < elRemove.length; i++) {
    elRemove[i].addEventListener('click', function (event) {
        var iterationProductId = event.currentTarget.id;
        removeFromCart(iterationProductId);
    });
}


function addRemoveQty(add, iterationProductId, element) {
    var valuesOnLS = localStorage.getItem(localStorageKey);
    var valuesOnLSJSON = JSON.parse(valuesOnLS);

    var idLS = valuesOnLSJSON.findIndex(x => x.prod.id === iterationProductId);

    if (add) {
        valuesOnLSJSON[idLS].qty += 1;
    } else {
        if (valuesOnLSJSON[idLS].qty > 1) {
            valuesOnLSJSON[idLS].qty -= 1;        
        }
    }


    var buttonMinus = document.querySelector('#shopping-cart-items .item .quantity .minus-btn#' + iterationProductId);
    if (valuesOnLSJSON[idLS].qty === 1) {
        // Disable the button
        buttonMinus.classList.add('block-button');
    } else {
        // enable the button
        buttonMinus.classList.remove('block-button');
    }

    calculateTotalPrice(valuesOnLSJSON);

    var search = '#shopping-cart-items .item .quantity input#' + iterationProductId;
    document.querySelector(search).value = valuesOnLSJSON[idLS].qty;
    
    localStorage.setItem(localStorageKey, JSON.stringify(valuesOnLSJSON));
}

function removeFromCart(iterationProductId){
    var valuesOnLS = localStorage.getItem(localStorageKey);
    var valuesOnLSJSON = JSON.parse(valuesOnLS);
    var newValues = valuesOnLSJSON.filter(x => x.prod.id !== iterationProductId);

    localStorage.setItem(localStorageKey, JSON.stringify(newValues));

    calculateTotalPrice(newValues);

    if(valuesOnLSJSON.length === 0) {
        createNoProdsMessage();
    }
    var elToRemove = document.querySelector('#shopping-cart-items .item#' + iterationProductId);
    elToRemove.style.display = "none";
}

var modal = document.getElementById("modal-product");

function openProductModal() {
    modal.classList.toggle('is-active');
}

function closeModal() {
    modal.classList.remove('is-active');
}

function showInput() {
    document.getElementById("cuppon-area").classList.toggle('is-active');
}

function showNote() {
    document.getElementById("note-area").classList.toggle('is-active');
}