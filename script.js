document.addEventListener('DOMContentLoaded',()=>{
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartDrawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const openCartBtn = document.getElementById('open-cart-btn');
    // const cartCount = document.getElementById('cart-count');

    let cart = [];

    // Getting all products
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products =>{
        console.log(products);
        products.forEach(product =>{
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
            <img src = "${product.image}" alt = "${product.title}">
            <span>${product.title}</span>
            <p>$${product.price}</p>
            <button onclick="addTocart(${product.id})">Add to Cart</button>
            `
            productList.appendChild(productDiv)
        })
    })

    window.addTocart = function(id){
        console.log(id);
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(product => {
            const cartItem = cart.find(item => item.id === product.id)
            if(cartItem){
                cartItem.quantity += 1
            }else{
                product.quantity = 1
                cart.push(product)
            }
            //Perform logic here later
            render()
        })
    }

    window.incrementQuantity = function(id){
        console.log(id);
        const cartItem = cart.find(item => item.id == id)
        if(cartItem){
            cartItem.quantity += 1
        }
        render()
    }
    window.decrementQuantity = function(id){
        console.log(id);
        const cartItem = cart.find(item => item.id == id)
        if(cartItem && cartItem.quantity > 1){
            cartItem.quantity -= 1
        }else{
            cart = cart.filter(item => item.id != id);
        }
        render()
    }
    window.removeFromCart = function(id){
        console.log(id);
        cart = cart.filter(item => item.id != id);
        render()
    }


    function render(){
        cartItems.innerHTML = ''
        let totalItems = 0;
        let totalPrice = 0;
        cart.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
            const cartItem = document.createElement('li')
            cartItem.innerHTML = `
            ${item.title} - $ ${item.price} x ${item.quantity}
            <button onclick="incrementQuantity(${item.id})">+</button>
            <button onclick="decrementQuantity(${item.id})">-</button>
            <button onclick="removeFromCart (${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItem)
        })
        cartTotal.innerHTML = `Total Items: ${totalItems}, Total Price: ${totalPrice.toFixed(2  )}`

    }

 
})