
const navInicio = document.getElementById("nav-inicio");
if (navInicio) {
    navInicio.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}


const navHombre = document.getElementById("nav-hombre");
if (navHombre) {
    navHombre.addEventListener("click", () => {
        window.location.href = "services.html#hombre";
    });
}


const navMujer = document.getElementById("nav-mujer");
if (navMujer) {
    navMujer.addEventListener("click", () => {
        window.location.href = "services.html#mujer";
    });
}


const navDescuentos = document.getElementById("nav-descuentos");
if (navDescuentos) {
    navDescuentos.addEventListener("click", () => {
        window.location.href = "services.html";
    });
}


const navContacto = document.getElementById("nav-contacto");
if (navContacto) {
    navContacto.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
}


const navCesta = document.getElementById("btn-cesta");
if (navCesta) {
    navCesta.addEventListener("click", () => {
        window.location.href = "cart.html";
    });
}

let filterItem = document.querySelectorAll(".filter-item")
let products = document.querySelectorAll(".prod-card")

filterItem.forEach(function (filterBtn) {
    filterBtn.addEventListener("click", function () {

        filterItem.forEach(function (btnPill) {
            btnPill.classList.remove("active")
        })
        filterItem.classList.add("active")

        let filter = filterBtn.dataset.filter

        products.forEach(function (productCard) {
            if (filter === "todo") {
                productCard.style.display = "block"

            } else if (productCard.dataset.categoria === filter) {
                productCard.style.display = "block"

            } else {
                productCard.style.display = "none"
            }
        })
    })
})

let cart = []
let addCart = document.querySelectorAll(".add-btn")
let cartButton = document.querySelector(".cart-btn")

addCart.forEach(function (boton) {
    boton.addEventListener("click", function () {

        let card = boton.closest(".product-card")
        let cardName = card.querySelector(".product-name").textContent
        let price = card.querySelector(".product-price").textContent

        let existingProduct = cart.find(function (addedProducts) {
            return addedProducts.name === cardName
        })

        if (existingProduct) {
            existingProduct.quantity = existingProduct.quantity + 1
        } else {
            cart.push({ name: cardName, price: price, quantity: 1 })
        }

        let totalProducts = cart.reduce(function (total, products) {
            return total + products.quantity
        }, 0)

        cartButton.textContent = "Cart (" + totalProducts + ")"
        console.log(cart)
    })
})

