//const subirProductos = document.querySelector("#Tarjeta")

/*class Producto {
    constructor(nombre, precio, descripcion, stock) {
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.stock = stock
    }
}

const prod1 = new Producto("Notebook 14 pulgadas", 150000, 15)
const prod2 = new Producto("Notebook Gamer", 225000 , 20)
const prod3 = new Producto("Monitor 14 pulgada", 30000, 24)
*/


function cargarProductos (){
    const Tarjeta = document.getElementById("Tarjetas")
    productos.forEach(producto => {
        Tarjeta.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                                 </div>`
    })
}

cargarProductos ()

const titulo = document.querySelector("#Titulo")
titulo.addEventListener("mousemove",() => {
    titulo.title = "Prueba de evento mousemove"
})


