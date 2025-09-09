export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    Quantity: 2,
    },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    Quantity: 1
    }];
}




function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.Quantity += 1;
    } else{
        cart.push({
        productId : productId,
        Quantity : 1
        });
    }
    saveToStorage();
}


export function removeFromCart (productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;

    saveToStorage();
}


// export function updateCartQuantity() {
//   let cartQuantity = 0;

//   cart.forEach((cartItem) => {
//     cartQuantity += cartItem.Quantity;
//   });

//   document.querySelector('.js-cart-quantity')
//     .innerText = cartQuantity;
// }
