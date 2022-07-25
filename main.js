const icono = document.getElementById("menu");

const menu = document.querySelector(".mostrarMenu");

const cart = document.getElementById("cart");

const mostrarCart = document.querySelector(".contenedor2")


icono.addEventListener("click", () => {

    menu.classList.toggle("menuShow");

})

cart.addEventListener("click", () => {

    mostrarCart.classList.toggle("menuShow2");

})
