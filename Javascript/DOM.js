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


/*function cargarProductos (){
    const Tarjeta = document.getElementById("Tarjetas")
    productos.forEach(producto => {
        Tarjeta.innerHTML += `  <div class="row">
                                <div class="col-sm-12 col-md-6 col-xl-4">
                                <div class="card" style="width: 18rem;">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary agrgar carrito">añadir al carrito</a>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>`
    })
}*/

//cargarProductos ()

/*const titulo = document.querySelector("#Titulo")
titulo.addEventListener("mousemove",() => {
    titulo.title = "Prueba de evento mousemove"
})
*/
const containerDiv = document.querySelector(".container")
const carritoDiv = document.querySelector(".carrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function crearCards (){
    productos.forEach(prod=>{
        containerDiv.innerHTML +=  `<div class="row">
                                    <div class="col-sm-12 col-md-6 col-xl-4">
                                     <div class="card" style="width: 18rem;">
                                    <img src="./img/smartphone.jpg" class="card-img-top" alt="imagen de un smartphone">
                                    <div class="card-body">
                                    <h5 class="card-title">${prod.Nombre}</h5>
                                    <p class="card-text">${prod.descripcion}</p>
                                    <p class="card-text">${prod.precio}</p>
                                    <p class="card-text">${prod.stock}</p>
                                    <button class="btn btn-primary carrito" id= "btn-agregar${prod.id}">añadir al carrito</button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>`   
    })

    funcionalidadbtn()
                        
}

function funcionalidadbtn(){
    productos.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click", ()=> {
            console.log(prod)
            agregarAlCarrito(prod)
        })
    })
}

function agregarAlCarrito(prod){
    let existe = carrito.some((productoSome) =>productoSome.id === prod.id)
    if(existe === false){
        prod.cantidad                                                                                                                                                                                                              = 1
        carrito.push(prod)
    } else{
        prod.cantidad++
    }
    console.log(carrito)
    reenderizaCarrito ()
}


function reenderizaCarrito (){
    carritoDiv.innerHTML = ""
    carrito.forEach((prod) => {
        carritoDiv.innerHTML += `<div class="row">
                                <div class="col-sm-12 col-md-6 col-xl-4">
                                <div class="card" style="width: 18rem;">
                                <img src="./img/smartphone.jpg" class="card-img-top" alt="imagen de un smartphone">
                                <div class="card-body">
                                <h5 class="card-title">${prod.Nombre}</h5>
                                <p class="card-text">${prod.descripcion}</p>
                                <p class="card-text">${prod.precio}</p>
                                <p class="card-text">${prod.stock}</p>
                                <button class="btn btn-primary carrito" id= "btn-borrar${prod.id}">borrar</button>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>`
    
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProductos()

}

function borrarProductos(){
    carrito.forEach((prod) => {
        document.querySelector(`#btn-borrar${prod.id}`)
        .addEventListener("click", ()=> {
            carrito =carrito.filter(
                (productofilter) =>productofilter.id !== prod.id)
                    reenderizaCarrito ()
        })
    })

}
crearCards ()
reenderizaCarrito ()