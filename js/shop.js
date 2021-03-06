// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
    offer: {
      number: 3,
      percent: 20
    }
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery'
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
    offer: {
      number: 10,
      percent: 30
    }
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty'
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty'
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty'
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes'
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes'
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes'
  },
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  for (let product of products){
    if (id === product.id){
      cartList.push(product)
    }
  }
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
  cart.length = 0;
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let added of cartList){
    total += added.price;
  }
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  for (let added of cartList){
    if (cart.length > 0){
      let repeated = false;
      let i = 0;
      while (!repeated && i < cart.length){
        if (added.id === cart[i].id){
          cart[i].quantity += 1;
          repeated = true;
        }
        i++
      }
      if (!repeated){
        added.quantity = 1;
        cart.push(added);
      }
    } else {
      added.quantity = 1;
      cart.push(added);
    }
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let list of cart){
    list.subtotal = (list.quantity * list.price).toFixed(2);
    if (list.offer && list.quantity >= list.offer.number){
      list.offer.price = list.price * (1-(list.offer.percent/100));
      list.subtotalDiscounted = (list.quantity * list.offer.price).toFixed(2);
    }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  applyPromotionsCart();
  total = 0;
  let textCart = '';

  for (let list of cart) {
    if (list.subtotalDiscounted) {
      textCart += `
        <tr>
        <th scope="row">${list.name}</th>
        <td>${list.offer.price}</td>
        <td>${list.quantity}</td>
        <td>${list.subtotalDiscounted}</td>
        <td><button onclick="removeFromCart(${list.id})"><i class="bi bi-trash"></i></button></td>
        </tr>`;
    } else {
      textCart += `
        <tr>
        <th scope="row">${list.name}</th>
        <td>${list.price}</td>
        <td>${list.quantity}</td>
        <td>${list.subtotal}</td>
        <td><button onclick="removeFromCart(${list.id})"><i class="bi bi-trash"></i></button></td>
        </tr>`;
    }
  }
  for (let list of cart){
    if (list.subtotalDiscounted){
      total += Number(list.subtotalDiscounted);
    } else {
      total += Number(list.subtotal);
    }
  }

  document.getElementById('cart_list').innerHTML = textCart;
  document.getElementById('total_price').innerHTML = total;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  let productFound = false;
  let i = 0;
  while (!productFound && i < products.length) {
    if (id === products[i].id){
      if (cart.length > 0){
        let repeated = false;
        let j = 0;
        while (!repeated && j < cart.length){
          if (products[i].id === cart[j].id){
            cart[j].quantity += 1;
            repeated = true;
          }
          j++
        }
        if (!repeated){
          let product = products[i];
          product.quantity = 1;
          cart.push(product);
        }
      } else {
        let product = products[i];
        product.quantity = 1;
        cart.push(product);
      }
      productFound = true;
    }
    i++
  }
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  let founded = false;
  let i = 0;

  while (!founded && i < cart.length) {
    if (id === cart[i].id){
      if (cart[i].quantity > 1){
        cart[i].quantity -= 1;
        if (cart[i].offer && cart[i].quantity < cart[i].offer.number){
          cart[i].subtotalDiscounted = null;
        }
      } else {
        cart.splice(i,1);
      }
    }
    i++;
  }

  printCart();
}

function open_modal(){
  printCart();
}