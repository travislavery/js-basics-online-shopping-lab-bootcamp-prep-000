var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemObj = {}
  itemObj[item] = price
 cart = [...cart, itemObj]
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length<1) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    var itemHere = cart[0]
    console.log(`In your cart, you have ${Object.keys(itemHere)[0]} at $${itemHere[Object.keys(itemHere)[0]]}.`)
  } else if (cart.length >= 2){
    var countdown = cart.length
    var statement = "In your cart, you have "
    for(var item in cart){
      var nextItem = `${Object.keys(cart[item])[0]} at $${cart[item][Object.keys(cart[item])[0]]}`
      statement = statement + nextItem
      if (countdown === 2 && cart.length === 2){
        statement = statement + ' and ';
      } else if (countdown === 2) {
        statement = statement + ', and ';
      } else if (countdown === 1) {
        statement = statement + '.';
      } else if (countdown > 2) {
        statement = statement + ', ';
      }
      countdown -= 1;
    }
    console.log(statement)
  }
  
}

function total() {
  // write your code here
  var sumTotal = 0;
  for(var item in cart) {
    sumTotal += cart[item][Object.keys(cart[item])[0]]
  }
  return sumTotal
}

function removeFromCart(item) {
  if (!cart.hasOwnProperty(item)) {
    console.log('That item is not in your cart.')
    return cart;
  } else if (cart.hasOwnProperty(item)) {
    delete cart[item]
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
