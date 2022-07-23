const stockProductos = [

   {id: 1, name: "Ryzen 3 3200G", precio: "38565", img: "https://http2.mlstatic.com/D_NQ_NP_924534-MLA31852310802_082019-O.webp"},
   {id: 2, name: "Ryzen 5 3400G", precio: "51000", img: "https://http2.mlstatic.com/D_NQ_NP_662435-MLA50784234393_072022-O.webp"},
   {id: 3, name: "Ryzem 7 5800X", precio: "75000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_920739-MLA44347283255_122020-F.webp"},
   {id: 4, name: "Intel Core I3 10105f", precio: "15000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_654063-MLA46318631821_062021-F.webp"},
   {id: 5, name: "Intel Core i5-10400F", precio: "28000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_951550-MLA43003993763_082020-F.webp"},
   {id: 6, name: "Intel Core i7-10700F", precio: "59000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_767562-MLA44771865278_022021-F.webp"},
   {id: 7, name: "Motherboard Gigabyte Ga-b450m", precio: "20000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_906630-MLA50679362514_072022-F.webp"},
   {id: 8, name: "Motherboard Gigabyte H410m", precio: "15000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_607835-MLA48120448959_112021-F.webp"},
   {id: 9, name: "Memoria RAM Vengeance RGB 16GB", precio: "20000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_684969-MLA47962858193_102021-F.webp"},
   {id: 10, name: "RTX 3060 8GB MSI", precio: "135000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_862662-MLA45806911924_052021-F.webp"},
   {id: 11, name: "RX 6500XT 4GB GIGABYTE", precio: "83000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_705926-MLA49520014918_032022-F.webp"},
   {id: 12, name: "Gabinete Gamer Thermaltake S300", precio: "19900", img: "https://http2.mlstatic.com/D_NQ_NP_2X_811129-MLA44128434268_112020-F.webp"},
   {id: 13, name: "Gabinete Gamer Sentey X10", precio: "7000", img: "https://http2.mlstatic.com/D_NQ_NP_2X_679124-MLA31652578709_082019-F.webp"},
   
]
 
const containerProductos = document.getElementById("productos");

let carrito = [];

 stockProductos.forEach(producto => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML= `

    <img src="${producto.img}" class="img" alt="${producto.name}" logo>

    <div>

        <h5>${producto.name}</h5>

        <p class="precio">$ ${producto.precio}</p>

        <button class="btn Carrito" id="agregar${producto.id}">Agregar al carrito</button>

    </div>
    
    `;

    containerProductos.append(card);

    const boton = document.querySelector(".btn.Carrito");

    boton.addEventListener("click", () => {

      agregarAlCarrito(producto.id);

  })

 })

 const agregarAlCarrito = (prodId) => {

   const item = stockProductos.find((prod) => prod.id === prodId);

   carrito.push(item);

   console.log(carrito)

 }