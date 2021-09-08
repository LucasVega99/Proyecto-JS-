// Función constructora 
class Producto {
    constructor(id, img, categoria, modelo, precio) {
      this.id = id;
      this.img = img;
      this.categoria = categoria;
      this.modelo = modelo;
      this.precio = parseFloat(precio);
    }
}

// Stock
const stock = [
   new Producto (1, "img/Mothers/AMD/Mother Asrock A520M-HVS AM4 $7180.jpg", "Mother", "Asrock A520M-HVS", 7180),
   new Producto (2, "img/Mothers/AMD/Mother Asrock B450M Steel Legend AM4 RGB Dual M.2 Dual USB 3.1 $11670.jpg", "Mother" ,"Asrock B450M Steel Legend", 11670),
   new Producto (3, "img/Mothers/Intel/Mother Asrock H310CM-HDV Socket 1151 8va Gen $7437.jpg", "Mother" ,"Asrock H310CM-HDV", 7437),
   new Producto (4, "img/Mothers/AMD/Mother Gigabyte A520M AORUS ELITE AM4 $13110.jpg", "Mother" ,"Gigabyte A520M AORUS ELITE", 13110),
   new Producto (5, "img/Mothers/AMD/Mother Gigabyte AB350M V2.0 DS3H AM4 $7430.jpg", "Mother" ,"Gigabyte AB350M V2.0 DS3H", 7430),
   new Producto (6, "img/Mothers/Intel/Mother Gigabyte B365M DS3H 1151 9th Gen $9100.jpg", "Mother" ,"Gigabyte B365M DS3H", 9100),
   new Producto (7, "img/Mothers/intel/Mother Gigabyte H310M-H LGA 1151 8VA gen $7210.jpg", "Mother" ,"Gigabyte H310M-H", 7210),
   new Producto (8, "img/Mothers/intel/Mother Gigabyte Z390 M GAMING 9th Gen 1151 $20890.jpg", "Mother" ,"Gigabyte Z390 M GAMING",  20890),
   new Producto (11, "img/Placas de video/AMD/Placa De Video MSI Radeon RX 580 8GB GDDR5 ARMOR OC $128000.jpg", "PlacaDeVideo" ,"MSI Radeon RX 580 8GB", 128000),
   new Producto (12, "img/Placas de video/GeForce/Placa De Video GeForce MSI GT 710 1GB LP Disipador $8940.jpg", "PlacaDeVideo" ,"MSI GeForce GT 710 1GB", 8940),
   new Producto (13, "img/Placas de video/GeForce/Placa De Video GeForce MSI GT 710 2GB DDR3 Low Profile $11650.jpg", "PlacaDeVideo" ,"MSI GeForce GT 710", 11650),
   new Producto (14, "img/Placas de video/GeForce/Placa De Video GeForce MSI GT 1030 2GB GDDR4 OC LP $27500.jpg", "PlacaDeVideo" ,"MSI GeForce GT 1030", 27500),
   new Producto (15, "img/Placas de video/AMD/Placa De Video Asrock Radeon RX 570 4GB Phantom Gaming D $73900.jpg", "PlacaDeVideo" ,"Asrock Radeon RX 570 ", 73900),
   new Producto (16, "img/Placas de video/AMD/Placa De Video Sapphire Radeon RX 580 8GB GDDR5 PULSE $125000.jpg", "PlacaDeVideo" ,"Sapphire Radeon RX 580 ", 125000),
   new Producto (17, "img/Procesadores/AMD/Procesador AMD Athlon 3000G 3.5GHz + Radeon Vega 3 AM4 $18500.jpg", "Procesador" ,"AMD Athlon 3000G", 18500),
   new Producto (18, "img/Procesadores/AMD/Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler $12980.jpg", "Procesador" ,"AMD Ryzen 3 3200G", 12980),
   new Producto (19, "img/Procesadores/AMD/Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler $20.010.jpg", "Procesador" ,"AMD Ryzen 5 1600", 20010),
   new Producto (20, "img/Procesadores/AMD/Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler $29.180.jpg", "Procesador" ,"AMD Ryzen 5 3600", 29180),
   new Producto (21, "img/Procesadores/Intel/Procesador Intel Core i3 9100F 4.2GHz Turbo 1151 9th Gen $9426.jpg", "Procesador" ,"Intel Core i3 9100F", 9426),
   new Producto (22, "img/Procesadores/Intel/Procesador Intel Core i3 10100F 4.3GHz Turbo 1200 Comet Lake $13780.jpg", "Procesador" ,"Intel Core i3 10100F", 13780),
   new Producto (23, "img/Procesadores/Intel/Procesador Intel Core i5 11400F S1200 11th Gen Rocket Lake $23790.jpg", "Procesador" ,"Intel Core i5 11400F", 23790),
   new Producto (24, "img/Procesadores/Intel/Procesador Intel Core i7 10700F 4.8GHz Turbo Socket 1200 Comet Lake $35.500.jpg","Procesador" ,"Intel Core i7 100700F", 35500)
]

