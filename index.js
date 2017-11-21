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
    for(var i in cart){
      var nextItem = `${Object.keys(i)[0]} at $${i[Object.keys(i)[0]]}`
      statement += nextItem
      if (countdown > 2) {
        statement += ', and '
      } else if (countdown ===2){
        statement += ' and '
      }else if (countdown === 1) {
        statement += '.'
      }
    }
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
