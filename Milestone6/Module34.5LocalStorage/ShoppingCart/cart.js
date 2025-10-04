
const handleProducts = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEl.value;
    const quantity = parseInt(quantityEl.value);
    // console.log(`${quantity} ${product}\'s added successfully`)

    displayProducts(product,quantity);
    addProductsToCart(product, quantity)

    //resets the input fields
    productEl.value = "";
    quantityEl.value = "";
}

const getCart = () =>{
    let cart = {};
    const cartJSON = localStorage.getItem('cart')
    if(cartJSON){
        cart = JSON.parse(cartJSON)
    }
    return cart;
}
const addProductsToCart = (product, quantity) => {
    const cart = getCart()
    if(cart[product]){
        cart[product] = parseInt(cart[product]) + quantity;
    }else{
        cart[product] = quantity;
    }
    console.log('cart', cart)
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
}
//display products in UI (from the input fields)
const displayProducts = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} - ${quantity} `
    const ul = document.getElementById('products-container');
    ul.appendChild(li);
}
// display products in UI from local storage (stored datas from LS) 
const displayStoredProductsFromLS = () => {
    
    const cart = getCart();
    for(const product in cart){
        const quantity = cart[product]
        console.log(product, quantity)
        displayProducts(product, quantity)
    }

}
displayStoredProductsFromLS();

/**
 * To save object/array in the local storage
 * 1. convert the object to JSON string by using JSON.stringify
 * 2. localstorage.setItem()
 * 
*/

/**
 * To get object/array from the local storage
 * 1. get the item from local storage & it will be in JSON string
 * 2. convert the JSON into js object using JSON.parse
 * 
*/