// Productos DOM
for (const productosDisponibles of stock) {
$('#stock').append(`<div class='contenido ${productosDisponibles.categoria}'"><img id='img' src='${productosDisponibles.img}'><p id='modelo'>${productosDisponibles.categoria} ${productosDisponibles.modelo}</p><p id='precio'>$ ${productosDisponibles.precio}</p><button id='boton-carrito' class='btn-productos' data-id='${productosDisponibles.id}' data-pushbar-target='mypushbar1'>Agregar al carrito</button></div>`)
}

//LocalStorage

const guardarProductosLS = (clave,valor) => {localStorage.setItem(clave,valor)};
guardarProductosLS("productosDisponibles", JSON.stringify(stock))


// Carrito de compras 
class Carrito {
  //Lectura de datos del boton para que sepa que mandar
  comprarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('btn-productos')){
      const producto = e.target.parentElement;
      this.leerDatosProducto(producto);
    }
  }
  
  leerDatosProducto(producto){
      const infoProducto = {
        imagen : producto.querySelector('#img').src,
        titulo : producto.querySelector('#modelo').textContent,
        precio : producto.querySelector('#precio').textContent,
        id : producto.querySelector('#boton-carrito').getAttribute('data-id'),
        cantidad : 1
      }
      // Evitar duplicado de producto
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS){
          if(productoLS.id === infoProducto.id){
            productosLS = productoLS.id;
          }
        });
        if(productosLS === infoProducto.id){
          console.log('Producto ya agregado'); 
        } else {
          this.insertarAlCarrito(infoProducto);
        }
  }
  //Añadir el producto al carrito
  insertarAlCarrito(producto){
  const productosEnCarrito = document.createElement('div');
  productosEnCarrito.innerHTML = `
    <section>
        <img src="${producto.imagen}" width=80>
        <p>${producto.titulo}</p>
        <p>${producto.precio}</p>
    </section>
    <a href="#" class="btn-borrar-producto" data-id="${producto.id}">Borrar</a>
    `;
  listaProductos.appendChild(productosEnCarrito);
  this.guardarProductosLocalStorage(producto);
  }
  //Eliminar producto
  eliminarProducto(e){
    e.preventDefault();
    let producto, productoID;
    if(e.target.classList.contains('btn-borrar-producto')){
      e.target.parentElement.remove(); 
      producto = e.target.parentElement;
      productoID = producto.querySelector('.btn-borrar-producto').getAttribute('data-id');
    }
    this.eliminarProductoLocalStorage(productoID);
  }
  //Vaciar carrito
  vaciarCarrito(e){
    e.preventDefault();
    while(listaProductos.firstChild){ 
      listaProductos.removeChild(listaProductos.firstChild);
    }
    this.vaciarLocalStorage();
    return false;
  }
  //Local Storage del carrito
  guardarProductosLocalStorage(producto){
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  obtenerProductosLocalStorage(){
    let productoLS;
    if(localStorage.getItem('productos') === null){
      productoLS = [];
    }
    else {
      productoLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productoLS;
  }
  //Eliminar producto del LS cuando lo eliminamos del carrito
  eliminarProductoLocalStorage(productoID){ 
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function(productoLS, index){
      if(productoLS.id === productoID){
        productosLS.splice(index, 1);
      }
    });
    localStorage.setItem('productos', JSON.stringify(productosLS));
  }
  //Mantener productos al refrescar la pág
  leerLocalStorage(){
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function(producto){
      const productosEnCarrito = document.createElement('div');
      productosEnCarrito.innerHTML = `
      <section>
      <img src="${producto.imagen}" width=80>
      <p>${producto.titulo}</p>
      <p>${producto.precio}</p>
  </section>
  <a href="#" class="btn-borrar-producto" data-id="${producto.id}">Borrar</a>
  `;
    listaProductos.appendChild(productosEnCarrito);
    });
  }
  vaciarLocalStorage(){
    localStorage.removeItem('productos');
  }
};

const carro = new Carrito();
//Eliminar producto del carrito
const contenidoCarrito = document.getElementById('contenido-carrito');
//Lectura de datos del boton
const productosContainer = document.getElementById('listado-productos');
// Container del carrito
const listaProductos = document.querySelector('#contenido-carrito');
// Vaciar carrito
const vaciarCarritoBtn = document.getElementById('btn-vaciar-carrito');

cargarEventos();
function cargarEventos() {
  //Lectura de datos del boton
  productosContainer.addEventListener('click', (e)=>{carro.comprarProducto(e)});
  //Eliminar del carrito
  contenidoCarrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
  // Vaciar todo el carrito
  vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
  //Al refrescar la página, los productos seleccionados se mantienen
  document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
}
